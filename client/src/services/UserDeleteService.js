const API_BASE = process.env.REACT_APP_API_BASE;

export const UserDeleteService = {
  deleteUser: async (id) => {
    const res = await fetch(`${API_BASE}/user?user_id=${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.detail || 'Failed to delete user');
    }

    return await res.json(); // e.g. { message: "1 deleted" }
  },
};