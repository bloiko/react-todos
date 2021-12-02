import React from 'react';
import {Button} from "antd";

import './RemoveButton.css'

const RemoveButton = ({handleRemoveChecked, checkedTodos}) => {

    const onRemove = (event) => {
        event.preventDefault();
        handleRemoveChecked()
    }


    return (
        <Button danger onClick={onRemove}>
            Remove Checked {checkedTodos}
        </Button>
    );
};

export default RemoveButton;
