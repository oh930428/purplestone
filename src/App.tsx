import GlobalStyled from 'styles/global';
import { Footer, Navigation } from 'components';
import { Home, AllCoffees, CreateMyCard } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <GlobalStyled />

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/all-coffees" element={<AllCoffees />}></Route>
          <Route path="/mycard" element={<CreateMyCard />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
