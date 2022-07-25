import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from "antd";

const { Header, Content } = Layout;


const UserList = ({ people }: any ) => {
  return (
    <>
      {people.map((person: any) => {
        const { name, email, phone, website } = person;
        return (
         
            <Layout>
                    <Header className='header'><img src="https://avatars.dicebear.com/v2/avataaars/%7B%7Buser_name%7D%7D.svg?options[mood][]=happy](https://avatars.dicebear.com/v2/avataaars/%7B%7Busername%7D%7D.svg?options%5Bmood%5D%5B%5D=happy)" alt="none" /></Header>
                    <Content><h4>{name}</h4>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{website}</p></Content>
            </Layout>
            
          
        );
      })}
    </>
  );
};

export default UserList;
