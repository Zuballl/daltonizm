import React, { useState } from "react";
import axios from "axios";

const UploadForm = ({ setUploadedFile, setPreviewUrl }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post("http://127.0.0.1:8000/upload/", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setUploadedFile(response.data.filename);
        setPreviewUrl(URL.createObjectURL(file));
      } catch (error) {
        alert("Wystąpił błąd podczas przesyłania pliku.");
      }
    } else {
      alert("Wybierz plik przed przesłaniem.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
      >
        Prześlij
      </button>
    </form>
  );
};

export default UploadForm;