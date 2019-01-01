import React from 'react';

const Header = () => {
  return (
    <React.Fragment>
      <header>
        Logo
      </header>
      <nav>
        <ul>
          <li><a href="/">トップ</a></li>
          <li><a href="/about">このサイトについて</a></li>
          <li><a href="/login">ログイン</a></li>
        </ul>
      </nav>
    </React.Fragment>
  )
};

export default Header;