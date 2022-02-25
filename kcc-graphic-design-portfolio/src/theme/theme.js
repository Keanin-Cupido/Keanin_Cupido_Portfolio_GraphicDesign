// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

// Responsive Styles
const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
  '2xl': '2560px',
})

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  breakpoints,
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})

export default theme