import { updateToastMessage, updateToastShow } from "./reducer";

export const showToast = (mes) => (dispatch) => {
    // display toast for 2 seconds
    dispatch(updateToastMessage(mes))
    dispatch(updateToastShow(true))
    setTimeout(() => {
        dispatch(updateToastShow(false))
        dispatch(updateToastMessage(''))
    }, 2000)
}