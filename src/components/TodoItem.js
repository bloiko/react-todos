import React from 'react';
import {Button} from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";


const TodoItem = ({item, handleCheck, handleRemove}) => {


    const onChangeItem = () => {
        handleCheck(item.id)
    };

    const onRemoveItem = (event) => {
        event.preventDefault();
        handleRemove(item.id);
    }

    const trashIcon = <svg xmlns="http://www.w3.org/2000/svg" height="18px"  viewBox="0 0 24 24" width="18px"
                           fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path
            d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
    </svg>


    return (
        <li className="todo-item"
            key={item.id}
            style={{
                textDecoration: item.checked ? 'line-through' : 'none',
                color: item.checked ? 'red' : 'black'
            }}>
            <Checkbox onClick={onChangeItem} checked={item.checked}>{item.title} </Checkbox>
            <span>{item.description}</span>
            <span>{item.date}</span>
            <Button danger onClick={onRemoveItem}>
                {trashIcon}
            </Button>
        </li>
    );
};

export default TodoItem;
