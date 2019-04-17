import { getStore, setStore } from "../../utils/store";
import * as types from "../mutation-types";

const state = {
    userName: '',
    sidebar: {
        opened: !+getStore("sidebarStatus")
    }
};

// getters
const getters = {
    sidebar: state => state.sidebar,
};

// actions
const actions = {
    ToggleSideBar({ commit }) {
        commit(types.TOGGLE_SIDEBAR);
    }
};

// mutations
const mutations = {
    [types.TOGGLE_SIDEBAR](state) {
        if (state.sidebar.opened) {
            setStore("sidebarStatus", 1, 365);
        } else {
            setStore("sidebarStatus", 0, 365);
        }
        state.sidebar.opened = !state.sidebar.opened;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
