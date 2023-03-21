import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
function Faq() {
  return (
    <section className="container-lg">
      <h3 className="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
      <p className="text-center mb-5">
        Find the answers for the most frequently asked questions below
      </p>

      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary">
            <i className="far fa-paper-plane text-primary pe-2"></i> A simple
            question?
          </h6>
          <p>
            <strong>
              <u>Absolutely!</u>
            </strong>{" "}
            Remain lively hardly needed at do by. Two you fat downs fanny three.
            True mr gone most at. Dare as name just when with it body.
            Travelling inquietude she increasing off impossible the. Cottage be
            noisier looking to we promise on.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary">
            <i className="fas fa-pen-alt text-primary pe-2"></i> A question that
            is longer then the previous one?
          </h6>
          <p>
            <strong>
              <u>Yes, it is possible!</u>
            </strong>{" "}
            If polite he active county in spirit an. Mrs ham intention promotion
            engrossed assurance defective.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary">
            <i className="fas fa-user text-primary pe-2"></i> A simple question?
          </h6>
          <p>
            Currently, we only offer monthly subscription. You can upgrade or
            cancel your monthly account at any time with no further obligation.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary">
            <i className="fas fa-rocket text-primary pe-2"></i> A simple
            question?
          </h6>
          <p>
            Yes. Go to the billing section of your dashboard and update your
            payment information.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary">
            <i className="fas fa-home text-primary pe-2"></i> A simple question?
          </h6>
          <p>
            <strong>
              <u>Unfortunately no</u>.
            </strong>{" "}
            We do not issue full or partial refunds for any reason.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary">
            <i className="fas fa-book-open text-primary pe-2"></i> Another
            question that is longer than usual
          </h6>
          <p>
            Of course! We’re happy to offer a free plan to anyone who wants to
            try our service.
          </p>
        </div>
      </div>

      <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
        <MDBAccordion alwaysOpen>
          <MDBAccordionItem collapseId={1} headerTitle="Question #1">
            <strong>This is the first item's accordion body.</strong> Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={2} headerTitle="Question #2">
            <strong>This is the second item's accordion body.</strong> It is a
            long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={3} headerTitle="Question #3">
            <strong>This is the third item's accordion body.</strong> Contrary
            to popular belief, Lorem Ipsum is not simply random text. It has
            roots in a piece of classical Latin literature from 45 BC, making it
            over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </MDBAccordionItem>
        </MDBAccordion>
      </MDBContainer>
    </section>
  );
}

export default Faq;

// import React from "react";
// import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

// export default function Faq() {
//   return (
//     <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
//       <MDBAccordion alwaysOpen>
//         <MDBAccordionItem collapseId={1} headerTitle="Question #1">
//           <strong>This is the first item's accordion body.</strong> Lorem Ipsum is
//           simply dummy text of the printing and typesetting industry. Lorem Ipsum has
//           been the industry's standard dummy text ever since the 1500s, when an unknown
//           printer took a galley of type and scrambled it to make a type specimen book.
//           It has survived not only five centuries, but also the leap into electronic
//           typesetting, remaining essentially unchanged.
//         </MDBAccordionItem>
//         <MDBAccordionItem collapseId={2} headerTitle="Question #2">
//           <strong>This is the second item's accordion body.</strong> It is a long established
//           fact that a reader will be distracted by the readable content of a page when looking
//            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
//            distribution of letters, as opposed to using 'Content here, content here',
//            making it look like readable English.
//         </MDBAccordionItem>
//         <MDBAccordionItem collapseId={3} headerTitle="Question #3">
//           <strong>This is the third item's accordion body.</strong> Contrary to popular belief,
//           Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
//           literature from 45 BC, making it over 2000 years old. Richard McClintock,
//           a Latin professor at Hampden-Sydney College in Virginia, looked up one of
//           the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
//           and going through the cites of the word in classical literature,
//           discovered the undoubtable source.
//         </MDBAccordionItem>
//       </MDBAccordion>
//     </MDBContainer>
//   );
// }
