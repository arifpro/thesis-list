import axios from "axios";
import shortid from "shortid";
import { studentConstants } from "../actionTypes";

const API_URL = "http://localhost:7000/api/student";
// const API_URL = 'https://thesis-list.herokuapp.com/api/student'

// <===================> studentGet <===================>
export const studentGet = () => async (dispatch) => {
  try {
    dispatch({
      type: studentConstants.STUDENT_GET_REQUEST,
    });

    const res = await axios.get(`${API_URL}/get-all`);

    console.log(res.data.students)

    if (res) {
      dispatch({
        type: studentConstants.STUDENT_GET_SUCCESS,
        payload: res.data.students,
      });
    } else {
      dispatch({
        type: studentConstants.STUDENT_GET_FAILED,
        error: "unable to get student data",
      });
    }
  } catch (e) {
    dispatch({
      type: studentConstants.STUDENT_GET_FAILED,
      error: e,
    });
  }
};

// <===================> studentAdd <===================>
export const studentAdd = (title) => async (dispatch) => {
  try {
    dispatch({
      type: studentConstants.STUDENT_ADD_REQUEST,
    });

    // const newTodo = {
    //   id: shortid.generate(),
    //   title,
    //   isDone: false,
    // };

    const res = await axios.post(`${API_URL}/add`, { title });

    if (res.status === 200) {
      dispatch(studentGet());
      // dispatch({
      //   type: studentConstants.STUDENT_ADD_SUCCESS,
      //   payload: res.data,
      // });
    } else {
      dispatch({
        type: studentConstants.STUDENT_ADD_FAILED,
        error: "unable to add student data",
      });
    }
  } catch (e) {
    dispatch({
      type: studentConstants.STUDENT_ADD_FAILED,
      error: e,
    });
  }
};

// <===================> studentUpdate <===================>
export const studentUpdate =
  ({ id, title, isDone }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: studentConstants.STUDENT_UPDATE_REQUEST,
      });

      const res = await axios.post(`${API_URL}/update`, { id, title, isDone });

      if (res.status === 200) {
        dispatch(studentGet());
        // dispatch({
        //   type: studentConstants.STUDENT_UPDATE_SUCCESS,
        //   payload: { id, title, isDone },
        // });
      } else {
        dispatch({
          type: studentConstants.STUDENT_ADD_FAILED,
          error: "unable to update student data",
        });
      }
    } catch (e) {
      dispatch({
        type: studentConstants.STUDENT_UPDATE_FAILED,
        error: e,
      });
    }
  };

// <===================> studentDelete <===================>
export const studentDelete = (id) => async (dispatch) => {
  try {
    dispatch({
      type: studentConstants.STUDENT_DELETE_REQUEST,
    });

    const res = await axios.post(`${API_URL}/delete`, { id });

    if (res.status === 200) {
      dispatch(studentGet());
      // dispatch({
      //   type: studentConstants.STUDENT_DELETE_SUCCESS,
      //   payload: id,
      // });
    } else {
      dispatch({
        type: studentConstants.STUDENT_ADD_FAILED,
        error: "unable to delete student data",
      });
    }
  } catch (e) {
    dispatch({
      type: studentConstants.STUDENT_DELETE_FAILED,
      error: e,
    });
  }
};
