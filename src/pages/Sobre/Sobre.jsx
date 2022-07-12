import Header from "../../components/Header/Header"
import image from "../../assets/woman.svg"
import About from "../Sobre/About/About"
import Skills from "../Sobre/Skills/Skills"
import Footer from "../../components/Footer/Footer"

function Sobre() {
    return (
        <>
            <Header
                image={image}
                description="ilustração de uma mulher"
            >
                Sobre:
            </Header>
            <About />
            <Skills />
            <Footer />
        </>
    )
}
export default Sobre