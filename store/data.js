export const state = () => ({
    confirmMessage:{},
    snackbar:{},
});

export const mutations = {
    setConfirmMessage(state, value){
        state.confirmMessage = value;
    },
    setSnackbar(state,snackbar){
        state.snackbar = snackbar;
    },
    
}

export const actions = {
    setConfirmMessage(vuexContext, value){
        vuexContext.commit("setConfirmMessage", value);
    },
    setSnackbar(vuexContext,snackbar){
        vuexContext.commit("setSnackbar", snackbar);
    },
    
}

export const getters = {
    confirmMessage(state){
        return state.confirmMessage
    },
    snackbar(state){
        return state.snackbar;
    },
}