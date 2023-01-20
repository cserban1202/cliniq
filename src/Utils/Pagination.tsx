import { useEffect, useState } from "react";

export default function Pagination(props: paginationProps){

    const [linkModel, setLinkModel] = useState<linkModel[]>([]);

    function selectPage(link: linkModel) {
        if (link.page === props.currentPage) { // daca esti pe pagina pe care vrei sa mergi, 
            //nu se intampla nimic
            return;
        }
        if (!link.enabled){ // daca link-ul nu e activat, nu se intampla nimic
            return;
        }
        props.onChange(link.page); // se apeleaza functia onChange din props
    }

    function getClass(link: linkModel) {
        if (link.active) { // daca link-ul e activ, atunci se adauga clasa active
            return "active";
        }

        if(!link.enabled) { 
            return "disabled"; // daca link-ul nu e activat, atunci se adauga clasa disabled
        }

        return "pointer"; // daca link-ul e activat, atunci se adauga clasa pointer
    }

    // useEffect se apeleaza de fiecare data cand se schimba ceva din props
    useEffect(() => { // se apeleaza o singura data la inceput, cand se incarca componenta
        const previousPageEnabled = props.currentPage !== 1; // daca nu esti pe prima pagina, atunci poti merge inapoi
        const previousPage = props.currentPage - 1; // pagina anterioara
        const links: linkModel[] = []; // array-ul in care vom stoca link-urile

        links.push({ // push adauga un element la sfarsitul array-ului
            text: "Previous",
            enabled: previousPageEnabled,
            page: previousPage,
            active: false
        });

        for (let i = 1; i <= props.totalAmountOfPages; i++) {
            if(i >= props.currentPage - props.radio && i <= props.currentPage + props.radio){ 
                links.push({
                    text: `${i}`,
                    active: props.currentPage === i,
                    enabled: true,
                    page: i
                });
            }
        }
        
        const nextPageEnabled = props.currentPage !== props.totalAmountOfPages && 
        props.totalAmountOfPages > 0; // daca nu esti pe ultima pagina, atunci poti merge inainte
        const nextPage = props.currentPage + 1; // pagina urmatoare

        links.push({
            text: "Next",
            page: nextPage,
            enabled: nextPageEnabled,
            active: false
        })

        setLinkModel(links); 
    }, [props.currentPage, props.radio, props.totalAmountOfPages]) // daca se schimba ceva din props, se apeleaza useEffect

    return <nav>
        <ul className="pagination justify-content-center">
            {linkModel.map(link =>
                <li key ={link.text}
                    onClick={() => selectPage(link)}
                    className={`page-item cursor ${getClass(link)}`}
                >
                    <span className="page-link">{link.text}</span>
                </li>
                )}
        </ul>
    </nav>
}

interface linkModel {
    page: number; // the page number that the link is pointing to
    enabled: boolean; // if the link is enabled or not
    text: string // the text that is going to be displayed on the link
    active: boolean; // if the link is active or not
}

interface paginationProps{
    currentPage: number;
    totalAmountOfPages: number;
    radio: number; // how many of pages we are going to display on screen at once
                    //daca esti pe pag 2 si radio e 5, atunci vezi 1,2,3,4,5
    onChange(page: number): void; 
}

Pagination.defaultProps = { // daca nu ii dai props, atunci ii dai default
    radio: 3
}
