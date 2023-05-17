import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { urlCategories2 } from "../endpoints";
import IndexEntity from "../Utils/IndexEntity";
import { categ2DTO } from "./categ2.model";
import AuthencationContext from "../auth/AuthenticationContext";

// INDEX FOR REVIEW PAGE
export default function IndexCateg2() {
  const { claims } = useContext(AuthencationContext);
  const userEmail = claims?.find((x) => x.name === "email")?.value;

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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {categ2?.map((categ2) => (
                <tr key={categ2.id}>
                  <td>
                    {userEmail === "admin@yahoo.com" &&
                      buttons(`categ2/edit/${categ2.id}`, categ2.id)}
                  </td>
                  <td>{categ2.name}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndexEntity>
    </div>
  );
}
