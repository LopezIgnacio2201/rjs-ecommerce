import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";


const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 container-footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">StreetMe</h5>
            <hr/>
            <p>
              ¡Nuestro objetivo es traer las mejores prendas de StreetWear directamente a tu casa!
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="nuestras-redes">Nuestras redes</h5>
            <ul>
              <li className="list-unstyled nuestras-redes">
              <i class="fa-brands fa-facebook"></i>
              </li>
              <li className="list-unstyled nuestras-redes">
              <i class="fa-brands fa-instagram"></i>
              </li>
              <li className="list-unstyled nuestras-redes">
              <i class="fa-brands fa-twitter"></i>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> StreetMe.com.ar </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;