import React from 'react';
import Container from "reactstrap/es/Container";

const Layout = (props) => {
    return (
        <Container fluid={true} className="mt-5 pt-1">
            {props.children}
        </Container>
    );
};

export default Layout;