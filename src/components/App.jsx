import '../App.css';
import { useMediaQuery } from '@mui/material';
import Menubar from "../components/menubar"
import DestopMenu from './destopMenu';
import Nav from './nav';
import MobileNav from './mobileNav';
import Content from './content';
import Scroller from './Scroller';

function App() {
  const isMobile = useMediaQuery('(max-width:750px)');
  return (
    <>
    {isMobile?<MobileNav/>:<Nav/>}
    <Scroller/>
    <Content/>
    {isMobile?<Menubar/>:<DestopMenu/>}
    </>
  );
}

export default App;
