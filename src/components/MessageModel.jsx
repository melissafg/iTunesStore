import React from "react";
import { Message } from 'semantic-ui-react';

function MessageModel({ header, color, description }) {
    return (
        <Message color={color}>
            <Message.Header>{header}</Message.Header>
            <p>{description}</p>
        </Message>
    );
}

export default MessageModel;