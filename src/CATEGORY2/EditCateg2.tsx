import React from "react";
import { useParams } from "react-router-dom"
import { transform } from "typescript";
import { categoriesDTO } from "../CATEGORY1/categories.model";
import { urlCategories2 } from "../endpoints";
import EditEntity from "../Utils/EditEntity";
import { convertCateg2ToFormData } from "../Utils/formDataUtils";
import { categ2CreationDTO, categ2DTO } from "./categ2.model";
import Category2Form from "./Category2Form";

//EDIT A REVIEW
export default function EditCateg2() {

    function transform(categ2: categ2DTO): categ2CreationDTO { 
        return {
            name: categ2.name,
            pictureURL: categ2.picture,
            consultationDate: new Date (categ2.consultationDate)
        }
    }
    //const {id} :any = useParams();
        return (
        <EditEntity<categ2CreationDTO, categ2DTO>
            url={urlCategories2} indexURL="/CATEGORY2" entityName="a review"
            transformFormData={convertCateg2ToFormData}
            transform={transform}
            >
            {(entity, edit) => 
                    <Category2Form model={entity} 
                    onSubmit={async values => {
                        await edit(values);
                    }}
                    />
                }
        </EditEntity>
    )
}