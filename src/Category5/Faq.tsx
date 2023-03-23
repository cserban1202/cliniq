import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
function Faq() {
  return (
    <section className="container-lg pb-lg">
      <h3 className="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
      <p className="text-center mb-5">
        Find the answers for the most frequently asked questions below
      </p>

      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary">
            <i className="far fa-paper-plane text-primary pe-2"></i> What
            services does your clinic offer?
          </h6>
          <p>
            Our clinic offers a wide range of medical services, including
            general check-ups, vaccinations, diagnostic tests, minor surgical
            procedures, and more. Please visit our services page to learn more.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary">
            <i className="fas fa-pen-alt text-primary pe-2"></i> What are your
            hours of operation?
          </h6>
          <p>
            We are open Monday through Friday from 8:00 am to 5:00 pm and on
            Saturdays from 9:00 am to 12:00 pm. We are closed on Sundays and
            public holidays.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary">
            <i className="fas fa-book-open text-primary pe-2"></i> How do I
            schedule an appointment?
          </h6>
          <p>
            You can schedule an appointment by calling us during business hours
            or by using our online booking system on our website. We recommend
            booking appointments in advance to ensure availability.
          </p>
        </div>
      </div>

      <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
        <MDBAccordion alwaysOpen>
          <MDBAccordionItem
            collapseId={1}
            headerTitle="What should I expect during my first visit?"
          >
            During your first visit, we will review your medical history,
            perform a physical examination, and discuss any health concerns you
            may have. We may also recommend diagnostic tests or referrals to
            specialists as needed.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={2}
            headerTitle="What if I have an urgent medical issue after hours?"
          >
            If you have an urgent medical issue after hours, please call our
            office and follow the prompts to speak to the on-call provider. In
            case of a life-threatening emergency, call 911 or go to the nearest
            emergency room.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={3}
            headerTitle="What should I expect during my first visit?"
          >
            During your first visit, we will review your medical history,
            perform a physical examination, and discuss any health concerns you
            may have. We may also recommend diagnostic tests or referrals to
            specialists as needed.
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
