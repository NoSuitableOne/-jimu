import React from 'react';
import { Select as AntdSelect } from 'antd';
import styles from './style.less';

export default class Slider extends React.Component {
  render() {
    return (
      <AntdSelect className={styles.select} defaultValue="lucy">
        <AntdSelect.Option value="lucy">lucy</AntdSelect.Option>
      </AntdSelect>
    );
  }
}