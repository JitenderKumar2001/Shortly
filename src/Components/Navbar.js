import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../img/logo.png';

const pages = ['Features', 'Pricing', 'Resources'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar class="navbar" position="static" sx={{bgcolor: 'white', boxShadow: 'none', color: 'black'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <span style={{paddingRight: 30, paddingTop: 2}}><img src={logo} alt='errorIMG' sx={{px: 5}} /></span>

          <Box id="box" sx={{ flexGrow: 1, display: {sm: 'none', xs: 'flex'} }}>
            <IconButton id="icon"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              xs={{justifyContent: "space-between"}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'gray', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box id="auth" sx={{display: 'flex', cursor: 'pointer'}}>
                <Typography sx={{mr: '0.5rem', px: 3, my: 1}}>Login</Typography>
                <Typography sx={{mr: 5, borderRadius: 15, bgcolor: 'cyan', px: 3, my: 1}}>Signup</Typography>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;