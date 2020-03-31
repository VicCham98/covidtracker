import React from 'react';
import Container from "reactstrap/es/Container";

const Layout = (props) => {
    return (
        <Container fluid={true}>
            {props.children}
        </Container>
    );
};

export default Layout;