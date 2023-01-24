import ActionTypes from "../Constant/ActionType";
import ApiService from "../Service/ApiUsersService";

export const createUsers = (user) => async (dispatch) => {
    try {
        const res = await ApiService.create({ user });
        dispatch({
            type: ActionTypes.ADD_USER,
            payload: res.data
        });

        return Promise.resolve(res.data);
    } catch (err) {
        console.log(err)
        return Promise.reject(err);

    }
};

export const getAllUsers = () => async (dispatch) => {
    try {
        const res = await ApiService.getAll();
        dispatch({
            type: ActionTypes.GET_USERS,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}

export const updateUsers = (id, data) => async (dispatch) => {
    try {
        const res = await ApiService.update(id, data);

        dispatch({
            type: ActionTypes.UPDATE_USER,
            payload: res.data
        })

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const deleteUsers = (id) => async (dispatch) => {
    try {
        const res = await ApiService.remove(id);
        dispatch({
            type: ActionTypes.DELETE,
            payload: { id }
        })

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}