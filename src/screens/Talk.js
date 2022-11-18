import React from "react";
import './Talk.css';
import { Toast, ToastContainer } from 'react-bootstrap'
import Container from "react-bootstrap/Container";


function Talk(props) {
    return (
        <Container fluid
      
    style={{backgroundImage:"url(image2/realback.jpg)",
    backgroundRepeat : "no-repeat",
    backgroundSize: "cover",
    marginLeft: "0px",
    marginRight: "0px",
      paddingLeft: "200px",
      paddingRight:"200px"
}}
    >
        <main className = "main-container">
          <ToastContainer bsPrefix = "toast-main-container">
            {
                props.message.map((item) => (
                    item.from ? (
                        <Toast bg = 'info' className = "my-message">
                            <Toast.Body>{item.msg}</Toast.Body>
                        </Toast>
                    )
                    : (
                        <Toast bg = 'light' className = "other-message">
                            <Toast.Body>{item.msg}</Toast.Body>
                        </Toast>
                    )
                ))
                
            }
          </ToastContainer>
            </main>
            </Container>
    );
    
};

export default Talk;
