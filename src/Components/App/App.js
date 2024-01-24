import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import './App.css';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import AllPortfolio from '../AllPortfolio/AllPortfolio';
import Project from '../Project/Project';
import Main from "../Main/Main";
import PopUpMenu from "../PopUpMenu/PopUpMenu";
import PopUpQuiz from "../PopUpQuiz/PopUpQuiz";

function App() {
  const bodyElement = document.querySelector('body');
  const [isPopUpMenuOpen, setIsPopUpMenuOpen] = useState(false);
  const [isPopUpQuiz, setIsPopUpQuiz] = useState(false);

  function handleopUpQuizOpen() {
    setIsPopUpQuiz(true)
  }

  function handlePopUpMenuOpen() {
    setIsPopUpMenuOpen(true)
    bodyElement.style.overflow = 'hidden';
  }

  function closePopUp() {
    setIsPopUpMenuOpen(false)
    setIsPopUpQuiz(false)
    bodyElement.style.overflow = 'auto';
  }


  return (
    <div className='page'>
      <Header handlePopUpMenuOpen={handlePopUpMenuOpen} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Main handleopUpQuizOpen={handleopUpQuizOpen}/>}
          />
          <Route
            path="/portfolio/:categoryId"
            element={<AllPortfolio />}
          />
           <Route
            path="/project/:projectId"
            element={<Project  />}
          />
        </Routes>
      </main>
      <Footer />
      <PopUpQuiz isOpend={isPopUpQuiz} close={closePopUp} />
      <PopUpMenu isOpend={isPopUpMenuOpen} close={closePopUp} />
    </div>
  )
}
export default App;
