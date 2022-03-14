import React from "react";
// Context API
import { useStateValue } from "../StateProvider";
// Hooks
import useGoogleSearch from "../useGoogleSearch";
// CSS
import "./SearchPage.css";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
