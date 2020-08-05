import React, {useEffect, useState} from "react";
import "./SearchBox.css";
import twitterIcon from '../../images/twitterIcon.png'
function SearchBox() {
    const [searchInput, setSearchInput] = useState();
  return (
    <div className="searchBox">
        <img src={twitterIcon} alt='Twitter' className='twitterImage'/>

        <div id="wrap">
{/* <form id="nav-search" class="form-search" action="/search" role="search"> */}
    <div id="nav-search" >
  <input id="search-query" class="search-input" type="text" placeholder="Search Twitter" value={searchInput} onChange={text => setSearchInput(text.value)}/>
    <button class="icon" ></button>
    </div>
  {/* </form> */}
</div>
    </div>
  );
}

export default SearchBox;
