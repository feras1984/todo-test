import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {Button, Form} from "react-bootstrap";
import {updateTodo} from "../store/actions";

const Details = (props) => {
    const id = useParams().id
    const {todos, updateTodo} = props;
    const navigate = useNavigate();


    const todo = todos.find(todoItem => {
        return todoItem.id == id;
    })

    const [title, setTitle] = useState(todo.title);
    const [details, setDetails] = useState(todo.details);

    const submitHandler = (event) => {
        event.preventDefault();
        updateTodo({
            id: todo.id,
            title,
            details,
        })
        navigate('/');
    }

    const titleHandle = (event) => {
        setTitle(event.target.value)
    }

    const detailsHandle = (event) => {
        setDetails(event.target.value);
    }

    return (
        <div className={'container my-5'}>
            {
                todo &&
                <Form className={'mx-5'} onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="todo-title">
                        <Form.Label>Todo Title</Form.Label>
                        <Form.Control type="text" onChange={titleHandle} value={title}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="todo-details">
                        <Form.Label>Todo Address</Form.Label>
                        <textarea className={'form-control'} type="textarea" rows={3} onChange={detailsHandle} value={details}/>
                    </Form.Group>

                    <Button type={'submit'}>Update</Button>
                </Form>
            }
        </div>

    );
};

const mapDispatchToProps = (dispatch) => {

    return {
        updateTodo : (details) => {
            console.log('details: ', details)
            dispatch(updateTodo(details));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todoList,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);