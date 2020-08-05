import React, { useState, useEffect } from "react";
import "./Newsfeed.css";
import { connect } from "react-redux";
import { getNews } from "../../Redux/Action/index";
import twitterIcon from "../../images/twitterIcon.png";
function Newsfeed(props) {
  useEffect(() => {
    console.log("Feeds", props.NewsFeed);
  });

  return (
    <div className="newsFeed">
      <div className="newsCard">
        <div className="newsUser">
          <img src={twitterIcon} alt="ProfileImage" className="profileImage" />
          <h4>Profile Name</h4>
          </div>
          <div className="newsHeadline">Headlines</div>
          <div className="newsImage">
          {/* <img src={twitterIcon} alt="ProfileImage" /> */}
          </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { NewsFeed } = state;
  return { NewsFeed };
};

const mapDispatchToProps = {
  getNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed);
// export default Newsfeed;
