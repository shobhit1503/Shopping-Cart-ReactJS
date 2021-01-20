import React, { useState, useEffect } from "react";
import Axios from "axios";
import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";
import CardItem from "./CardItem"

const apiKey = "563492ad6f917000010000017e3327d432b244fb8b7c2a4c351944d4";

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"
//const localurl = ""
const BuyPage = ({ addInCart }) => {
    const [product, setProduct] = useState([]);

    // const fetchPhotos = async () => {
    //     const {data} =await Axios.get(localurl);
    // }

    const fetchPhotos = async () => {
        const { data } = await Axios.get(url, {
            headers: {
                Authorization: apiKey
            }
        })
        const { photos } = data;

        const allProduct = photos.map((photo) => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
        }));
        setProduct(allProduct);
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    // product.map(product => {
    //     console.log(product.productName);
    //     return 0;
    // })

    return(
        <Container fluid>
            <h1 className='text-success text-center'> Buy Page</h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CardItem product={product} addInCart={addInCart}/>
                    </Col>
                    )
                )}
            </Row>
        </Container>
    )
}

export default BuyPage;