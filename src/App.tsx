import { useRef, useState } from 'react'
import './App.css'
import Card from './card';
import HighLightReact from './highlight-react';

function App() {
  const imgRef = useRef<HTMLImageElement>(null)
  function generateJSError(){
      const o = {};
      o.a.b = "2"
  }


  function generateUnCatchPromise(){
    Promise.reject(2).then(res=>{
      console.log(res)
    })
  }
  function generateXHRError(){
    const xhr = new XMLHttpRequest();
    xhr.open("get", "www.error.example.com");
    xhr.send("")
  }

  function generateFetchError(){
    fetch("http://www.error.example.com")
    .then(response => response.json())
    .then(data => console.log(data));
  }

  function generateResourceError() {
    if(imgRef.current){
      imgRef.current.src = "http://www.error.example.com/img.png"
    } 
   
  }


  return (
    <div className="App">
      <h1>测试页面</h1>
      <div>
        <h2>稳定性检测测试</h2>
        <Card title="普通JS错误"          fun={generateJSError} />
        <Card title="未捕获的Promise错误" fun={generateUnCatchPromise} />
        <Card title="网络请求错误(xhr)"   fun={generateXHRError} />
        <Card title="网络请求错误(fetch)" fun={generateFetchError} />
        <Card title="资源请求错误"        fun={generateResourceError}/>
          <img ref={imgRef}></img>
      </div>

      <div>
        <h2></h2>
      </div>

    </div>
  )
}

export default App
