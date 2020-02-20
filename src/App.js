import React from 'react';
import { Header, Footer, theme, GlobalStyles } from './globals';
import styled, { ThemeProvider } from 'styled-components';
import { Router } from '@reach/router';
import { Home, Random, Search } from './pages';
import Login from "./components/Login";
import List from "./components/List";
import HeaderList from "./components/HeaderList";
import MusicCard from "./components/CardMusic";


const RouterWrapper = styled.div`
  min-height: calc(100vh - 90px);
  padding: 1px 0;
  background: ${(props) => props.theme.colors.second};
`;

function App() {
  return (
    <div className="App" style={{ width: '100%', height: '100%' }}>
      <ThemeProvider theme={theme || {}}>
        <Header />
        <RouterWrapper>
          <Router>
            <Home path="/" />
            <Login path="/login" />
            <List path="/list" />
            <HeaderList path="/headerList" />
            <Random path="/random" />
            <Search path="/search" />
            <MusicCard path="/cardMusic" />
            <Search path="/search/:searchTerm" />
          </Router>
        </RouterWrapper>
        <Footer author="CPE Jr" />
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}

export default App;
