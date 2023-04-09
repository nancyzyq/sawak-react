import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        toastMes: '',
        toastShow: false
    },
    reducers: {
        updateToastMessage: (state, action) => {
            state.toastMes = action.payload
        },
        updateToastShow: (state, action) => {
            state.toastShow = action.payload
        }
    }
})

export const {updateToastMessage, updateToastShow} = homeSlice.actions
export default homeSlice.reducer