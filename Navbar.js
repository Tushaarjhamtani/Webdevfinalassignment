import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">
      Bigg Boizz
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item"><Link href="/">
          <a className="nav-link active" aria-current="page" >
            Home
          </a></Link>
        </li>
        <li className="nav-item"><Link href="/music">
          <a className="nav-link">
            Music Inventory
          </a></Link>
        </li>
        <li className="nav-item"><Link href="/sports">
          <a className="nav-link">
            Sports Inventory
          </a></Link>
        </li>
        <li className="nav-item"><Link href="/tech">
          <a className="nav-link">Tech Inventory</a></Link>
        </li>
        <li className="nav-item"><Link href="/contact">
          <a className="nav-link">Contact Us</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}
 
export default Navbar;



