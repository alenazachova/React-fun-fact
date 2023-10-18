import React from "react";

function Header() {
  return (
    <nav>
      <div className="nav--logo">
        <a className="nav--link" href="https://react.dev/">
          <img src="favicon.ico" alt="logo" />
        </a>
        <h3>ReactFacts</h3>
      </div>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}

export default Header;
