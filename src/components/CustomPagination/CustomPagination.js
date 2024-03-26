import React from 'react'
import { Pagination } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const whiteTheme = createTheme({
  palette:{
    primary: {
      main: blue[200],
    },
  
  },
});

const CustomPagination = ({setPage, numOfPages=10}) => {
  
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0); 
  }
  
  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop:10,

    }}>
      
    <ThemeProvider theme={whiteTheme}>
      <Pagination count = {numOfPages} onChange={ (e)=> handlePageChange(e.target.textContent)} hideNextButton hidePrevButton shape="rounded" color = "primary"  
      /> 
    </ThemeProvider>

    </div>
  )
}

export default CustomPagination