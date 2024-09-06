import Banner from "./components/Banner";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/db.json";

function App() {
  return (
    <>
      <Header/>
      <Banner image="/images/bannerCinephile.png"/>
      <Container>
        <h1>Lista de Filmes</h1>
        <section className="cards">
          {
            videos.map((video =>{
              return <Card id={video.id} key={video.id} imageUrl={video.imageUrl}/>
            }))
          }
            
        </section>
      </Container>
      <Footer/>
      
    </>
  );
}

export default App;
