import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newletter from '../components/Newletter'
import Footer from '../components/Footer'


const Home = () => {
    return (
        <>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newletter />
            <Footer />
        </>
    )
}

export default Home
