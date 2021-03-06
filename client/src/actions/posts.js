import { COMMENT, FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../actionTypes/actionTypes';
import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// export const getByUser = (id) => async (dispatch) => {
//   try {
//     const { data: {data}} = await api.fetchByUser(id)
    
//     dispatch({ type: FETCH_BY_USER, payload: { data }})
//   } catch (error) {
//     console.log(error)
//   }
// }FETCH_BY_USER, 

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.likePost(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const addComment = (value, id) => async (dispatch) => {

  try {
    const { data } = await api.comment(value, id)

    dispatch({ type: COMMENT, payload: data})

    return data.comments
  } catch (error) {
    console.log(error)
  }
}
