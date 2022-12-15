import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './styles/GlobalStyles';
import { LightTheme } from "./styles/themes";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from "./pages/Home";
import { PodCast } from "./pages/PodCast";
import { Episode } from "./pages/Episode";
import { Error404 } from './pages/Error404';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(LightTheme)

  return (
    <div className="App">
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/podcast/:id" element={<PodCast />} />
            <Route path="/podcast/:id/episode/:id" element={<Episode />} />
            <Route path="/404" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
