import React from 'react'
import Navbar from './navbar'

export default function Layout() {
    return (
        <div className="Layout">
            <Navbar />
            <div className="content">
                {/*контент для каждой страницы*/}
            </div>
            <footer>
                <p>Создано 2021 ewGENIY16</p>
            </footer>
        </div>
    )
}
