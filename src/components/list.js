import React, {useState} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {deleteTodo} from "../store/actions";

const List = (props) => {

    const {todos, deleteTodo} = props;
    const [show, setShow] = useState(false);
    console.log(todos);

    const handleDelete = (event) => {
        deleteTodo(event.target.id)
    }

    return (
        <div className={'container-fluid my-5'}>
            {
                todos && todos.map((todo) => {
                    return (

                            <div key={todo.id} className={'card my-2'}>
                                <Link to={`/list/${todo.id}`} key={todo.id} className={'nav-link text-dark'}>
                                    <div className={'card-title'}>{todo.title}</div>
                                    <div className={'card-body'}>{todo.details}</div>
                                </Link>
                                <div className={'card-footer'}>
                                    {/*<button className={'btn btn-primary mx-3'}>Update</button>*/}
                                    <button className={'btn btn-danger mx-3'} id={todo.id} onClick={handleDelete}>Delete</button>
                                </div>
                            </div>
                    );
                })
            }
        </div>
    );
};

const mapDispatchToState = (dispatch) => {
    return {
        deleteTodo : (id) => {
            dispatch(deleteTodo(id));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todoList,
    }
}

export default connect(mapStateToProps, mapDispatchToState)(List);