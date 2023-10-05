import React, { useState } from 'react';
import Header from './Header';
import Navbar from 'Navbar';
import LoginForm from 'SignUp'

const Home = () => {
  const [userName, setUserName] = useState('');

  const userInfoHandler = (enteredUserInfo) => {
    setUserName(enteredUserInfo.name)
  }

  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <LoginForm onSaveUserInfo={userInfoHandler} />
      </main>
      <p>Welcome {userName} to the HealthHub!</p>
    </div>
  );
};

export default Home;