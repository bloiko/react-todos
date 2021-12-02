import React from 'react';
import {Button} from "antd";

import './RemoveButton.css'

const RemoveButton = ({handleRemoveChecked}) => {

    const onRemove = (event) => {
        event.preventDefault();
        handleRemoveChecked()
    }

    return (
        <Button danger onClick={onRemove}>
            Remove Checked
        </Button>
    );
};

export default RemoveButton;
