import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width:'70px',
    borderRadius:'100px',
    padding:'10px',
    height:'70px',
    marginTop:'9px'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
 
}));

export default function ListCard(props) {
  const classes = useStyles();


  return (
    <Card className={classes.root} elevation={0} >
      <CardMedia
        className={classes.cover}
        image={props.image}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content} >
          <Typography component="h5" variant="h5">
            {props.name}
          </Typography>
          <Typography component="h5" variant="subtitle1" color="textPrimary">
            {props.age} year
          </Typography>
        </CardContent>
      </div>
      
    </Card>
  );
}
