import React from 'react'
//import TableRow from '@material-ui/core/TableRow'
//import TableCell from '@material-ui/core/TableC'
import {TableRow} from '@material-ui/core'
import {TableCell} from '@material-ui/core'



class User extends React.Component  {
  render(props) {
    // const user = this.props.user;
    return(
      <div>
        <UserPro
          id={this.props.user.id}
          image={this.props.user.imageUrl}
          />

        <UserInfo
          name={this.props.user.name}
          birthday={this.props.user.birthday}
          gender={this.props.user.gender}
          job={this.props.user.job}
          />
      </div>      
    )
  }
}

class UserPro extends React.Component {
  render(){
    return(
      <div>
        <h6>this.props.id = {this.props.id}</h6>
        <img 
          src={this.props.imageUrl}
        />
      </div>
    )
  }
}

class UserInfo extends React.Component{
  render(){
    return (
      <div>
        <h6>this.props.user.name = {this.props.name}</h6>
        <h6>this.props.user.birthday = {this.props.birthday}</h6>
        <h6>this.props.user.gender = {this.props.gender}</h6>
        <h6>this.props.user.job = {this.props.job}</h6>
      </div>

    )
  }
}

export default User;