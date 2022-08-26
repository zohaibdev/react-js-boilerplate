import React from 'react'
import Header from '../Global/Header'
import Footer from '../Global/Footer'


const DefaultTemplate = props => (
    <main className={`default-template ${props.className !== undefined ? props.className : ''}`}>
        {props.isHeader && <Header />}
        {props.children}
        {props.isFooter && <Footer />}
    </main>
)

export default DefaultTemplate