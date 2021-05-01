import React from 'react';
import { Slider as AntdSlider, Switch } from 'antd';

interface IProps {
  prefixCls?: string
}
interface IState {
  disabled: boolean
};
export default class Slider extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      disabled: false
    };
  }

  handleDisabledChange = (disabled: boolean) => {
    this.setState({ disabled });
  };

  render() {
    const { prefixCls = 'budlocks_comps_' } = this.props;
    const { disabled } = this.state;
    return (
      <div className={`${prefixCls}slider`}>
        <AntdSlider defaultValue={30} disabled={disabled} />
        <AntdSlider range defaultValue={[20, 50]} disabled={disabled} />
        <span className={'text'}>Disabled:</span>
        <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
      </div>
    );
  }
}
