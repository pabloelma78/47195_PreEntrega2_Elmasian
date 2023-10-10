import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import useFetch from './useFetch';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const {category} = useParams()
  const [items] = useFetch("https://fakestoreapi.com/products")
  console.log (category)
  const [filteredItems, setFilteredItems] = useState([])
  useEffect(() => {
    if (items) { 

      if (category) {
        const filtered = items.filter((item) => item.category === category);
        setFilteredItems(filtered);
      } else {
        setFilteredItems(items);
      }
    }
  }, [category, items]);

  return (
      <Container>
        <Row>
          
            {filteredItems !== null && <ItemList items={filteredItems} />}
            
          
          
        </Row>
      </Container>
    )
};

export default ItemListContainer;