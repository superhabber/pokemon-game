import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

ReactDOM.render(
  
  <>
    <Header title="This is title" descr="This is Description!"/>
    <Layout id="1" title="Title1" desc="Description1" urlBg="/bg1.jpg"/>
    <Layout id="2" title="Title2" desc="Description2" colorBg="lightblue"/>
    <Layout id="3" title="Title3" desc="Description3" urlBg="/bg1.jpg"/>
    <Footer/>
  </>,

  document.getElementById('root')
);

