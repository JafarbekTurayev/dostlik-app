import {UPDATE_STATE} from '../types/menusTypes';
import axios from "axios";
import {API_URL, TOKEN_NAME} from "../../tools/constants";
import {toast} from "react-toastify";
import {menusReducer} from "../reducers/menusReducer";

export const updateState = (data) => {
    return {
        type: UPDATE_STATE,
        payload: data,
    }
}

export function editMenu(data) {
    return function (dispatch) {
        console.log(data)
        axios.post(API_URL + "menu", data)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    dispatch(getAllMenus());
                    dispatch({
                        type: UPDATE_STATE,
                        payload: {
                            modalOpen: false
                        }
                    })
                } else {
                    toast.error(res.data.message);
                }
            })
    }
}

export function addMenu(data) {
    return function (dispatch) {
        console.log(data)
        axios.post(API_URL + "menu", data)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    dispatch(getAllMenus());
                    dispatch({
                        type: UPDATE_STATE,
                        payload: {
                            modalOpen: false
                        }
                    })
                } else {
                    toast.error(res.data.message);
                }
            })
    }
}

export function getMenus() {
    return function (dispatch) {
        axios.get(API_URL + "menu")
            .then((res) => {
                dispatch(updateState({menus: res.data.data}))
                // dispatch({
                //     type: "CHANGE_LOADING",
                //     payload: {
                //         pageLoading: false
                //     }
                // })
            })
    }
}


export function getAllMenus() {
    return function (dispatch) {
        axios.get(API_URL + "menu/all")
            .then((res) => {
                dispatch(updateState({menus: res.data.data}))
                // dispatch({type: "CHANGE_LOADING", payload: {pageLoading: false}})

            })
    }
}

export function deleteMenu(id) {
    console.log("delete keldi!")
    return function (dispatch) {
        axios.delete(API_URL + "menu/" + id)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    dispatch(getAllMenus());
                    dispatch({type: UPDATE_STATE, payload: {deleteModalOpen: false}})
                } else {
                    toast.error("Xatolik!");
                }
            })
    }
}

export function getSubMenus() {
    return function (dispatch) {
        axios.get(API_URL + "menu/subMenus")
            .then((res) => {
                dispatch(updateState({subMenus: res.data.data}))
            })
    }
}
