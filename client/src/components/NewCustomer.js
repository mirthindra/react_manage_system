// import ReactComponent from 'react';
import React from 'react';

class NewCustomer extends React.Component {
  render(props) {
    return(
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    )
  }
}

export default NewCustomer;