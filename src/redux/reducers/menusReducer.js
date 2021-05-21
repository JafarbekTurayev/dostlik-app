import {UPDATE_STATE, SAVE_MENU} from '../types/menusTypes';
import axios from "axios";

const initialState = {
    modalOpen: false,
    isSubMenu: false,
    menus: [],
    deleteModalOpen: false,
    selectedIdForDelete: null,
    selectedMenu: {},
}
export const menusReducer = (stete = initialState, action) => {
    console.log("ishladi")
    switch (action.type) {
        case UPDATE_STATE:
            return {...stete, ...action.payload}
        default:
            return stete;
    }


    // if (action.type === UPDATE_STATE) {
    //     return {
    //         ...stete,
    //         ...action.payload
    //     }
    // }
    // return stete;
};
