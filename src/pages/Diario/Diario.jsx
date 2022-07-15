import Header from "../../components/Header/Header";
import image from "../../assets/diary.svg";
import Skills from "../Diario/Skills/Skills";
import Footer from "../../components/Footer/Footer";

function Diario() {
  return (
    <>
      <Header
        image={image}
        description="ilustração de uma muher ao lado de uma folha de caderno como um mural"
      />
      <Skills />
      <Footer />
    </>
  );
}
export default Diario;
