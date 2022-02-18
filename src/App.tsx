import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import List from './components/ListOfProducts';
import { Product } from './models/Product';
import CartComponent from './components/CartComponent';
import { observer } from 'mobx-react';

const App = observer( () => {

  const navigate = useNavigate();
  const product1 = new Product(0, 'Flower pot', 10.00, 'https://ae01.alicdn.com/kf/HTB1La4EKPDpK1RjSZFrq6y78VXaS/White-Ceramic-Cat-Planters-Pink-Kitten-Couples-Flower-Pot-for-Succulents-Cactus-Plants-Home-Garden-Decor.jpg');
  const product2 = new Product(1, 'Candle', 10.00, 'https://i.pinimg.com/originals/e6/05/c3/e605c3b4cfff2d0c2236938abf620878.png');
  const product3 = new Product(2, 'Chandelier', 300.00, 'https://mobileimages.lowes.com/productimages/0a931a1a-c2a6-4eee-8f12-141ea558bd68/10708638.jpg?size=pdhi')
  const listOfProducts = [product1, product2, product3];

  

  const handleNavigate = (value: string) =>{
    navigate(value);
  }
  return (
    <>
    <div className="App">
      <header className="App-header">
        <Button className='my-btn' onClick={() => handleNavigate('/')}> Home </Button>
        <Button className='my-btn' onClick={() => handleNavigate('shop')}> Shop </Button>
        <Button className='my-btn' onClick={() => handleNavigate('cart')}> Cart </Button>
      </header>
    </div>
     <Routes>
     <Route path="/" element={<HomeComponent />} />
     <Route path="*" element={<Navigate replace to={'/'} />} />
     <Route path="shop" element={<List children={listOfProducts}></List>} />
     <Route path="cart" element={<CartComponent></CartComponent>} />
     {/* <Route path="about" element={}>
       <Route path="me" element={} />
     </Route> */}
   </Routes>
   </>
  );
});

export default App;
