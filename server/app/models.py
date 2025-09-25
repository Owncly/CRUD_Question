from sqlalchemy import Column, Integer, String, Date
from app.database import Base

#Table
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    age = Column(Integer, nullable=False)
    dob = Column(Date, nullable=False)