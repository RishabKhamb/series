import React, { useState, useEffect } from "react";
import { NavLink, Route, Switch, useHistory } from "react-router-dom";
import Movie from "./Movie";
import Series from "./Series";
import "./Welcome.css";
const Welcome = () => {
  const [loginData, setLoginData] = useState([]);
  const access = () => {
    const getUser = localStorage.getItem("userlogin");
    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);
      setLoginData(user);
    }
  };

  useEffect(() => {
    access();
  }, []);
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("userlogin");
    history.replace("/");
  };

  if (loginData.length === 0) {
    return <h1 className="text-center">Please login to get access</h1>;
  }
  return (
    <div>
      <nav className="bg-dark p-3">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink
              className="nav-link active fs-3 text-light"
              aria-current="page"
              to="/welcome/series"
            >
              Series
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link active fs-3 text-light mx-3"
              aria-current="page"
              to="/welcome/movies"
            >
              Movies
            </NavLink>
          </li>

          <li className="nav-item">
            <button
              className="nav-link fs-3 btn bg-dark text-light"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/welcome" exact>
          <div className="container mybox mt-5">
            <div className="row">
              <div className="col">
                <h1 className="text-center mt-5">Welcome User!</h1>
                <p className="text-center fs-3">
                  Sit back and browse through your favorite movies and tv
                  series!
                </p>
              </div>
            </div>
          </div>
        </Route>

        <Route path="/welcome/series" exact>
          <Series />
        </Route>
        <Route path="/welcome/movies" exact>
          <Movie />
        </Route>
        {/* <Route path="/welcome/series/q1">
          <h1>Detail Page</h1>
        </Route> */}
      </Switch>
    </div>
  );
};

export default Welcome;
