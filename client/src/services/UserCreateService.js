const API_BASE = process.env.REACT_APP_API_BASE;
//Token base auth to prevent external unauthed usage
const API_TOKEN = process.env.REACT_APP_API_TOKEN; 

export const UserCreateService = {
  createUser: async ({ first_name, last_name, dob }) => {
    console.log("Token:", API_TOKEN);
    const res = await fetch(`${API_BASE}/users/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`, 
      },//Calc age in backend due to requirements
      body: JSON.stringify({ first_name, last_name, dob }), 
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.detail , 'Failed to create user');
    }

    return await res.json();
  },
};

    
