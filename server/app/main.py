from fastapi import FastAPI

app = FastAPI()

from app import models, database
models.Base.metadata.create_all(bind=database.engine)

@app.get("/")
def read_root():
    return {"message": "TESSSSSSSSSSSSSSSSSSSSST"}