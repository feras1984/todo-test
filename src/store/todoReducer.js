const initState = {
    todoList : [
        // {id: 1, title: 'title 1', details: 'details 1'},
        // {id: 2, title: 'title 2', details: 'details 2'},
        // {id: 3, title: 'title 3', details: 'details 3'}
    ],
}

const todoReducer = (state = initState, action) => {
    switch (action.type){
        case "ADD_TODO":
            let id = (new Date().getTime());
            let newTodo = {
                id,
                title: action.details.title,
                details: action.details.details,
            }
            console.log('newTodo:', newTodo);
            return{
                ...state,
                todoList: [...state.todoList, newTodo],
            }

        case "UPDATE_TODO" :
            let todo = state.todoList.find(todo => {
                return todo.id == action.details.id
            })

            todo.title = action.details.title;
            todo.details = action.details.details;

        case "DELETE_TODO" :
            // let id = action.todoId;
            let newList = state.todoList.filter(todo => {
                return todo.id != action.todoId;
            })
            return {
                ...state,
                todoList: newList,
            }
        default:
            return state;
    }
    // return state;
}

export default todoReducer;