import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlCategories3 } from "../endpoints";
import GenericList from "../Utils/GenericList";
import './Card.css';
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import {categ3DTO } from "./categ3.model";
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react'


export default function IndexCategory3() {

    const [search, setSearch] = useState('');
    const [showPDF, setShowPDF] = useState(false);

    const [categ3, setCateg3] = useState<categ3DTO[]>();

    useEffect(() => {
        axios.get(urlCategories3)
            .then((response: AxiosResponse<categ3DTO[]>) => {
                setCateg3(response.data);
                console.log(response.data);
            })
    }, [])

    // Function to generate CSV file from table data
    const exportTable = () => {
        const csvRows = [];
        const headers = ['Category', 'Type', 'Price'];
        csvRows.push(headers.join(','));
        categ3?.forEach(row => {
          const values = [
            row.category,
            row.type,
            row.price.toString(),
          ];
          csvRows.push(values.join(','));
        });
        const csvData = csvRows.join('\n');
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'categ3.csv');
        link.click();
    };

    return (
        <>
            <h3>Categ 3 - LISTE DE PRETURI</h3>
                <Form>
                    <InputGroup>
                        <Form.Control onChange={(e) => setSearch(e.target.value)} 
                        placeholder="Search" />
                    </InputGroup>
                </Form>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary" onClick={exportTable}>Export Table</button>
                </div>
               <GenericList list={categ3}>
                    <table className="table">
                        
                        <thead>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Price</th>
                        </thead>
                        <tbody className="paddingTop">
                            {categ3?.filter((categ3) => {
                                return search.toLowerCase() === ''
                                ? categ3 
                                : categ3.type.toLowerCase().includes(search);
                            }).map(categ3 =>
                                <tr key={categ3.id}>
                                    <td>{categ3.category}</td>
                                    <td>{categ3.type}</td>
                                    <td>{categ3.price}</td>
                                </tr>)}
                        </tbody>
                    </table>
               </GenericList>
            
            {/* <Link className = "btn btn-secondary" to="/CATEGORY3/create">Create CATEG 3</Link> */}
        </>
    )
}