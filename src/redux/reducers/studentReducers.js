import { studentConstants } from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
  success: "",
  studentsData: [
    // {
    //   id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    //   title: "First Item",
    //   isDone: false,
    // },
    // {
    //   id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    //   title: "Second Item",
    //   isDone: true,
    // },
    // {
    //   id: "58694a0f-3da1-471f-bd96-145571e29d72",
    //   title: "Third Item",
    //   isDone: false,
    // },
  ],
};

const studentReducer = (state = initialState, action) => {
  // console.log(action);
  // console.log(action.payload);

  switch (action.type) {
    // <===================> studentGet <===================>
    case studentConstants.STUDENT_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case studentConstants.STUDENT_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        success: "success",
        studentsData: action.payload,
      };
    case studentConstants.STUDENT_GET_FAILED:
      return {
        ...state,
        loading: false,
        error: "unable to get student data",
      };

    // <===================> studentAdd <===================>
    case studentConstants.STUDENT_ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case studentConstants.STUDENT_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: "success",
        studentsData: [...state.studentsData, action.payload],
      };
    case studentConstants.STUDENT_ADD_FAILED:
      return {
        ...state,
        loading: false,
        error: "unable to set student data",
      };

    // <===================> studentUpdate <===================>
    case studentConstants.STUDENT_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case studentConstants.STUDENT_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: "update success",
        studentsData: state.studentsData?.map((student) => {
          if (student.id === action.payload?.id) {
            console.log(action.payload);

            return {
              ...student,
              title: action.payload?.title,
              isDone: action.payload?.isDone,
            };
          } else {
            return { ...student };
          }
        }),
      };
    case studentConstants.STUDENT_UPDATE_FAILED:
      return {
        ...state,
        loading: false,
        error: "unable to update student data",
      };

    // <===================> studentDelete <===================>
    case studentConstants.STUDENT_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case studentConstants.STUDENT_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: "",
        studentsData: state.studentsData?.filter((item) => item.id !== action.payload),
      };
    case studentConstants.STUDENT_DELETE_FAILED:
      return {
        ...state,
        loading: false,
        error: "unable to delete student data",
      };

    default:
      return state;
  }
};

export default studentReducer;
