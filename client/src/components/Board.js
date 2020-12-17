import React from 'react';
import NewCustomer from './NewCustomer';
import User from './User';

class Board extends React.Component {
  render (props) {
    return (
      <section>     
        <div>
          <User 
            user={this.props.user}
            // name={this.props.user.name}
          />
        </div>        
        <h6>{this.props.title}</h6>
        <h6>{this.props.content}</h6>
        {/* <h6>{this.props.user.name}</h6>
        <h6>{this.props.user.gender}</h6> */}
      </section>
    )
  }
}

export default Board;