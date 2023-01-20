import { cardDTO } from "./card.model.d";
import IndividualCard from "./IndividualCard";
import css from './CardList.module.css';
import Loading from "../Utils/Loading";
import GenericList from "../Utils/GenericList";

export default function CardList(props: cardListprops) {

    return <GenericList list = {props.card}>
            <div className = {css.div}>
                {props.card?.map (card => 
                    <IndividualCard {...card} key = {card.key}/>
                )}
            </div>
    </GenericList>
}

interface cardListprops {
    card?: cardDTO[];
}