import "./App.css";
import { GlobalStyle } from "./components/StyledGlobal/StyledGlobal";
import Header from "./components/Header/Header";
import MainSlide from "./components/MainSlide/MainSlide";
import MenuItems from "./components/MenuItems/MenusItems";
import { FixedBackground } from "./components/StyledGlobal/FixedBackground";
import { NewsContainer } from "./components/NewsContainer/NewsContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainSlide />
      <MenuItems />
      <FixedBackground />
      <NewsContainer />
      <Footer />
    </>
  );
}

export default App;
