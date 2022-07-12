import Header from "../../components/Header/Header"
import image from "../../assets/contact.svg"
import Footer from "../../components/Footer/Footer"


function Contato() {
    return (
        <>
            <Header
                image={image}
                description="ilustração de uma mulher com alguns itens para contato"
            >
                Contato:
            </Header>
            <Footer />
        </>
    )
}
export default Contato