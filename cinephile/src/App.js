import Banner from "./components/Banner";
import Card from "./components/Card";
import Category from "./components/Category";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/movieDB.json";

function App() {
  return (
    <>
      <Header/>
      <Banner image="/images/bannerCinephile.png"/>
      <Container>
        {/* <h1>Animation</h1>
        <section className="cards">
          {
            videos.map((video =>{
              return <Card id={video.id} key={video.id} imageUrl={video.imageUrl}/>
            }))
          }
        </section> */}
        <Category category = "Sci-Fi">
              {
                /*Aqui eu pego a minha variável "videos" e faço um mapeamento de cada elemento contido nela.
                Cada elemento será chamado de "video" e para cada video, será retornada uma função que chama 
                o componente Card. O Card cria uma card para cada elemento em "videos" */

                  videos.map((video =>{
                    return <Card id={video.id} key={video.id} imageUrl={video.imageUrl}/>
                  }))
              }
        </Category>

      </Container>
      <Footer/>
      
    </>
  );
}

export default App;
