import Banner from "./components/Banner";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <Banner image="/images/capa.png"/>
      <Container>
        <h1>Helló, Cinema!</h1>
        <Card/>
      </Container>
      <Footer/>
      
    </>
  );
}

export default App;
