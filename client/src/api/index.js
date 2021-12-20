import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
//would need to link to heroku link when I publish
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);

export const comment = (value, id) => API.post(`/posts/${id}/addComment`, {value})

export const updateBio = (id, updatedBio) => API.patch(`/profile/${id}`, updatedBio)
//export const fetchByUser = () => API.get(`/posts`)