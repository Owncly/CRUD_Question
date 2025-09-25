const API_BASE = process.env.REACT_APP_API_BASE;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export const UserDeleteService = {
  deleteUser: async (id) => {
    const res = await fetch(`${API_BASE}/user?user_id=${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${API_TOKEN}`, 
      },
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.detail , 'Failed to delete user');
    }

    return await res.json();
  },
};