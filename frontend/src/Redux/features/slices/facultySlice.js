import {createSlice} from '@reduxjs/toolkit';

const initalState ={
    faculty:{},
    loading:true,
    isUpdated:false,
    isDeleted :false,
    isAuthenticated :false

}

export const facultySlice = createSlice({
    name :'faculty',
    initalState,
    reducers:{
        registerfacultyRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        registerfacultySuccess(state,action){
            return{
                ...state,
                loading:false,
                isAuthenticated:true,
                faculty:action.payload
            }
        },

        registerfacultyFailure(state,action){
            return{
                ...state,
                loading:false,
                error :action.payload
            }
        },
        loginfacultyRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        loginfacultySuccess(state,action){
            return{
                ...state,
                loading:false,
                isAuthenticated:true,
                faculty: action.payload
            }
        },
        loginfacultyFailure(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        getAllfacultyRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        getAllfacultySuccess(state,action){
            return{
                ...state,
                loading:false,
                isAuthenticated:true,
                faculty:action.payload
            }
        },
        getAllfacultyFail(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        getfacultyRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        getfacultySuccess(state,action){
            return{
                ...state,
                loading:false,
                isAuthenticated:true,
                faculty:action.payload
            }
        },
        getfacultyFail(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        updatefacultyRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        updatefacultySuccess(state,action){
            return{
                ...state,
                loading:false,
                isAuthenticated:true,
                faculty:action.payload,
                isUpdated:true
            }
        },
        updatefacultyFail(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        deletefacultyRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        deletefacultySuccess(state,action){
            return{
                ...state,
                loading:false,
                isAuthenticated:true,
                faculty:action.payload,
                isDeleted:true
            }
        },
        deletefacultyFail(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        clearfacultyUpadted(state,action){
            return{
                ...state,
                isUpdated:false
            }
        },
        clearError(state,action){
            return{
                ...state,
                error:null
            }
        }
    }
    
})

const { actions, reducer } = facultySlice;
export const {
    registerfacultyFailure,
    registerfacultyRequest,
    registerfacultySuccess,
    loginfacultyFailure,
    loginfacultyRequest,
    loginfacultySuccess,
    getAllfacultyFail,
    getAllfacultyRequest,
    getAllfacultySuccess,
    getfacultyFail,
    getfacultyRequest,
    getfacultySuccess,
    updatefacultyFail,
    updatefacultyRequest,
    updatefacultySuccess,
    deletefacultyFail,
    deletefacultyRequest,
    deletefacultySuccess,
    clearError,
    clearfacultyUpadted
} = actions;

export default reducer;