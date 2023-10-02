import React from 'react';
import Header from './Header';
import Navbar from 'Navbar';
import LoginForm from 'SignUp'

const Home = () => {

  const userInfoHandler = (enteredUserInfo) => {
    const userInfo = {
      ...enteredUserInfo,
    }
  }

  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <LoginForm onSaveUserInfo={userInfoHandler} />
      </main>
    </div>
  );
};

export default Home;