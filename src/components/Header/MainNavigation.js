import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate('/');
    else if (value === 1) navigate('/movies');
    else if (value === 2) {
      if (!localStorage.getItem('user')) {
        navigate('/login');
      } else {
        navigate('/profile');
      }
    }
  }, [value, navigate]);
  
  return (
    <Box sx={{ width: '100%', position: "fixed", bottom: 0, backgroundColor: "#2E6CA0", zIndex:100, }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Главная" icon={<HomeIcon />} />
        <BottomNavigationAction label="Фильмы" icon={<MovieIcon />} />
        <BottomNavigationAction label="Профиль" icon={<AccountBoxIcon />} />
      </BottomNavigation>
    </Box>
  );
}