import axios, { AxiosResponse } from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";
import Button from "./Button";
import customConfirm from "./customConfirm";
import GenericList from "./GenericList";
import Pagination from "./Pagination";
import RecordsPerPageSelect from "./RecordsPerPageSelect";

export default function IndexCategory<T>(props: indexEntityProps<T>) {
  const [totalAmountOfPages, setTotalAmountOFPages] = useState(0);
  const [entities, setEntities] = useState<T[]>([]);
  const [recordPerPage, setRecordPerPage] = useState(3);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadData();
  }, [page, recordPerPage]); //when page sau recordsPerPage change, useEffect se apeleaza

  function loadData() {
    axios
      .get(props.url, {
        params: { page, recordPerPage },
      })
      .then((response: AxiosResponse<T[]>) => {
        const totalAmountOfRecords = parseInt(
          response.headers["totalamountofrecords"],
          10
        );
        setTotalAmountOFPages(Math.ceil(totalAmountOfRecords / recordPerPage));
        // ceil = rotunjeste la numarul mai mare
        setEntities(response.data);
      });
  }

  async function deleteEntity(id: number) {
    try {
      await axios.delete(`${props.url}/${id}`);
      loadData();
    } catch (error: any) {
      if (error && error.response) {
        console.error(error.response.data);
      }
    }
  }

  const buttons = (editUrl: string, id: number) => (
    <>
      <Link className="btn btn-success" to={editUrl}>
        Edit
      </Link>
      <Button
        onClick={() => customConfirm(() => deleteEntity(id))}
        className="btn btn-danger"
      >
        Delete
      </Button>
    </>
  );

  return (
    <>
      <h3>{props.title}</h3>
      {props.createURL ? (
        <Link className="btn btn-secondary mb-5" to={props.createURL}>
          Add {props.entityName}
        </Link>
      ) : null}

      <RecordsPerPageSelect
        onChange={(amountOfRecords) => {
          setPage(1);
          setRecordPerPage(amountOfRecords);
        }}
      />

      <Pagination
        currentPage={page}
        totalAmountOfPages={totalAmountOfPages}
        onChange={(newPage) => setPage(newPage)}
      />

      <GenericList list={entities}>
        <table className="table table-hover table-responsive">
          {props.children(entities!, buttons)}
        </table>
      </GenericList>
    </>
  );
}

interface indexEntityProps<T> {
  url: string;
  createURL?: string;
  title: string;
  entityName?: string;
  children(
    entities: T[],
    buttons: (editUrl: string, id: number) => ReactElement
  ): ReactElement;
}
