function NavBar() {
  const ctx = React.useContext(UserContext);
  const [logged, setLogged] = React.useState("");
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState("CreateAccount");

  function login() {
    // Login function code...
  }

  function testAuth() {
    // testAuth function code...
  }

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Bad Bank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li
              className={`nav-item ${
                currentPage === "CreateAccount" ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href="#/CreateAccount/"
                onClick={() => setCurrentPage("CreateAccount")}
              >
                Create Account
              </a>
            </li>

            <li
              className={`nav-item ${currentPage === "login" ? "active" : ""}`}
            >
              <a
                className="nav-link"
                href="#/login/"
                onClick={() => setCurrentPage("login")}
              >
                Login
              </a>
            </li>

            <li
              className={`nav-item ${
                currentPage === "deposit" ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href="#/deposit/"
                onClick={() => setCurrentPage("deposit")}
              >
                Deposit
              </a>
            </li>
            <li
              className={`nav-item ${
                currentPage === "withdraw" ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href="#/withdraw/"
                onClick={() => setCurrentPage("withdraw")}
              >
                Withdraw
              </a>
            </li>
            <li
              className={`nav-item ${
                currentPage === "balance" ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href="#/balance/"
                onClick={() => setCurrentPage("balance")}
              >
                Balance
              </a>
            </li>
            <li
              className={`nav-item ${
                currentPage === "alldata" ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href="#/alldata/"
                onClick={() => setCurrentPage("alldata")}
              >
                AllData
              </a>
            </li>
          </ul>
          {/* display the logged in user */}
          <span className="navbar-text">{logged}</span>
        </div>
      </nav>

      <div className="pos-f-t">{/* Rest of the code... */}</div>
    </>
  );
}
