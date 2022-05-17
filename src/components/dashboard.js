import React, {useState} from 'react';
import List from "./list";
import {Button} from "react-bootstrap";
import NewTodo from "./new-todo";

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const [classChange, setClassChange] = useState('todo-animation-closed')
    const handleClick = (event) => {
        setShow(!show)
        let cls = show ? 'todo-animation-open' : 'todo-animation-closed';
        setClassChange(cls)
    }
    return (
        <div className={'mt-2'}>
            <Button onClick={handleClick}>Add New Todo</Button>

            <div className={classChange}>
                <NewTodo />
            </div>
            <List />
        </div>
    );
};

export default Dashboard;