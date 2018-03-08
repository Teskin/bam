import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SideBar from './components/side_bar';
import ContentBox from './components/content_box';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }

  onClickEvent(e) {
    e.preventDefault();
    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  render() {
    return <div id="wrapper" className={this.state.isClicked
        ? "toggled"
        : ""}>
      <SideBar/>
      <a onClick={(e) => this.onClickEvent(e)} className="btn btn-lg glyphicon glyphicon-tree-deciduous" id="menu-toggle"></a>
      <ContentBox/>
    </div>
  }
}

ReactDOM.render(<Index/>, document.getElementById('app'));
