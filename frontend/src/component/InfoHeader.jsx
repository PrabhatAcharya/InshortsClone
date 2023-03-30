import React from 'react'
import { Box,Typography} from "@mui/material/";
import {styled} from "@mui/material";

const  Container=styled(Box)`
background:#f44336;
color:#FFFFFF;
display:flex;
align-items:center;
height:48px;
`;
const Image=styled('img')({
    height: 33,
    '&:last-child':{
        margin:'0 50px 0 20px'
    }
});

const Text=styled(Typography)`
font-size:14px;
font-weight:300;
margin-left:15px
`;

function InfoHeader() {
    const appStore='https://assets.inshorts.com/website_assets/images/appstore.png';
    const googlePlay='https://assets.inshorts.com/website_assets/images/playstore.png';
  return (
    <Container>
      <Text>
        For the best experience use inshorts app on your smartphone
      </Text>
      <Box style={{display:'flex',marginLeft:'auto'}}>
        <Image src={appStore} alt="applestore" />
        <Image src={googlePlay} alt="playStore" />
      </Box>
    </Container>
  );
}

export default InfoHeader
