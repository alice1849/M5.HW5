import { Button, Card, ListGroup } from 'react-bootstrap'
import {Product} from '../models/Product'
import { cart } from '../index';
import { observer } from 'mobx-react';

type IListProps={
    children: Product[] | null
}

const List = observer((props: IListProps) => {
    
    const handleAdd =(item: Product) => {
        console.log(' add product to cart');
        cart.addProduct(item);
    }
    return(
        <ListGroup as="ol" numbered>
            {props.children?.map((item) => 
            <ListGroup.Item>
            <Card style={{ width: '18rem' }}>
              <Card.Img className='img'
              variant="top" src={item.picture} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text> $ {item.price}</Card.Text>
                <Button variant="primary" className='my-btn' onClick={()=>handleAdd(item)}>Add to cart</Button>
              </Card.Body>
            </Card> 
            </ListGroup.Item>)}
        </ListGroup>
    )
});
export default List;