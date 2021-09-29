export const state = () => ({
    confirmMessage:{},
    snackbar:{},
    tasks:[{
        title: "TO DO",
        order: 1,
        cards: [],
    }]
});

export const mutations = {
    setConfirmMessage(state, value){
        state.confirmMessage = value;
    },
    setSnackbar(state,snackbar){
        state.snackbar = snackbar;
    },
    setTasks(state,tasks){
        state.tasks = tasks;
    }
}

export const actions = {
    setConfirmMessage(vuexContext, value){
        vuexContext.commit("setConfirmMessage", value);
    },
    setSnackbar(vuexContext,snackbar){
        vuexContext.commit("setSnackbar", snackbar);
    },
    setTasks(vuexContext, tasks){
        vuexContext.commit("setTasks", tasks);
    }
}

export const getters = {
    confirmMessage(state){
        return state.confirmMessage
    },
    snackbar(state){
        return state.snackbar;
    },
    tasks(state){
        return state.tasks;
    }
}