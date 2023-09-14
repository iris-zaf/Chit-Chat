import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
} from "mdb-react-ui-kit";
import Main from "./cameraShake/aaa";
function LandingPage() {
  return (
    <MDBContainer fluid style={{}}>
      <MDBCard
        className="text-black m-5"
        style={{
          borderRadius: "25px",
          backgroundColor: "transparent",
          background: " rgba( 255, 255, 255, 0.3 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 30px )",

          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
      >
        <MDBCardBody>
          <MDBRow>
            <MDBCol>
              <h2>
                Connect &<br />
                have fun with new people
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                lectus nunc, suscipit eu magna vel, vehicula vehicula lorem.
                Vestibulum eleifend ante rutrum finibus congue. Integer viverra
                lacus eget eros fringilla hendrerit. Donec hendrerit velit ex,
                vitae pretium libero scelerisque ut. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <MDBBtn style={{ backgroundColor: "lightpink" }}>
                Connect Now
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex  align-items-center"
            >
              <Main />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default LandingPage;
