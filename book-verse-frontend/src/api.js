import API from './axios';

export const loginUser = (data) => API.post('/api/auth/login', data );
export const registerUser = (data) => API.post('/api/auth/register', data );
export const changePassword = (data) => API.put('/api/auth/change-password', data);
export const deleteAccount = (data) => API.delete('/api/auth/delete-account', data);