import React from 'react'
import GlobalStyles from '../../assets/styles/global'


import Header from '../Header/Header';
import Routes from '../../Routes/Routes.jsx'

import  {ThemeProvider} from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './style';


function App() {


  return (

    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes/>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
