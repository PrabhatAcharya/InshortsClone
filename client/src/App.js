import Header from './component/Header'
import InfoHeader from './component/InfoHeader';
import {Box,styled} from "@mui/material/";
import Articles from './component/Articles';
const Container = styled(Box)(({ theme }) => ({
  width: "60%",
  margin: "44px auto 0 auto",
  [theme.breakpoints.down("md")]: {
    width: "75%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));
;
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
