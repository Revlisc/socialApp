import { FETCH_BY_USER, COMMENT, FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../actionTypes/actionTypes';

export default function postReducer(posts = [], action) {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case FETCH_BY_USER:
      return posts.filter((post) => post._id === action.payload._id)
    case COMMENT:
      return posts.map((post) => {
        if(post._id === action.payload._id) {
          return action.payload
        }
        return post
      })
      default:
      return posts;
  }
};