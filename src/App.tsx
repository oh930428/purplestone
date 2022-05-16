import GlobalStyled from 'styles/global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, AllCoffes, MyCard } from 'pages';

const App = () => {
  return (
    <>
      <GlobalStyled />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="all-coffes" element={<AllCoffes />}></Route>
          <Route path="/mycard" element={<MyCard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
