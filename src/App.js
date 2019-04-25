import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Router,Route,Link} from 'react-router';
import {Button, Layout, Menu, Breadcrumb, Icon,} from 'antd';
import {observable } from 'mobx'

const {Header,Content,Sider}=Layout;


class App extends Component {
  @observable show=true;
  render() {
    return (
        <Layout>
          <Content>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
                <Button type='primary'>点击进入展示页面</Button>
                
              </header>
            </div>
          </Content>
          <Layout>
            <Content>
               <Layout>
                 <Sider>

                 </Sider>
                 <Content>
                   
                 </Content>
               </Layout>
            </Content>
          </Layout>
        </Layout>
    );
  }
}

export default App;
