import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

const CardList = ({item}) => {
    return (
        <Card style={{ width: '18rem' }} className='mt-2'>
            <Card.Img variant="top" src={item.image}/>
            <Card.Body>
                <Card.Title>
                    {item.title}
                </Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Button variant="primary">Detalle</Button>
            </Card.Body>
        </Card>

    );
};

export default CardList;