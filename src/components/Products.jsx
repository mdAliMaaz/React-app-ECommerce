import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Product from './Product'
import { popularProducts } from '../../data'
import axios from 'axios'



const Container = styled.div`
display:flex;
flex-wrap: wrap;
padding: 20px;
justify-content: space-between;
`

const Products = ({ cat, filter, sort }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);


    useEffect(() => {

        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:5000/api/products?category=${cat}`
                        : "http://localhost:5000/api/products");

                setProducts(res);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [cat])


    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(item => Object.entries(filter).every(([key, value]) =>
                item[key].includes(value)
            )
            )
        )
    }, [cat, filter])

    console.log(products.data)

    return (
        <Container>
            {
                popularProducts.map((item) => {
                    return (
                        <Product key={item.id} item={item} />
                    )
                })
            }
        </Container>
    )
}

export default Products
