import { combineReducers, configureStore } from "@reduxjs/toolkit";
import studentReducer from '../features/slices/studentSlice'
import adminReducer from '../features/slices/adminSlice'
import courseReducer from '../features/slices/courseSlice'
import facultyReducer from '../features/slices/facultySlice'

 const reducer = combineReducers({
  studentState:studentReducer,
  adminState:adminReducer,
  courseState:courseReducer,
  facultyState:facultyReducer

 })

 const store = configureStore({
  reducer
 })

 export default store;