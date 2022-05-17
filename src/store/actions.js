import details from "../components/details";

export const addTodo = (details) => {
    return (dispatch, getState) => {
         dispatch({
            type: 'ADD_TODO',
            details,
        })
    }
}

export const updateTodo = (details) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'UPDATE_TODO',
            details,
        })
    }
}

export const deleteTodo = (todoId) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'DELETE_TODO',
            todoId,
        })
    }
}