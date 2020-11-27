import React, { Component } from 'react';
import './head.less';
import axios from 'axios'



export default class head extends Component {
  state= {
    news: []
  }
  componentDidMount() { 
    axios.get('/new?type=&key=1e36572c1718863b01d01b0663b3d817').then((res)=>{
      // console.log(res.data.images);
      console.log(res.data.result.data);
      this.setState({
        news: res.data.result.data
      })
      
      
    })
  }
    
  render() {
    return (
      <div className="box">
        <div className="jump"> 点击标题跳转到对应页面 </div>
        {this.state.news.map(val=>(
          <div key={val.uniquekey} className="card"> 
          <div className="titles">
            <a href={val.url}>
              {val.title}
            </a>
          </div>
          <div className="date">
            {val.date}
          </div>
          <div className="pics"> 
            {val.thumbnail_pic_s?<img src={val.thumbnail_pic_s}/>:null}
            {val.thumbnail_pic_s02?<img src={val.thumbnail_pic_s02}/>:null}
            {val.thumbnail_pic_s03?<img src={val.thumbnail_pic_s03}/>:null}


          </div>
        </div>
        ))}
      </div>
    );
  }
}
