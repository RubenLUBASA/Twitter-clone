import React from 'react';

function Widget () {
    return (
<div className="widgets">
  <div className="widgets__input">
    <span className="material-symbols-outlined widgets__searchIcon">
      {" "}
      search{" "}
    </span>
    <input type="text" placeholder="searh twitter" />
  </div>
  <div className="widgets_widgetContainer">
    <h2>What's happening</h2>
    <blockquote className="twitter-tweet">
      <p lang="en" dir="ltr">
        At dawn from the gateway to Mars, the launch of Starship’s second flight
        test <a href="https://t.co/ffKnsVKwG4">pic.twitter.com/ffKnsVKwG4</a>
      </p>
      — SpaceX (@SpaceX){" "}
      <a href="https://twitter.com/SpaceX/status/1732824684683784516?ref_src=twsrc%5Etfw">
        December 7, 2023
      </a>
    </blockquote>
  </div>
</div>
);
}
export default Widget;
