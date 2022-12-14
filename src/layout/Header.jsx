export function Header() {
  return (
    <header>
      <nav className="teal lighten-1">
        <div className="nav-wrapper container">
          <a href="!#" className="brand-logo">
            React Movies
          </a>
          <ul
            id="nav-mobile"
            className="right hide-on-med-and-down"
          >
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
