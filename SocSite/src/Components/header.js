
const Header = () => {
  return (
    <div class="header">
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
      </ul>
      <form class="d-flex w-100">
        <input class="form-control mr-2 w-75 ms-4" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
   </nav>
    </div>
  );
}

export default Header;
