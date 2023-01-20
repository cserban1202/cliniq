import { NavLink } from "react-router-dom";
import Authorized from "./auth/Authorized";

export default function Menu (){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className ="container-fluid">
                <NavLink className = "navbar-brand" to="/">CLINIQUE</NavLink>
                    <div className="collapse navbar-collapse">
                        <ul className = "navbar-nav me-auto mb-2 mb-lg-0 display-flex">
                            
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cards/filter">
                                    FILTER 
                                </NavLink>
                            </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/cards/create">
                                    CREATE A CARD - CONSULTATION
                                </NavLink>
                            </li>
                            <Authorized 
                            role = "client"
                            authorized={<>
                                 <li className="nav-item">
                                <NavLink className="nav-link" to="/CATEGORY3">
                                    CATEG3 - PRICE LIST DONE
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/CATEGORY2">
                                    CATEG2 - REVIEW DONE
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Categories">
                                   CATEG1 - FORTHCOMING SERVICES DONE
                                </NavLink>
                            </li>
                            </>}
                            />
                           
                        </ul>
                    </div>

            </div>
        </nav>
    )
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