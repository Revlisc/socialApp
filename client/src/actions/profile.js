import { UPDATE_BIO } from '../actionTypes/actionTypes';
import * as api from '../api/index.js';

export const updateBio = (id, updatedBio) => async (dispatch) => {
    try {
      const { data } = await api.updateBio(id, updatedBio);
  
      dispatch({ type: UPDATE_BIO, payload: data });
    } catch (error) {
      console.log(error);
    }
};