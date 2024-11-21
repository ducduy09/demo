const initState = {
    filter: {
        search: '',
        status: 'ALL',
        priority: []
    },
    todoList: [
        {id: 1, name: 'Learn Java', completed: true, priority: 'Medium'},
        {id: 2, name: 'Learn ReactNative', completed: false, priority: 'High'},
    ]
}

const rootReducer = (state = initState, action) => {
    console.log("State: ", state, action);
    switch(action.type){
        case 'ADD_ACTION':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        default:
            return state;
    }
}

export default rootReducer;