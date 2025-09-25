const API_BASE = process.env.REACT_APP_API_BASE;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export const UserGetService = {
  getUsers: async () => {
    const res = await fetch(`${API_BASE}/users`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }

    const users = await res.json();

    return users.map(user => ({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      age: user.age,
      dob: user.dob,
    }));
  },
};