import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Context API
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
//CSS
import "./Search.css";
//Icons
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";

function Search({ hideButtons = false }) {
  const [{ term }, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log(input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outline">
            Google Search
          </Button>
          <Button>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outline"
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
