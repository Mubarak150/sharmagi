import Hero from "../components/Hero"
import ChaufferCard from "../components/ChaufferCard"
import OurServices from "../components/OurServices"
import Heading from "../components/Heading"
import Travel from "../components/Travel"

export default function Home () {
    return (
        <>
            
            <Hero /> 
            <Travel />
            <OurServices />
            <ChaufferCard />
            <Heading />
        </>
    )
}