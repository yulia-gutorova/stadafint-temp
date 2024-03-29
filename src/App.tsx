import React, { useState } from 'react';
import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage       from './components/homePage/HomePage';
import LogInPage      from './components/logInPage/LogInPage';
import NavigationMenu from './components/global/components/NavigationMenu';
import Footer         from './components/global/components/Footer';
import CustomerPage   from './components/customerPage/CustomerPage';
import CleanerPage    from './components/cleanerPage/CleanerPage';

function App() {


  const [login, setLogin] = useState(false);
  const [loginText, setLoginText] = useState('Log in');
  const [load, setLoad] = useState('/login');

  //-------------------------------------------------------------------
  const loginButtonTextHandler = (login: boolean) => {

    if (login) {
      setLoginText('Log out');
      setLoad('/');
    };
    if (!login) {
      setLoginText('Log in');
      setLoad('/login');
    };
  }

  /*   const  onScrollToElementClickHandler = (el : string) =>{   
      let element = document.querySelector('.' + el)!;
      if (element) {
          element.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"});
        }
    }  */
    
  //-------------------------------------------------------------------
  const onScrollToElementClickHandler = (el: string) => {
    setLogin(false);
    setLoginText('Log in');
    setLoad('/login');

    let selector: string = '.' + el;

    async function waitForElement(selector: string, timeout = 15000) {
      const start = Date.now();

      while (Date.now() - start < timeout) {
        const el = document.querySelector(selector);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
          return el!;
        }
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      return null;
    }
    waitForElement(selector);
  }

  //-------------------------------------------------------------------
  const onLogOutClickHandler = () => {
    setLogin(false);
    setLoginText('Log in');
    setLoad('/login');
  }

  return (
    <div className="App">

      <BrowserRouter>
        
          <NavigationMenu
            onScrollToElementClickHandler={onScrollToElementClickHandler}
            loginText={loginText}
            login={login}
            load={load}></NavigationMenu>
          <Routes>
            <Route path='/' element={<HomePage
              onLogOutClickHandler={onLogOutClickHandler} />} />
            <Route path='/login' element={<LogInPage loginButtonTextHandler={loginButtonTextHandler} />} />
            <Route path='/login/customer/:name' element={<CustomerPage loginButtonTextHandler={loginButtonTextHandler}/>} />
            <Route path='/login/cleaner/:name' element={<CleanerPage loginButtonTextHandler={loginButtonTextHandler}/>} />
            <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
          <Footer onScrollToElementClickHandler={onScrollToElementClickHandler}></Footer>
   

      </BrowserRouter>



    </div>
  );
}

export default App;
