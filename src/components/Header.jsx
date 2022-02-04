import React, { useState } from "react";
import axios from "axios";
import { Input, Menu, Select, Button } from 'semantic-ui-react';
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
export default function Home() {
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const baseURL = "https://itunes.apple.com/search";

  const getItem = async () => {
    await axios
      .get(baseURL, {
        params: {
          term: search,
          media: filter,
        },
      })
      .then((response) => {
        setItem(response.data.results);
        setSearch(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleAttributeChange = (event) => {
    setFilter(event.target.value);
  };
  const options = [
    { key: 1, value: 'all', text: 'All' },
    { key: 2, value: 'music', text: 'Music' },
    { key: 3, value: 'movie', text: 'Movie' },
    { key: 4, value: 'podcast', text: 'Podcast' },
    { key: 5, value: 'musicVideo', text: 'Music Video' },
    { key: 6, value: 'audiobook', text: 'Audiobook' },
    { key: 7, value: 'tvShow', text: 'Tv Show' },
    { key: 8, value: 'software', text: 'Software' },
    { key: 9, value: 'shortFilm', text: 'Short Film' },
  ]
  return  (
    <Menu>
      <h2>
      iTunes content finder
      </h2>
      <Menu.Item position='right'>
        <Input className='search' placeholder='Search' value={search} onChange={handleChange}/>
      </Menu.Item>
      <Menu.Item >
      <Select placeholder='Select your country' options={options} onChange={handleAttributeChange} />
      </Menu.Item>
      <Menu.Item>
      <Button icon='search' onClick={() => getItem() }/>
      </Menu.Item>
    </Menu>
  );
}