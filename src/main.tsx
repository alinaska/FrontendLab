import './index.css';
import '@fontsource/inter/400.css'; 
import '@fontsource/inter/700.css';
import '@fontsource/inter/500.css';
import { ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import theme from './query/constants/theme';
import { BrowserRouter } from 'react-router-dom';
import App from '~/app/App.tsx';
import { store } from '~/store/configure-store.ts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
        <ChakraProvider theme={theme}>
        <BrowserRouter>
         <App />
        </BrowserRouter>
        </ChakraProvider>
        </Provider>
    </StrictMode>,
);
