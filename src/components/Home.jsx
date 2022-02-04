import React, { useState } from "react";
import Header from "./Header";
import Items from "./Items";
import { Container, Message } from 'semantic-ui-react';

function Home() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  return (
    <>
      <Header setItems={(items) => setItems(items)} setError={(error) => setError(error)} />
      <Container style={{ marginTop: "50px" }}>
        {!error?
          items === "NotItems" ?
            <Message color="yellow">
              <Message.Header>Sorry </Message.Header>
              <p>we can't find the search</p>
            </Message>
            :
            items.length ?
              <Items items={items} />
              :
              <Message info>
                <Message.Header>Welcome</Message.Header>
                <p>Please enter the text in the search box and click on the button</p>
              </Message>
          :
          <Message error>
            <Message.Header>Error</Message.Header>
            <p>Sorry something happened</p>
          </Message>
        }
      </Container>

    </>
  );
}

export default Home;