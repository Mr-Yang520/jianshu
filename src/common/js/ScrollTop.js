import { Component } from 'react';
import { withRouter } from 'react-router-dom';
 
class ScrollToTop extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    let toPath = this.props.location.pathname.split("/").length;
    let fromPath = prevProps.location.pathname.split("/").length;
    if (toPath > fromPath){
        window.scrollTo(0,0)
    }
    if(this.props.location.pathname === '/home/login'){
        document.querySelector('.Header').style.display = 'none'
    }else{
        document.querySelector('.Header').style.display = 'block'
    }
  }
 
  render() {
    return (
      this.props.children
    );
  }
}
 
export default withRouter(ScrollToTop);