import React from "react";
import { cardDTO } from "./card.model.d";
import css from'./IndividualCard.module.css';

export default function IndividualCard (props : cardDTO) {

    const buildLink = () => `/card/${props.key}`
    return (
        <div className = {css.div}>
            <a href = {buildLink()}>
                <img className = "img-style" alt = "loading" src = {props.image} />
            </a>
            <p>
                <a href = {buildLink()}>{props.title}</a>
            </p>
        </div>
    )
}