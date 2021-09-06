import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'
const Home = () => {
    return (
        <div>
            <Announcements />
            <Navbar />
            <Slider />
            <Categories/>
            <Products />
            <NewsLetter/>
        </div>
    )
}

export default Home



// STYLEDS
