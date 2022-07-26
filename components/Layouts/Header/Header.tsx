const Header = () => {
  return (
    <div className="header_wrap">
      <header className="header">
        <div className="header_logo">
          <h1>Header Logo</h1>
        </div>
      </header>
      <nav className="header_nav_wrap">
        <div className="left_header_wrap">
          <ul className="left_header_menu"></ul>
        </div>
        <div className="right_header_wrap">
          <ul className="right_header_menu"></ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
