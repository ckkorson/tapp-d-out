import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <p>For the ones that have had one to many.</p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Contributers</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://github.com/ckkorson" className="text-white">
                    Caleb Korson
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Brad-Hambrick"
                    className="text-white"
                  >
                    Brad Hambrick
                  </a>
                </li>
                <li>
                  <a href="https://github.com/JBlay10" className="text-white">
                    Jose Blay
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Products</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://reactjs.org/" className="text-white">
                    React
                  </a>
                </li>
                <li>
                  <a href="https://www.mongodb.com/" className="text-white">
                    MongoDB
                  </a>
                </li>
                <li>
                  <a
                    href="https://graphql.api.apollographql.com/graphql"
                    className="text-white"
                  >
                    GraphQL
                  </a>
                </li>
                <li>
                  <a href="https://www.heroku.com/" className="text-white">
                    Heroku
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">NPM Packages</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    href="https://www.npmjs.com/package/node"
                    className="text-white"
                  >
                    Node
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/package/yarn"
                    className="text-white"
                  >
                    Yarn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/package/express"
                    className="text-white"
                  >
                    Express
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/package/bootstrap"
                    className="text-white"
                  >
                    Bootstrap
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Tapp-D-Out</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    href="https://github.com/ckkorson/tapp-d-out"
                    className="text-white"
                  >
                    For more information!
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-white" href="#!">
          Tapp-D-Out
        </a>
      </div>
    </MDBFooter>
  );
}
