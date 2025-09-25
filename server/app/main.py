from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import models, database, crud
from .schemas import UserCreate
from fastapi.middleware.cors import CORSMiddleware
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

#Fetch all users
@app.get("/users")
def get_users(db: Session = Depends(get_db)):
    return crud.get_users(db)

#Create a new user
@app.post("/users/create")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    return crud.create_user(db, user.dict())

#Delete user by ID
@app.delete("/user")
def delete_user(user_id: int, db: Session = Depends(get_db)):
    success = crud.delete_user(db, user_id)
    if not success:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": f"{user_id} deleted"}