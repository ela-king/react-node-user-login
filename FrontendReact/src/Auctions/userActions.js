
import axios from 'axios'
import { GETALL_USER_SUCCESS, GETALL_USER_FAILED } from '../stores/types'
import { ToastContainer, toast } from 'react-toastify';
const API_URL = 'http://localhost:3000'
var qs = require('qs')

export function addUser(history, user) {

    return (dispatch) => {

        axios.post(`${API_URL}/users/insertUser`, qs.stringify(user))
            .then(data => {
                console.log(data)
                if (data.data.status == "success") {
                    toast.success("Register Successfully!")
                    history.push('/login')
                } else {
                    toast.error(data.data.message)
                }
            }).catch(function (err) {
                console.log(err)
                toast.error("Network error")
            })
    }
}
export function loginUser(history, user) {

    return (dispatch) => {

        axios.post(`${API_URL}/users/loginUser`, qs.stringify(user))
            .then(data => {
                console.log(data.data)

                if (data.data.status == "success") {
                    toast.success("Login Success!")
                    localStorage.setItem('user', JSON.stringify(data.data.userdata))
                    history.push('/home')
                } else {
                    toast.error(data.data.message)
                }
            }).catch(function (err) {
                console.log(err)
                toast.error("Network error")
            })
    }
}


export function getAllUser() {
    return (dispatch) => {
        dispatch({
            type: GETALL_USER_FAILED,
            Error: null
        })
        axios.get(`${API_URL}/users/getAllUserlist`)
            .then(data => {

                dispatch({
                    type: GETALL_USER_SUCCESS,
                    payload: data
                })
            }).catch(function (err) {
                console.log('err', err)
                dispatch({
                    type: GETALL_USER_FAILED,
                    error: err.response
                })
            })

    }

}


