import React from 'react';

import '../css/simple-sidebar.css';

const SideBar = () => {
  return (<div id="sidebar-wrapper">
    <ul className="sidebar-nav">
      <li className="sidebar-brand">
        <a href="#">
          Start Bootstrap
        </a>
      </li>
      <li>
        <a href="#">Dashboard</a>
      </li>
      <li>
        <a href="#">Shortcuts</a>
      </li>
      <li>
        <a href="#">Overview</a>
      </li>
      <li>
        <a href="#">Events</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Services</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>);
}

export default SideBar;
