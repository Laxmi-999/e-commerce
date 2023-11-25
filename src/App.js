import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import Cart from './Cart';
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Header from "./Header";
import Footer from "./Footer";
const  App = () => {

  const theme = {
    color:{
      heading: "rgb(24 24 29)",
      black: "#212529",
      // white: "#FFFFFF",
      helper: "#8490ff",
      text:"black",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgba(98 94 243)",
      border: "rgba(98 84 243 0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgd(98 189 252) 100% )",
      shadow: "rgba(0,0,0,0.2) 0px 1px 3px 0px, rgba(27 31 45 12) 0px 0px 0px 1px;",
    },
    //to make responsive writing meida query//
    media:{
      mobile: "768px",
      tab:"998px",

    }
  };

  return (
           <ThemeProvider theme = {theme}>
             <BrowserRouter>
              <Header />
              <GlobalStyle />
                <Routes>
                  <Route path ='/' element ={<Home />} />
                  <Route path ='/about' element ={<About />} />
                  <Route path ='/contact' element ={<Contact />} />
                  <Route path ='/product' element ={<Products />} />
                  <Route path ='/singleproduct/:id' element ={<SingleProduct />} />
                  <Route path ='/cart' element ={<Cart />} />
                  <Route path ='*' element ={<ErrorPage />} />
                </Routes>
              <Footer />
             </BrowserRouter>  
        </ThemeProvider>
  );
}

export default App;
