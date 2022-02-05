import React, { useState } from "react";
import axios from "axios";
import { Input, Menu, Dimmer, Loader } from 'semantic-ui-react';
import { Header as HeaderSemantic } from 'semantic-ui-react';
export default function Header({ setItems, setMessage }) {

  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const baseURL = "https://itunes.apple.com/search";

  const HandleSearch = async () => {
    setIsLoading(true);
    await axios
      .get(baseURL, {
        params: {
          term: search,
        },
      })
      .then((response) => {
        setIsLoading(false);
        setItems(response.data.results);
        if (response.data.results.length === 0)
          setMessage('noItems')
      })
      .catch((error) => {
        setMessage('error')
        setIsLoading(false);
        console.log(error);

      });
  };


  const handleChange = (e) => {
    setSearch(e.target.value);
  };


  return (
    <div>
      <Menu color="teal" inverted stackable>
        <Menu.Item >
          <HeaderSemantic inverted size='large' as='h1'>iTunes content finder</HeaderSemantic>
        </Menu.Item>
        <Menu.Item position='right'>
          <Dimmer active={isLoading} inverted>
            <Loader />
          </Dimmer>
          <Input action={{
            color: 'blue',
            icon: 'search',
            onClick: HandleSearch,
          }}
            actionPosition='right'
            placeholder='Search...'
            conPosition='left'
            value={search}
            onChange={handleChange}
          />


        </Menu.Item>

      </Menu>
    </div >
  );
}