import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

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
                <Link to={`/detalle/${item.id}`}> 
                   <Button variant="primary">Detalle</Button>
                </Link>
                
            </Card.Body>
        </Card>

    );
};

export default CardList;