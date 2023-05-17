import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { urlCategories } from "../endpoints";
import IndexEntity from "../Utils/IndexEntity";
import { categoriesDTO } from "./categories.model";
import AuthencationContext from "../auth/AuthenticationContext";

export default function IndexCategory() {
  const { claims } = useContext(AuthencationContext);
  const userEmail = claims?.find((x) => x.name === "email")?.value;

  return (
    <div className="container-xl mt-5 pb-5">
      <IndexEntity<categoriesDTO>
        url={urlCategories}
        createURL="categories/create"
        title="Sugestions of services"
        entityName="suggestion"
      >
        {(categories, buttons) => (
          <>
            <thead>
              <tr>
                <th></th>
                <th>See the previous suggestions!</th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((category) => (
                <tr key={category.id}>
                  <td>
                    {userEmail === "admin@yahoo.com" &&
                      buttons(`categories/edit/${category.id}`, category.id)}
                  </td>
                  <td>{category.name}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndexEntity>
    </div>
  );
}

//TITLE FOR PAGE 1 - CATEG 1 => SHOULD BE CHANGED TO THE ACTUAL NAME!!!!!!!!!!!!!
