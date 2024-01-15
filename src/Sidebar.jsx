import React from 'react';

function Sidebar() {
    return (
      <div className="sidebar">
  <i className="fab fa-twitter" />
  <div className="sidebarOption active">
    <div
      style={{
        fontVariationSettings: '"FILL" 0, "wght" 100, "GRAD" 0, "opsz" 48'
      }}
    />
    <span className="material-symbols-outlined"> home </span>
    <h2>Home</h2>
  </div>
  <div className="sidebarOption">
    <span className="material-symbols-outlined">search</span>
    <h2>Explore</h2>
  </div>
  <div className="sidebarOption">
    <span className="material-symbols-outlined">notifications</span>
    <h2>notification</h2>
  </div>
  <div className="sidebarOption">
    <span className="material-symbols-outlined">mail</span>
    <h2>Message</h2>
  </div>
  <div className="sidebarOption">
    <span className="material-symbols-outlined"> Bookmarks</span>
    <h2>Bookmarks</h2>
  </div>
  <div className="sidebarOption">
    <span className="material-symbols-outlined"> list</span>
    <h2>Lists</h2>
  </div>
  <div className="sidebarOption">
    <span className="material-symbols-outlined">Person</span>
    <h2>Profile</h2>
  </div>
  <div className="sidebarOption">
    <span className="material-symbols-outlined"> more</span>
    <h2>More</h2>
  </div>
  <button className="sidebar__tweeter"> Tweet</button>
</div>

    );
  }

export default Sidebar;
