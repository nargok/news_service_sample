import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>
        Logo
      </h1>
      <nav>
        <ul>
          <li><a href="/">Top</a></li>
          <li><a href="/about">このサイトについて</a></li>
          <li><a href="/login">ログイン</a></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;