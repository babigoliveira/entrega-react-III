import Header from "../../components/Header/Header"
import image from "../../assets/teamWork.svg"
import Skills from "../Portfolio/Skills/Skills"
import Repositories from "../Portfolio/Repositories/Repositories"
import Footer from "../../components/Footer/Footer"

function Portfolio() {
    return (
        <>
            <Header
                image={image}
                description="ilustração de projetos entre duas mulheres de um mesmo time"
            >
                Portfólio:
            </Header>
            <Skills />
            <Repositories />
            <Footer />
        </>
    )
}
export default Portfolio