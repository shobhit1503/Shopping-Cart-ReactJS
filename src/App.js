import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import BuyPage from "./components/BuyPage";
import {Container,Row,Col} from "reactstrap";
import Cart from "./components/Cart";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function(array){//check with callback function too
      return array.id === item.id
    })

    if(isAlreadyAdded !== -1) {
      toast("Already added.", {type: "error"})
      return;
    }
    setCartItem([...cartItem, item])
  }
const buyNow =() => {
  setCartItem([])

  toast("Purchased successfully!", {
    type: "success"
  })
}

const removeItem = item => [
  setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id))
]


  return (
    <div>
      <ToastContainer/>
      <Row>

        <Col md="8">
          <BuyPage addInCart={addInCart}/>
        </Col>

        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/>
        </Col>

      </Row>

     { /*<BuyPage addInCart={addInCart}/>*/ }
    </div>

  );
}

export default App;
