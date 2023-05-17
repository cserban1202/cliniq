import axios, { AxiosResponse } from "axios";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { urlCategories3 } from "../endpoints";
import GenericList from "../Utils/GenericList";
import "./Card.css";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { categ3creation2DTO, categ3DTO } from "./categ3.model";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import { Modal, Button } from "react-bootstrap";
import AuthencationContext from "../auth/AuthenticationContext";

export default function IndexCategory3() {
  const [search, setSearch] = useState("");
  const [showPDF, setShowPDF] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const [categ3, setCateg3] = useState<categ3DTO[]>();
  const { claims } = useContext(AuthencationContext);
  const userEmail = claims?.find((x) => x.name === "email")?.value;

  useEffect(() => {
    axios.get(urlCategories3).then((response: AxiosResponse<categ3DTO[]>) => {
      setCateg3(response.data);
      console.log(response.data);
    });
  }, []);

  // Function to generate CSV file from table data
  const exportTable = () => {
    const csvRows: string[] = [];
    const headers = ["Category", "Type", "Price"];
    csvRows.push(headers.join(","));
    categ3?.forEach((row) => {
      const values = [row.category, row.type, row.price.toString()];
      csvRows.push(values.join(","));
    });
    const csvData = csvRows.join("\n");
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "categ3.csv");
    link.click();
  };

  const handleEditPrice = (
    id: number,
    price: number,
    category: string,
    type: string
  ) => {
    setSelectedId(id);
    setSelectedPrice(price);
    setSelectedCategory(category);
    setSelectedType(type);
    setShowModal(true);
  };

  const saveChanges = () => {
    if (selectedId && selectedPrice) {
      const updatedCateg3: categ3creation2DTO = {
        id: selectedId,
        category: selectedCategory || "",
        type: selectedType || "",
        price: selectedPrice,
      };

      axios
        .put(`${urlCategories3}/${selectedId}`, updatedCateg3)
        .then((response) => {
          console.log("Price updated successfully:", response.data);
          setShowModal(false);

          // Update the categ3 state to reflect the changes
          setCateg3((prevCateg3) => {
            if (prevCateg3) {
              return prevCateg3.map((categ3) => {
                if (categ3.id === selectedId) {
                  return { ...categ3, price: selectedPrice };
                }
                return categ3;
              });
            }
            return prevCateg3;
          });
        })
        .catch((error) => {
          console.error("Error updating price:", error);
          setShowModal(false);
        });
    }
  };

  return (
    <>
      <div className="container-xl mt-5 pb-5">
        <h3>Price List</h3>
        <Form>
          <InputGroup>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
          </InputGroup>
        </Form>
        <div className="d-flex justify-content-between align-items-center">
          <div className="mb-4 mt-4">
            <button className="btn btn-primary" onClick={exportTable}>
              Export Table
            </button>
          </div>
        </div>
        <GenericList list={categ3}>
          <table className="table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Type</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="paddingTop">
              {categ3
                ?.filter((categ3) => {
                  return search.toLowerCase() === ""
                    ? categ3
                    : categ3.type.toLowerCase().includes(search);
                })
                .map((categ3) => (
                  <tr key={categ3.id}>
                    <td>{categ3.category}</td>
                    <td>{categ3.type}</td>
                    <td>{categ3.price}</td>
                    <td>
                      {userEmail === "admin@yahoo.com" && (
                        <Button
                          variant="primary"
                          onClick={() =>
                            handleEditPrice(
                              categ3.id,
                              categ3.price,
                              categ3.category,
                              categ3.type
                            )
                          }
                        >
                          Edit
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </GenericList>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Price</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" value={selectedCategory || ""} disabled />
          </Form.Group>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Control type="text" value={selectedType || ""} disabled />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={selectedPrice || ""}
              onChange={(e) => setSelectedPrice(parseInt(e.target.value))}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
