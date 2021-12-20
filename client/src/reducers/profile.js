import { UPDATE_BIO } from '../actionTypes/actionTypes';

export default function profileReducer(bioData = [], action) {
    switch (action.type) {
      case UPDATE_BIO:
        return bioData.map((bio) => (bio._id === action.payload._id ? action.payload : bio));
      
      default:
        return bioData;
    }
  };