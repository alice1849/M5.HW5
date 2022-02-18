import { Button, Card, ListGroup } from "react-bootstrap";
import { resourceLimits } from "worker_threads";
import { Product } from "../models/Product";
import { cart } from '../index';
import { observer } from "mobx-react"
import { useState } from "react";




const CartComponent = observer( () => {
    const [flag, setFlag] = useState<boolean>(false);

    const handleFlag = (value: React.Dispatch<React.SetStateAction<boolean>>) => {
        value (currentFlag => !currentFlag)
      }

    
    const handleClear =  () =>{
        cart.reset();
        console.log("reset cart");
    }

    const handleSubmit = () => {
        cart.reset();
        setFlag (currentFlag => !currentFlag);
    }
    // const str_cart = localStorage.getItem("cart");
    // console.log(str_cart);
    let result;
    if (cart.products.length != 0){
        //const cart = JSON.parse(str_cart) as Product[];
        result = <>
        <ListGroup as="ol" numbered>
            {cart.products.map((item) => 
            <ListGroup.Item>
            <Card style={{ width: '18rem' }}>
              <Card.Img className="img"
              variant="top" src={item.picture} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text> $ {item.price}</Card.Text>
              </Card.Body>
            </Card> 
            </ListGroup.Item>)}
        </ListGroup>
        <div className="App">
         Full price: $ {cart.fullPrice}
        </div>
        <br></br>
        <div className="App">
        Enter your phone number and we will contact you to clarify the details of the order 
        </div>
        <div className="App">
            <input></input>
        </div>
        {/* <br></br>
        <div className="App">
        <Button className="my-btn" onClick={() => handleSubmit()}>Submit</Button>
        </div> */}
        <br></br>
        <div className="App">
        <Button className="my-btn" onClick={() => handleSubmit()}>Submit order</Button>
        <Button className="my-btn" onClick={() => handleClear()}>Clear cart</Button> 
        </div>
        </>
    } else {
       result = <>
       <div className="Home">
           { flag && <div>Thank you for order!</div>}
           { !flag && <div className="App">Your cart is empty</div>}
       </div>
       </>
    }

    return result;
});
export default CartComponent;