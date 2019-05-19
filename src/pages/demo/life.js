import React from 'react';
import Child from './child';
import {Button} from 'antd';
export default class Life extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  hendleAdd = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  hendleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    const style = {
      padding: 30,
    };
    console.log('life father');
    return (
      <div style={style}>
        <p>React生命周期介绍</p>
        <Button>点击</Button>
        <button onClick={this.hendleAdd}>点击一下</button>
        <button onClick={this.hendleClick.bind(this)}>点击一下</button>
        <p>{this.state.count}</p>
        <Child name={this.state.count} />
      </div>
    );
  }
}
