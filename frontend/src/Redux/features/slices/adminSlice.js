import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin: {},
    loading: true,
    isUpdated: false,
    isAuthenticated: false
}
export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        loginRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        loginSuccess(state, action) {
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                admin: action.payload
            }
        },
        loginFail(state, action) {
            return {
                ...state,
                error: action.payload
            }
        },
        registerAdminRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        registerAdminSuccess(state, action) {
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                admin: action.payload
            }
        },
        registerAdminFail(state, action) {
            return {
                ...state,
                error: action.payload
            }
        },
        clearAdminError(state, action) {
            return {
                ...state,
                error: null
            }
        },
        getProfileRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        getProfileSuccess(state, action) {
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                admin: action.payload
            }
        },
        getProfileFail(state, action) {
            return {
                ...state,
                error: action.payload
            }
        },
        updateProfileRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        updateProfileSuccess(state, action) {
            return {
                ...state,
                isAuthenticated: true,
                admin: action.payload,
                isUpdated: true

            }
        },
        updateProfileFail(state, action) {
            return {
                ...state,
                error: action.payload
            }
        },
        clearUpdateProfile(state, action) {
            return {
                isUpdated: false
            }
        },
        logoutSuccess(state, action) {
            return {
                ...state,
                loading: false,
                isAuthenticated: false
            }
        },
        logoutFail(state, action) {
            return {
                ...state,
                error: action.payload
            }
        },
        updatePasswordRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        updatePasswordSuccess(state, action) {
            return {
                ...state,
                isAuthenticated: true,
                admin: action.payload,
                isUpdated: true
            }
        },
        updatePasswordFail(state, action) {
            return {
                ...state,
                error: action.payload
            }
        }
    }
})

const { actions, reducer } = adminSlice;
export const {
    loginRequest,
    loginSuccess,
    loginFail,
    registerAdminRequest,
    registerAdminSuccess,
    registerAdminFail,
    getProfileRequest,
    getProfileSuccess,
    getProfileFail,
    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFail,
    updatePasswordRequest,
    updatePasswordSuccess,
    updatePasswordFail,
    clearAdminError,
    clearUpdateProfile
} = actions;

export default reducer;