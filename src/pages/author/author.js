import React,{useContext} from 'react';
import './author.css';
import { text } from '../../../public/store/store'
 

export default () => {
  const word = useContext(text)

  return (
    <div>
      {/* <h1 className={styles.title}>Page author/author</h1> */}
      {/* {word.side} */}
      <div className="word"> {word.side} </div>
      <div className="author"> 作者：{word.name} </div>
      <div className="descrip"> 使用useContent来自store的书局 </div>
    </div>
  );
}
