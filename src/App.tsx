import React from 'react';
import './App.css';
import UsersList from "./components/UsersList";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";

function App() {

  return (
      <Layout className={'h100'}>
        <Content>
            <UsersList/>
        </Content>
      </Layout>
  );
}

export default App;
