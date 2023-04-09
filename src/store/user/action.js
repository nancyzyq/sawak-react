import {API} from '../../api/api'
import {updateUser} from './reducer'
const userAPI = new API('user')

export const signIn = (username, passwd) => async (dispatch) => {
    try {
        let re = await userAPI.fetch({username: username, passwd: passwd})
        // console.log(re)
        // store user information in localStorage 
        localStorage.setItem('user', JSON.stringify(re))
        // update user information in store
        dispatch(updateUser(re))
        // go to dashbaord page
        setTimeout(() => {
            console.log(localStorage.getItem('user'))
            if (re.role === 'admin') window.location.href = '/admin/menuitem'
        }, 1000)

    } catch (err) {
        console.log(err)
    }
}

export const signOut = () => async (dispatch) => {
    // delete user infromation in localStorage
    localStorage.removeItem('user')
    // go to login page
    setTimeout(() => {
        window.location.href = '/login'
    }, 1000)
}
