import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import NewCustomer from './components/NewCustomer';
import Board from './components/Board';

import {Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const customer = {
  'name' : '홍길동1',   
  'birthday' : '12345600',
  'gender' :'남자1',
  'job' : '학생1'
}

const board = {
  'title' : '새로운 타이틀', 
  'content' : '본문내용', 
  user : {
    id : "1",
    name : "홍길동1",       
    birthday : "12345600",
    gender :"남자1",
    job : "학생1", 
    imageUrl : "https://placeimg.com/32/32/any"
  }
}

const users = [
  {
    id : "1",
    name : "홍길동1",       
    birthday : "12345600",
    gender :"남자1",
    job : "학생1", 
    imageUrl : "https://placeimg.com/32/32/any"
  }, 
  {
    id : "2",
    name : "홍길동2",       
    birthday : "12345602",
    gender :"남자2",
    job : "학생2", 
    imageUrl : "https://placeimg.com/32/32/2"
  }, 
  {
    id : "3",
    name : "홍길동3",       
    birthday : "12345603",
    gender :"남자3",
    job : "학생3", 
    imageUrl : "https://placeimg.com/32/32/3"
  }
]

const userStyle = makeStyles({
  table : {
    minWidth : 650
  }
});

const styles = theme => ({
  root : {    
    width : '100%',
    maginTop : theme.spacing.unit * 3,
    overflowX : 'auto'
  }, 
  table : {
    minwidth : 1080
  }
})

function App() {
  const classes = userStyle();
  //const { classes } = this.props;
  return (      

        <Paper className={classes.root}>         
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">name</TableCell>
                <TableCell align="right">birth</TableCell>
                <TableCell align="right">gender</TableCell>
                <TableCell align="right">job</TableCell>
                <TableCell align="right">title</TableCell>
                <TableCell align="right">content</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {users.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right"><img src={row.imageUrl}/></TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.birth}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.job}</TableCell>
                <TableCell align="right">{board.title}</TableCell>
                <TableCell align="right">{board.content}</TableCell>
              </TableRow>
            ))}     
            </TableBody>       
          </Table>
      
        </Paper>    
  )
}

// export default withStyles(styles)(App);
export default App;
