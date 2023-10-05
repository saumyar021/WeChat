
import './App.css';
// import { Box } from '@chakra-ui/react';
import { Route  } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/Chatpage';



//  function NewsListPage () {
//   return (
//     <div className="App">Hello
//    </div>
//    );
//  }

export default function App(){
  return(
    // <Box bg="red
    // ">hello</Box>
   <div className="App"> 
   <Route path="/" component={ Homepage } exact />
   <Route path="/chats" component={ Chatpage } />
   </div>
    

  );
}


