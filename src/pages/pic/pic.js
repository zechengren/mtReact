import React, { Component } from 'react';
import './pic.less';
import axios from 'axios';
import { Card } from 'antd';

const { Meta } = Card;
export default class pic extends Component {
  state = {
    pics: [],
    kk: 'ddd',
  };
  componentDidMount() {
    axios.get('/api/bg/').then(res => {
      console.log(res.data.images);
      this.setState({
        pics: res.data.images,
      });
    });
  }
  render() {
    return (
      <div className="container">
        {this.state.pics.map(val => (
          <div className="imgbox" key={val.url}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src={val.url}
                />
              }
            >
              <Meta
                title={val.copyright}
                description={val.startdate}
              />
            </Card>
          </div>
        ))}
      </div>
    );
  }
}
