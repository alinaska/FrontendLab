import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({   
  breakpoints: {
    sm: '360px',  
    md: '768px',
    lg: '1024px',
    xl: '1440px',
    '2xl': '1920px',
  },
  sizes: {  
    container: {
      sm: '360px',    
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px', 
      
    }
}
   
});

export default theme;

