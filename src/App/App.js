import React ,{useState} from 'react';
import Data from '../Component/Data';
import List from '../Component/List';
import Grid from '@material-ui/core/Grid';

import { Button, makeStyles,Paper,CssBaseline} from '@material-ui/core';

const useStyles =makeStyles(theme=>({
  main:{
    backgroundColor:'#08d6a2',
    minHeight:'100vh',
    borderRadius:'0px'
  },
  container:{
    width:'100%',
    display:'flex',
    alignContent:'center',
    alignItems:'center',
    borderRadius:'.25rem',
    margin:'5rem 2rem',
    

  },
  birthContainer:{
    backgroundColor:'#fff',
   width:'450px',
   padding:'0 2rem',
   borderRadius:'.25rem',
   fontSize:'25px',
   
  },
  btn:{
    width:'385px',
    backgroundColor:'#08d6a2',
    margin:'1rem 0',
    fontSize:'18px',
    '&:hover':{
      backgroundColor:'#058e6b'
    }

  }
}))
function App() {
  const[people,setPeople]=useState(Data);
  const classes=useStyles();
  return (
    <Paper elevation={0} className={classes.main}>
      <CssBaseline/>
      <Grid container>
          <Grid container elevation={1} className={classes.container}>
            <Grid item sm/>
           <Grid item className={classes.birthContainer}>
             <h3>{people.length} Birthday Today</h3>
             <List people={people}/>
             <Button onClick={()=> setPeople([])} className={classes.btn}>Clear All</Button>
           </Grid>
           <Grid item sm/>
           
          </Grid>
        </Grid>
    </Paper>
   
  );
}

export default App;
