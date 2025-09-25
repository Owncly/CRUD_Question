from datetime import date

#Takes DOB as date and gives int age
def calculate_age(dob: date) -> int:
    today = date.today()
    #Standard way to resolve age fixed for leap years
    age = today.year - dob.year - ((today.month, today.day) < (dob.month, dob.day))
    return age