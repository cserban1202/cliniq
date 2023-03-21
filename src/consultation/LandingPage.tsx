import React from "react";
import { useEffect, useState } from "react";
import Authorized from "../auth/Authorized";
import { landingPageDTO } from "./card.model.d";
import CardList from "./CardList";

export default function LandingPage() {
  const [cards, setCards] = useState<landingPageDTO>({});
  useEffect(() => {
    const timerId = setTimeout(() => {
      setCards({
        cardList: [
          {
            //CEVA
            key: 1,
            title: "Make an appointment",
            image:
              "https://img.freepik.com/free-vector/online-doctor-appointment-mobile-phone_23-2148518022.jpg",
          },
          {
            key: 2,
            title: "See the list of prices",
            image:
              "https://media.istockphoto.com/id/1327338583/vector/cost-commercial-price-list-icon-simple-editable-vector-illustration.jpg?s=612x612&w=0&k=20&c=ySMfxFahnV1GcITjstGLz39yt4bub4Eg5dRZm7VqrUU=",
          },
          {
            key: 3,
            title: "Forthcoming services",
            image:
              "https://media.istockphoto.com/id/1284726786/photo/hand-writing-inscription-our-services-with-blue-marker-concept.jpg?s=612x612&w=0&k=20&c=cKcweIy5x5bKFjL9hR1m63lJ1aWguD8ejM-DBrj9ddI=",
          },
          {
            key: 4,
            title: "Find out what others say",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzd474bNNfvMrLH5iJwFu7-shf29OaNRUJfw&usqp=CAU",
          },
        ],
      });
    }, 1000);

    return () => clearTimeout(timerId);
  });
  return (
    <>
      <h1 className="main-header">CLINIQUE</h1>

      <div className="container-xl mb-5">
        <CardList card={cards.cardList} />
      </div>
    </>
  );
}
