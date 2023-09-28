import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.log(error))
  }
  useEffect(() => {
    getData()
  },[])
  console.log(items)
  return (
      <Container>
        <Row>
          <ItemList items={items}/>
        </Row>
      </Container>
    )
};

export default ItemListContainer;