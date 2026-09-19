from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "FitPlan Python backend çalışıyor!"
    }


@app.get("/test")
def test():
    return {
        "status": "success",
        "message": "Backend bağlantısı başarılı!"
    }


@app.get("/program")
def program():
    return {
        "status": "success",
        "message": "FitPlan program sistemi Python üzerinden çalışıyor!",
        "program": [
            "Squat",
            "Bench Press",
            "Barbell Row",
            "Shoulder Press",
            "Biceps Curl"
        ]
    }