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

/* A função filterCategory recebe um índice (id) e retorna todos
os vídeos que pertencem à categoria correspondente. Ela usa o método
filter para selecionar vídeos que têm a mesma categoria do item categories[id].
Por exemplo, quando id for 0, filtrará os vídeos da categoria "Sci-Fi" */

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
        {/*usamos categories.map() para criar um componente <Category> para cada categoria*/}
        {
          categories.map((category, index)=> 
            <Category category = {category} key ={index}>
          {
              filterCategory(index).map((video =>{
                 return <Card id={video.id} key={video.id} imageUrl={video.imageUrl}/>
               }))
          }
            </Category>)
        }
      </Container>
      <Footer/>
      
    </>
  );
}

export default App;
