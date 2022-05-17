import React, {useState} from 'react';
import {addTodo} from "../store/actions";
import {connect} from "react-redux";
import {Form, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const NewTodo = (props) => {

    const {addTodo} = props;
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        addTodo({
            title,
            details
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
        <div className={'container my-5 todo-animation'}>
            <Form className={'mx-5'} onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="todo-title">
                    <Form.Label>Todo Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" onChange={titleHandle}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="todo-details">
                    <Form.Label>Todo Address</Form.Label>
                    <textarea className={'form-control'} rows={3} type="text" placeholder="Enter Details" onChange={detailsHandle}/>
                </Form.Group>

                <Button type={'submit'}>Add</Button>

            </Form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo : (details) => {
            dispatch(addTodo(details));
        }
    }
}

export default connect(null, mapDispatchToProps)(NewTodo);