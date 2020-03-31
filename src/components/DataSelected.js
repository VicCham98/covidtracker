import React from 'react';
import {Card} from "reactstrap";

const DataSelected = ({titulo, dato}) => {
    return (
        <div>
            <h6>{titulo}</h6>
            <Card className="text-center">
                {dato}
            </Card>
        </div>
    );
};

export default DataSelected;