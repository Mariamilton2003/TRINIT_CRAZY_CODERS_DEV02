import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  student: {},
  loading: true,
  isUpdated: false,
  isDeleted: false,
  isAuthenticated: false,
};

export const studentSlice = createSlice({
  name: "student",
  initalState,
  reducers: {
    registerStudentRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    registerStudentSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        student: action.payload,
      };
    },

    registerStudentFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    loginStudentRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    loginStudentSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        student: action.payload,
      };
    },
    loginStudentFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    getAllStudentRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    getAllStudentSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        student: action.payload,
      };
    },
    getAllStudentFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    getStudentRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    getStudentSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        student: action.payload,
      };
    },
    getStudentFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    updateStudentRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    updateStudentSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        student: action.payload,
        isUpdated: true,
      };
    },
    updateStudentFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    deleteStudentRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    deleteStudentSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        student: action.payload,
        isDeleted: true,
      };
    },
    deleteStudentFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    clearStudentUpadted(state, action) {
      return {
        ...state,
        isUpdated: false,
      };
    },
    clearError(state, action) {
      return {
        ...state,
        error: null,
      };
    },
  },
});

const { actions, reducer } = studentSlice;
export const {
  registerStudentFailure,
  registerStudentRequest,
  registerStudentSuccess,
  loginStudentFailure,
  loginStudentRequest,
  loginStudentSuccess,
  getAllStudentFail,
  getAllStudentRequest,
  getAllStudentSuccess,
  getStudentFail,
  getStudentRequest,
  getStudentSuccess,
  updateStudentFail,
  updateStudentRequest,
  updateStudentSuccess,
  deleteStudentFail,
  deleteStudentRequest,
  deleteStudentSuccess,
  clearError,
  clearStudentUpadted,
} = actions;

export default reducer;
