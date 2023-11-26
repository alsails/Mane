import { Route, Routes } from "react-router-dom";

import './App.css';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import AllPortfolio from '../AllPortfolio/AllPortfolio';
import Project from '../Project/Project';
import Main from "../Main/Main";

function App() {
  return (
    <div className='page'>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
          <Route
            path="/portfolio"
            element={<AllPortfolio />}
          />
           <Route
            path="/project/:projectId"
            element={<Project  />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
export default App;
