import React from "react";

interface IProps {
  prefixCls: string
}
interface IState {
  count: number
};
class Counter extends React.Component<IProps, IState> {
  constructor (props: IProps) {
    super(props);
    this.state = {
      count: 0
    };   
  }
  increment = () => this.setState(({ count }) => ({ count: count + 1 }))
  decrement = () => this.setState(({ count }) => ({ count: count - 1 }))
  render() {
    const { prefixCls = 'budlocks_comps_' } = this.props;
    return (
      <div className={`${prefixCls}counter`}>
        <button onClick={this.decrement}>-</button>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

export default Counter;
