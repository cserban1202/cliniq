import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Authorized from "./auth/Authorized";
import { Link } from "react-router-dom";
import Button from "./Utils/Button";
import { logout } from "./auth/handlerJWT";
import AuthencationContext from "./auth/AuthenticationContext";

export default function Menu() {
  const { update, claims } = useContext(AuthencationContext);

  function getUserEmail(): string {
    return claims.filter((x) => x.name === "email")[0]?.value;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CLINIQUE
        </NavLink>
        <div
          className="collapse navbar-collapse"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 display-flex">
            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/cards/filter">
                                    FILTER 
                                </NavLink>
                            </li> */}

            <Authorized
              //role = "client" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              authorized={
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/cards/create">
                      Ask for Examination{/* CREATE A CARD - CONSULTATION */}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="examinationlist">
                      My Examinations {/* CREATE A CARD - CONSULTATION */}
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/CATEGORY3">
                      Price List {/* CATEG3 - PRICE LIST DONE */}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/CATEGORY2">
                      Reviews {/* CATEG2 - REVIEW DONE */}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Categories">
                      Forthcoming Services{" "}
                      {/* CATEG1 - FORTHCOMING SERVICES DONE */}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Faq">
                      FAQ {/* CATEG1 - FORTHCOMING SERVICES DONE */}
                    </NavLink>
                  </li>
                  {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/users">
                                   Clients
                                </NavLink>
                            </li> */}
                </>
              }
            />
          </ul>
          <div className="d-flex justify-content-around align-items-center">
            <Authorized
              authorized={
                <>
                  <span className="nav-link mr-2">Hello, {getUserEmail()}</span>
                  <Button
                    onClick={() => {
                      logout();
                      update([]);
                    }}
                    className="nav-link btn btn-link p-2"
                  >
                    Log out
                  </Button>
                </>
              }
              notAuthorized={
                <>
                  <NavLink
                    to="/register"
                    className="nav-link btn btn-link"
                    style={{ marginRight: "10px" }}
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="nav-link btn btn-link"
                    style={{ marginRight: "10px" }}
                  >
                    Login
                  </NavLink>
                </>
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

//PAGE 1 HREF IN A TAG SHOULD BE REDEFINED WITH AN ACTUAL PAGE!!!!!!!!!!!!
//NAVLINK IN LOC DE A TAG RAND 7, HREF => TO. NU MERGE??????????????????

/*
<div className = "navbar navbar-expand-lg navbar-light bg-light">
            <div className = "container-fluid">
                <NavLink className = "navbar-brand" to="/">CLINIQUE</NavLink>
                <div className = "collapse navbar-collapse">
                    <ul className = "navbar-nav me-auto mb-2 mb-lg-0">
                        <li className = "nav-item">
                            <NavLink className = "nav-link" to ="/Categories">
                                Page 1
                            </NavLink >
                        </li>
                    </ul>
                </div>
                    
            </div>

        </div>
*/
