import React from 'react'
import './Home.css'
import Search from './search/Search'
export const Home = () => {    
    return (
        <div className="home-container">
            <div className="search-container">
                <Search 
                ></Search>
            </div>
        </div>
    )
}

export default Home