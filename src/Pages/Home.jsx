import Hero from "../Components/Hero"
import React from "react"
import TokenSale from "../Components/TokenSale"
import MakePayments from "../Components/MakePayments"
import ProjectDevelopment from "../Components/ProjectDevelopment"
import SecureWallets from "../Components/SecureWallets"
import NationwideBrands from "../Components/NationwideBrands"
import Footer from "../Components/Footer"
import CurrencyConverter from "../Components/CurrencyConverter"


const Home = () => {



    return (

        <React.Fragment>

            <Hero />
            <CurrencyConverter/>
            <TokenSale />
            <MakePayments />
            <ProjectDevelopment />
            <SecureWallets />
            <NationwideBrands />
            <Footer />

        </React.Fragment>
    )
}

export default Home
