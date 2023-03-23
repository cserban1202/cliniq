import React from "react";
import { Link } from "react-router-dom";
import Authorized from "../auth/Authorized";
import { urlCategories2 } from "../endpoints";
import IndexEntity from "../Utils/IndexEntity";
import { categ2DTO } from "./categ2.model";

//INDEX FOR REVIEW PAGE
export default function IndexCateg2() {
  return (
    <div className="container-xl mt-5 pb-5">
      <IndexEntity<categ2DTO>
        url={urlCategories2}
        createURL="/CATEGORY2/create"
        title="REVIEWS"
        entityName="a review"
      >
        {(categ2, buttons) => (
          <>
            <thead>
              <tr>
                <th>REVIEWS</th>
              </tr>
            </thead>
            <tbody>
              {/* <Authorized 
                       //role = "client"
                        authorized={ */}
              <>
                {categ2?.map((categ2) => (
                  <tr key={categ2.id}>
                    {/* <td>
                                {buttons(`categ2/edit/${categ2.id}`, categ2.id)}
                            </td> */}
                    <td>{categ2.name}</td>
                  </tr>
                ))}
              </>
            </tbody>
          </>
        )}
      </IndexEntity>
    </div>
  );
}

//STERGI AUTHORIZED MERGE!!!!!!!!!!!!!
//TITLE FOR PAGE 1 - CATEG 1 => SHOULD BE CHANGED TO THE ACTUAL NAME!!!!!!!!!!!!!

// CATEGORY 2 =  ACTORS
