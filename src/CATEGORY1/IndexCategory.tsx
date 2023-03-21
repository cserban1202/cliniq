import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categoriesDTO } from "./categories.model";
import { urlCategories } from "../endpoints";
import GenericList from "../Utils/GenericList";
import Button from "../Utils/Button";
import Pagination from "../Utils/Pagination";
import RecordsPerPageSelect from "../Utils/RecordsPerPageSelect";
import customConfirm from "../Utils/customConfirm";
import IndexEntity from "../Utils/IndexEntity";
import React from "react";

export default function IndexCategory() {
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
                    {/* {buttons(`categories/edit/${category.id}`, category.id)} */}
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
