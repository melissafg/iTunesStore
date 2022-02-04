import React, { useState } from "react";
import Header from "./Header";
import Items from "./Items";
import MessageModel from "./MessageModel";
import { Container } from 'semantic-ui-react';

function Home() {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('welcome');
  const messagesMap = {
    error: <MessageModel color='red' header='Error' description='Sorry something happened' />,
    noItems: <MessageModel color='yellow' header='Sorry' description="We can't find the search" />,
    welcome: <MessageModel color='gray' header='Welcome' description='Please enter the text in the search box and click on the button' />,
  }
  return (
    <>
      <Header setItems={(items) => setItems(items)} setMessage={message => setMessage(message)} />
      <Container style={{ marginTop: "50px" }}>
        {
          items.length ?
            <Items items={items} />
            :
            messagesMap[message]
        }
      </Container>
    </>
  );
}

export default Home;
