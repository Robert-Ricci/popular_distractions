import React from 'react';
import Button from 'react-bootstrap/button';
import {connect} from 'react-redux';

class CountButton extends React.Component {
    
    state = {
          count: 0
        }
     

      handleClick = () => {
        this.setState({
          count: this.state.count + 1
        });
      };

    render() {
        
          return  (
             
           
          <Button onClick={() => this.handleClick()}> Click me!{this.state.count} </ Button>
          
          )
      }
}
    const mapStateToProps = state =>{
        return {blogs: state.blogs}
    }

    export default connect (mapStateToProps)(CountButton)