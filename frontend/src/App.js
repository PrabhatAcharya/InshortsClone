import Header from './component/Header'
import InfoHeader from './component/InfoHeader';
import {Box,styled} from "@mui/material/";
import Articles from './component/Articles';
const Container=styled(Box)`
width:60%;
margin: 44px auto 0 auto;
`;
function App() {
  return (
    <Box>
      <Header />
      <Container>
        <InfoHeader />
        <Articles/>
      </Container>
    </Box>
  );
}

export default App;
