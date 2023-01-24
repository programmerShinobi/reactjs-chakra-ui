import ActionTypes from "../Constant/ActionType";

const initialState = {
    users : []
}

function userReducers(state = initialState, action){
    switch (action.type) {
        case ActionTypes.GET_USERS:
            return {...state, users: action.payload}
        
        case ActionTypes.ADD_USER:
            return {...state}
    
        case ActionTypes.GET_USER:
            return {...state}
        
        case ActionTypes.UPDATE_USER:
            return applyUpdateUser(state, action)
        
        case ActionTypes.DEL_USER:
            return { ...state, users: state.filter(user => user.id != action.payload.id)}

        default:
            return state
    }
}

const applyUpdateUser = async (state , action) => {
    return state.users.map((user) => {
        if(user.id == action.payload.id){
            return {
                ...state,
                ...action.payload
            };
        }else{
            return state;
        }
    })
}

export default userReducers;