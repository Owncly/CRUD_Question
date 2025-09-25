from sqlalchemy.orm import Session
from .models import User
from .age_calc import calculate_age


def get_users(db: Session):
    #Using this to calc age on run, otherwise DB would need to be updated consistently
    users = db.query(User).all()
    return [
        {
            "id": u.id,
            "first_name": u.first_name,
            "last_name": u.last_name,
            "dob": u.dob,
            "age": calculate_age(u.dob)
        }
        for u in users
    ]


def create_user(db: Session, user_data: dict):
    dob = user_data["dob"]
    user_data["age"] = calculate_age(dob)  
    user = User(**user_data)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

def delete_user(db: Session, user_id: int):
    user = db.query(User).filter(User.id == user_id).first()
    if user:
        db.delete(user)
        db.commit()
        return True
    return False