import React from 'react'
import Search from '../components/search/search'
export default function App() {
    /*
        Sorry ,Time was not enough 
        the database setup took a lot of time 
        should have used local myQsl 
    */
    return (
        <>
            <header className='_header'>
                <h2>stocks</h2>
            </header>
            <div className="container">
                <header className='intro'>
                    <h1>The easiest way to buy and sell stocks.</h1>
                    <p>stock analysis and screening tool for investor in india.</p>
                </header>
                <Search />
            </div>
        </>
    )
}