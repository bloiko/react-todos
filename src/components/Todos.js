import React, {useEffect, useState} from 'react';
import {Card, Divider} from "antd";
import TodoItem from "./TodoItem"
import TodoForm from "./TodoForm";

const Todos = () => {

    const dateFormat = (date) => {
        const validateDate = (date) => date < 10 ? `0${date}` : date;

        const dateArr = date.toString().split(' ')

        return `${validateDate(dateArr[2])}.${validateDate(date.getMonth() + 1)}.${dateArr[3]} - ${dateArr[4]}`
    }

    const [todos, setTodos] = useState([
        {id: 0, title: 'Some', description: 'Some desc', date: dateFormat(new Date()), checked: false}
    ]);


    const [uncheckedTodosCounter, setUncheckedTodosCounter] = useState(0)



    const calculateUncheckedTodosAmount = () => {
        let sum = 0;
        for (let i = 0; i < todos.length; i++) {
            if (!todos[i].checked) {
                sum++
            }
        }
        setUncheckedTodosCounter(sum)
        return <span> {uncheckedTodosCounter || 0}</span>;
    }


    const removeChecked = () => {
        setTodos(todos.filter(item => !item.checked))
    }

    const handleSubmit = (title, description) => {

        title = title ? title : 'no name'
        description = description ? description : 'no description'
        const date = new Date();
        console.log(dateFormat(date))
        const newItem = {
            id: date,
            title,
            description,
            date: dateFormat(date),
            checked: false
        }
        setTodos([...todos, newItem])
    }

    const handleRemove = (id) => {
        setTodos(todos.filter(item => item.id !== id))
    }

    const handleCheck = (id) => {
        const index = todos.findIndex(item => item.id === id);
        if (index !== -1) {
            const item = todos[index];
            item.checked = !item.checked;
            todos.splice(index, 1, item);
            setTodos([...todos]);
        }
    }

    const renderTodoItems = (todos) => {
        const items = todos.map((item) => {
            return <TodoItem key={item.id} item={item} handleRemove={handleRemove} handleCheck={handleCheck}/>
        })
        return <ul className="todo-list">{items}</ul>;
    }

    useEffect(() => {
        calculateUncheckedTodosAmount()
    }, [todos]);


    return (
        <Card title="My Todos">
            {`Amount of unchecked todos: ${uncheckedTodosCounter}`}
            <TodoForm handleSubmit={handleSubmit} handleRemoveChecked={removeChecked}/>
            <Divider/>
            {renderTodoItems(todos)}
        </Card>
    );
};

export default Todos;
