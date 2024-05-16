import SVGComponent from "./cartwidget.jsx";

const NavBarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <h1 className="mt-3 ms-2 logo">J</h1>
      <div className="collapse navbar-collapse justify-content-center">
        <ul className="menu navbar-nav">
          <li className="nav-item">
            <a>About</a>
          </li>
          <li>
            <a>Skills</a>
            <ul className="submenu">
              <li>
                <a>React</a>
              </li>
              <li>
                <a>React</a>
              </li>
              <li>
                <a>React</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Work</a>
          </li>
        </ul>
      </div>
      <SVGComponent className="cartComponent mt-3 position-relative" />
      <span className="cartNumber mt-2">1</span>
    </nav>
  );
};

export default NavBarComponent;
