import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { urlCategories } from "../endpoints";
import DisplayErrors from "../Utils/DisplayErrors";
import Loading from "../Utils/Loading";
import { categoriesDTO } from "./categories.model";
import CategoriesForm from "./CategoriesForm";
import EditEntity from "../Utils/EditEntity";
import { categoriesCreationDTO } from "./categories.model";

export default function EditCategory() {
    
    
    return (
        <>
           <EditEntity<categoriesCreationDTO, categoriesDTO>
                url={urlCategories}
                entityName="Category services"
                indexURL="/categories"
            >
                {(entity, edit) => 
                    <CategoriesForm model={entity} 
                    onSubmit={async values => {
                        await edit(values);
                    }}
                    />
                }
           </EditEntity>
        </>
    )
}