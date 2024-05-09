import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { categoriesDTO } from "../CATEGORY1/categories.model";
import { urlCategories2 } from "../endpoints";
import DisplayErrors from "../Utils/DisplayErrors";
import { convertCateg2ToFormData } from "../Utils/formDataUtils";
import { categ2CreationDTO } from "./categ2.model";
import Category2Form from "./Category2Form";

//AICI ESTE PAGINA DE REVIEW

export default function CreateCateg2() {
  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();

  async function create(category2: categ2CreationDTO) {
    try {
      const formData = convertCateg2ToFormData(category2);

      await axios({


        method: "POST",

        url: urlCategories2,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      history.push("/categories2");
    } catch (error: any) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  }
  return (
    <>
      <div className="container-xl mt-5 paddingBottom">
        <h3>Reviews</h3>
        <DisplayErrors errors={errors} />
        <Category2Form
          model={{ name: "" }}
          onSubmit={async (values) => await create(values)}
        />
      </div>
    </>
  );
}
