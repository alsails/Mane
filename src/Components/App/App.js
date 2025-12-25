import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import './App.css';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import AllPortfolio from '../AllPortfolio/AllPortfolio';
import Project from '../Project/Project';
import Main from "../Main/Main";
import Requisites from "../Requisites/Requisites";
import Politics from "../Politics/Politics";
import NotFound from "../NotFound/NotFound";

function App() {
  const location = useLocation();
  const isNotFound = location.pathname === "/404";

  return (
    <div className='page'>
      {!isNotFound && <Header />}
      <main>
        <Routes>
          <Route
            path="/"
            element={<Main/>}
          />
          <Route
            path="/portfolio/:categoryId"
            element={<AllPortfolio />}
          />
           <Route
            path="/project/:projectId"
            element={<Project  />}
          />
          <Route
            path="/requisites"
            element={<Requisites  />}
          />
          <Route
            path="/politics"
            element={<Politics  />}
          />
          <Route
            path="/404"
            element={<NotFound />}
          />
          <Route
            path="*"
            element={<Navigate to="/404" replace />}
          />
        </Routes>
      </main>
      {!isNotFound && <Footer />}
    </div>
  )
}
export default App;
