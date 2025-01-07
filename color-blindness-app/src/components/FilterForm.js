import React, { useState } from "react";
import axios from "axios";

const FilterForm = ({ uploadedFile, setPreviewUrl }) => {
  const [filterType, setFilterType] = useState("protanopia");
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleApplyFilter = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/process/",
        { filter_type: filterType, filename: uploadedFile },
        { responseType: "blob" }
      );

      const url = URL.createObjectURL(new Blob([response.data]));
      setPreviewUrl(url);
      setDownloadUrl(url);
    } catch (error) {
      alert("Wystąpił błąd podczas przetwarzania obrazu.");
    }
  };

  return (
    <div className="mt-6">
      <label className="text-lg font-medium mr-4">Wybierz filtr:</label>
      <select
        value={filterType}
        onChange={handleFilterChange}
        className="border rounded-lg px-4 py-2"
      >
        <option value="protanopia">Protanopia</option>
        <option value="deuteranopia">Deuteranopia</option>
        <option value="tritanopia">Tritanopia</option>
      </select>
      <button
        onClick={handleApplyFilter}
        className="ml-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500"
      >
        Zastosuj filtr
      </button>
      {downloadUrl && (
        <div className="mt-4">
          <a
            href={downloadUrl}
            download= {`${uploadedFile.split('.')[0]}_${filterType}.png`}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-200 shadow-md"
          >
            Pobierz przefiltrowany obraz
          </a>
        </div>
      )}
    </div>
  );
};

export default FilterForm;