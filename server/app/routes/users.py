from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import crud, database
from ..schemas import UserCreate
from ..auth.secrets import verify_frontend_token
router = APIRouter()

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

#Using Depends to enforce token
@router.get("/users")
def get_users(
    db: Session = Depends(get_db),
    _: dict = Depends(verify_frontend_token)  # enforces token
):
    return crud.get_users(db)

@router.post("/users/create")
def create_user(
    user: UserCreate,
    db: Session = Depends(get_db),
    _: dict = Depends(verify_frontend_token)
):
    return crud.create_user(db, user.dict())

@router.delete("/user")
def delete_user(
    user_id: int,
    db: Session = Depends(get_db),
    _: dict = Depends(verify_frontend_token)
):
    success = crud.delete_user(db, user_id)
    if not success:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": f"{user_id} deleted"}
