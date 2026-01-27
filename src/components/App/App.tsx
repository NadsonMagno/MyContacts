import React from 'react'
import GlobalStyles from '../../assets/styles/global'

import Header from '../Header/Header';

import  {ThemeProvider} from 'styled-components';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './style';

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
