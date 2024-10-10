import Banner from "./components/Banner";
import Card from "./components/Card";
import Category from "./components/Category";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/movieDB.json";

const categories = [
  "Sci-Fi",
  "Terror",
  "Animation"
]

function filterCategory(id){
  return(
    videos.filter(video => video.category === categories[id])
  )
}

function App() {
  return (
    <>
      <Header/>
      <Banner image="/images/bannerCinephile.png"/>
      <Container>

        {/*Aqui eu pego a minha variável "videos" e faço um mapeamento de cada elemento contido nela.
                Cada elemento será chamado de "video" e para cada video, será retornada uma função que chama 
                o componente Card. O Card cria uma card para cada elemento em "videos" */}

        <Category category = "Sci-Fi">
              {
                  filterCategory(0).map((video =>{
                     return <Card id={video.id} key={video.id} imageUrl={video.imageUrl}/>
                   }))
              }
        </Category>
        <Category category = "Terror">
              {
                   filterCategory(1).map((video =>{
                     return <Card id={video.id} key={video.id} imageUrl={video.imageUrl}/>
                   }))
              }
        </Category>
        <Category category = "Animation">
              {
                   filterCategory(2).map((video =>{
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
