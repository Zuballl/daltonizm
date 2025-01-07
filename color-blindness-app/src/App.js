import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import FilterForm from "./components/FilterForm";
import Description from "./components/Description";

const App = () => {
  const [uploadedFile, setUploadedFile] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">
        Aplikacja dla Daltonistów
      </h1>
      <div className="flex flex-row w-11/12 max-w-7xl">
        {/* Lewa kolumna */}
        <div className="w-1/3 bg-white shadow-lg rounded-lg p-6">
          <Description />
        </div>

        {/* Prawa kolumna */}
        <div className="w-2/3 flex flex-col items-center bg-white shadow-lg rounded-lg ml-6 p-6">
          <UploadForm setUploadedFile={setUploadedFile} setPreviewUrl={setPreviewUrl} />
          {uploadedFile && (
            <>
              <img
                src={previewUrl || `http://127.0.0.1:8000/uploads/${uploadedFile}`}
                alt="Podgląd"
                className="mt-6 w-3/4 rounded-lg shadow-md"
              />
              <FilterForm uploadedFile={uploadedFile} setPreviewUrl={setPreviewUrl} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;