const API_BASE = process.env.REACT_APP_API_BASE;

export const UserCreateService = {
  createUser: async ({ first_name, last_name, dob }) => {
    const res = await fetch(`${API_BASE}/users/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },//Calc age in backend due to requirements
      body: JSON.stringify({ first_name, last_name, dob }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.detail || 'Failed to create user');
    }

    return await res.json();
  },
};

    