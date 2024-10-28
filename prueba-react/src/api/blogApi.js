import axios from 'axios';
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = () => axios.get(`${BASE_URL}/posts`);
export const getPost = (postId) => axios.get(`${BASE_URL}/posts/${postId}`);
export const getUser = (userId) => axios.get(`${BASE_URL}/users/${userId}`);
export const getComments = (postId) => axios.get(`${BASE_URL}/posts/${postId}/comments`);

//Simulo las tasks
const simulatedTags = ['React', 'JavaScript', 'CSS', 'Node.js'];

export const getTags = () => {
  return new Promise((resolve) => {
    resolve({ data: simulatedTags });
  });
};