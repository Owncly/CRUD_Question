from fastapi import HTTPException, Request
import os
import jwt
SECRET = os.getenv("JWT_SECRET")

def verify_frontend_token(request: Request):
    auth = request.headers.get("Authorization")
    if not auth or not auth.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing token")

    token = auth.split(" ")[1]  #Get actual token

    try:
        #checking if token is valid
        payload = jwt.decode(token, SECRET, algorithms=["HS256"])
        return payload 
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")

