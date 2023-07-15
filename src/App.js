import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Meal";
import Catagories from "./components/Catagories";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meal/>
      <Catagories/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
