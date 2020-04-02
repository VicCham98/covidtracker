import React from 'react';
import {Card} from "reactstrap";

const CardData = ({titulo, data,}) => {
    return (
        <div>
            <h6>{titulo}</h6>
            <Card className="text-center">
                {data}
            </Card>
        </div>
    );
};

export default CardData;