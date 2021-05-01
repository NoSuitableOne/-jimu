import React from 'react';
import { Select as AntdSelect } from 'antd';
import cls from 'classnames';

interface IProps {
  prefixCls: string
}
interface IState {
};
export default class Slider extends React.Component<IProps, IState> {
  render() {
    const { prefixCls = 'budlocks_comps_' } = this.props;
    return (
      <AntdSelect className={`${prefixCls}select`} defaultValue="lucy">
        <AntdSelect.Option value="lucy">lucy</AntdSelect.Option>
      </AntdSelect>
    );
  }
}