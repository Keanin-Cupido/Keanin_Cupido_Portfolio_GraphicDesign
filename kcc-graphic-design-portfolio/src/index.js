import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme'; // Custom theme

// Pages
import App from './App';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById('root')
);