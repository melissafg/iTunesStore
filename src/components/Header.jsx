import React, { useState } from "react";
import axios from "axios";
import { Input, Menu, Button } from 'semantic-ui-react';
import { Header as HeaderSemantic } from 'semantic-ui-react';
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
export default function Header({ setItems, setError}) {

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
        setError(false);
        if (response.data.results.length > 0) {
          setItems(response.data.results);
        } else {
          setItems("NotItems");
        }

      })
      .catch((error) => {
        setError(true);
        setIsLoading(false);
        console.log(error);

      });
  };


  const handleChange = (e) => {
    setSearch(e.target.value);
  };


  return (
    <div>
      <Menu stackable>
        <Menu.Item >
          <HeaderSemantic size='large' as='h1'>iTunes content finder</HeaderSemantic>
        </Menu.Item>
        <Menu.Item position='right'>
          <Input loading={isLoading} className='search' placeholder='Search' value={search} onChange={handleChange} />
        </Menu.Item>
        <Menu.Item>
          <Button icon='search' onClick={HandleSearch} />
        </Menu.Item>
      </Menu>
    </div>
  );
}