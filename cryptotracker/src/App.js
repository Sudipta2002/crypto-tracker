import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
 import Header from "./Components/Header";
 import Homepage from "./Pages/Homepage";
 import Coinpage from "./Pages/Coinpage";
import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles(()=>({
  Appp:{
    backgroundColor: '#14161a',
    color:"white",
    minHeight:"100vh",
  },
}));
function App() {
  const classes= useStyles();

  return (
    <Router>
      <div className={classes.Appp}>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/coins/:id' element={<Coinpage/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
