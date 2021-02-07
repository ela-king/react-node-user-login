import { 
    GETALL_USER_SUCCESS,
    GETALL_USER_FAILED,  
 } from '../stores/types'

 const initialstate = {    
    getAllUser: [],
};  

export default function (state = initialstate, action) {

    switch (action.type) {
       
        case GETALL_USER_SUCCESS:

            return { ...state, getAllUser: action.payload.data}
    
        case GETALL_USER_FAILED:

            return { ...state, Error: action.error }

        default:
            return state;
    }

}