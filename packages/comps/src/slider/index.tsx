import React from 'react';
import { Slider as AntdSlider, Switch } from 'antd';
import styles from './style.less';

export default class Slider extends React.Component {
  state = {
    disabled: false,
  };

  handleDisabledChange = (disabled: boolean) => {
    this.setState({ disabled });
  };

  render() {
    const { disabled } = this.state;
    return (
      <>
        <AntdSlider defaultValue={30} disabled={disabled} />
        <AntdSlider range defaultValue={[20, 50]} disabled={disabled} />
        <span className={styles.text}>Disabled:</span><Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
      </>
    );
  }
}
