import GlobalStyled from 'styles/global';
import { Footer, Navigation } from 'components';
import { Home, AllCoffes, MyCard } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <GlobalStyled />

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="all-coffes" element={<AllCoffes />}></Route>
          <Route path="/mycard" element={<MyCard />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
