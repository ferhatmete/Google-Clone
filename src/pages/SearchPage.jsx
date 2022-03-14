import React from "react";
import { Link } from "react-router-dom";
// Data
import Response from "../response";
// Context API
import { useStateValue } from "../StateProvider";
// Hooks
// import useGoogleSearch from "../useGoogleSearch";
// Components
import Search from "../components/Search";
// CSS
import "./SearchPage.css";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // Live apı
  // const { data } = useGoogleSearch(term);

  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link>
          <img
            className="searchPage__logo"
            src="	https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
