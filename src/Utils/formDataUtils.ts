import { categ2CreationDTO } from "../CATEGORY2/categ2.model";

export function convertCateg2ToFormData(categ2: categ2CreationDTO): FormData{ 
    const formData = new FormData(); 
    formData.append('name', categ2.name);       
    if (categ2.description) {
        formData.append('biography', categ2.description);
    }
    if (categ2.consultationDate) {
        formData.append('consultationDate', formatDate(categ2.consultationDate));
    }
    if(categ2.picture){
        formData.append('picture', categ2.picture);
    }
    return formData;
}

function formatDate(date: Date){
    date = new Date(date);
    const format = new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });

    const [
        {value: month},,
        {value: day},,
        {value: year}
    ] = format.formatToParts(date); 

    return `${year}-${month}-${day}`;
}