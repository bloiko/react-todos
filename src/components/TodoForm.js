import React from 'react';
import {Button, Form, Input} from "antd";
import RemoveButton from "./RemoveButton";


const TodoForm = ({handleSubmit, handleRemoveChecked}) => {

    const [form] = Form.useForm();

    const validateTitle = (title) => title[0] === title[0].toUpperCase() && title[0].match(/[a-z]/i);
    const validateDescription = (description) => description.length >= 3

    const onFinish = (values) => {
        if (handleSubmit && validateTitle(values.title) && validateDescription(values.description)) {
            handleSubmit(values.title, values.description);
        }
        form.resetFields();
    }

    return (
        <Form form={form} className="todo-form" layout={'inline'} onFinish={onFinish}>
            <Form.Item name="title" className="todo-form-item">
                <Input placeholder="Todo Title"/>
            </Form.Item>
            <Form.Item name="description" className="todo-form-item">
                <Input placeholder="Todo Description"/>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" type="primary">Add</Button>
            </Form.Item>
            <Form.Item>
                <RemoveButton handleRemoveChecked={handleRemoveChecked}/>
            </Form.Item>
        </Form>
    );
};

export default TodoForm;

