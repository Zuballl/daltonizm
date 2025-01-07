from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import FileResponse
from pydantic import BaseModel
import os
from image_filters import apply_filter
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

class ProcessImageRequest(BaseModel):
    filter_type: str
    filename: str

# Endpoint do przetwarzania obrazu
@app.post("/process/")
async def process_image(request: ProcessImageRequest):
    try:
        input_path = os.path.join(UPLOAD_DIR, request.filename)
        if not os.path.exists(input_path):
            raise HTTPException(status_code=404, detail="Plik nie istnieje")
        output_path = apply_filter(input_path, request.filter_type)
        return FileResponse(output_path, media_type="image/png", filename=os.path.basename(output_path))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Nie udało się przetworzyć obrazu: {e}")

# Endpoint do przesyłania plików
@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    try:
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_path, "wb") as f:
            f.write(await file.read())
        return {"filename": file.filename}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Nie udało się przesłać pliku: {e}")

# Endpoint do pobierania przesłanych plików
@app.get("/upload/{filename}")
async def get_uploaded_file(filename: str):
    file_path = os.path.join(UPLOAD_DIR, filename)
    if os.path.exists(file_path):
        return FileResponse(file_path)
    raise HTTPException(status_code=404, detail="Plik nie istnieje")