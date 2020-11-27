import React, { Component } from 'react';
import './joke.less';
import axios from 'axios'


export default class head extends Component {
  state = {
    jokes: []
  }
  componentDidMount() { 
    axios.get('/joke?sort=desc&page=&pagesize=20&time=1418816972&key=23a50218f0bc47cc7fcb819343c608a6').then((res)=>{
      // console.log(res.data.images);
      console.log(res.data.result.data);
      this.setState({
        jokes: res.data.result.data
      })
      
      
    })
  }
    
  render() {
    return (
      <div className="jokesBox">
        {this.state.jokes.map(val=>(
          <div className="jokes" key={val.hashId}> 
            {val.content}
          </div>
        ))}
      </div>
    );
  }
}
