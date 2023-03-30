import React from 'react';
import {AppBar,Toolbar,styled} from '@mui/material';
import { Menu } from '@mui/icons-material';
const StyledHeader=styled(AppBar)`
   background:#fff;
   height:70px;
`;
const MenuIcon=styled(Menu)`
  color: #000;
`;
//to use html tag in styled component we need to to weite in between singeQuote
const Image=styled('img')({
  height: 55,
  margin:'auto',
  // paddingRight:70
});

function Header() {
  const url =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";
  return (
    <div>
      <StyledHeader position='static'>
        <Toolbar>
          <MenuIcon />
          <Image src={url} alt="logo" />
        </Toolbar>
      </StyledHeader>
    </div>
  );
}

export default Header
