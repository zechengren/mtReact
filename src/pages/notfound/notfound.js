import React, { Component } from 'react'
import Exception from 'ant-design-pro/lib/Exception';
import 'ant-design-pro/dist/ant-design-pro.css';
// import {Exception} from '@ant-design/pro-layout/lib/'

export default class notfound extends Component {
  render() {
    return (
        <Exception type="404" />
    )
  }
}
