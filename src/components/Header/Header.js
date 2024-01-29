import profil from './profil.png';
import search from './search.png';
import notification from './notification.png';
import React, { useState } from 'react';
import Input from '../Input/Input';
import Login from '../Login/Login';
import "./Header.css";

function Header(props) {
  const [loginVisible, setLoginVisible] = useState(false);

  const functionConnection = () => {
    setLoginVisible(true);
  };

  return (
    <>
      <div className="Header">
        <div className="HeaderRight">
          <div className="HeaderSearch">
            <img src={search} alt={search}/>
            <Input placeholder="What are you searching for?" name={props.Input}></Input>
          </div>
          <div className="HeaderNotification">
            <img src={notification} alt={notification}/>
          </div>
          <div className="HeaderAdmin">
            <p>other admin</p>
          </div>
          <div className={`HeaderConnexion ${loginVisible ? 'overlay' : ''}`} >
            <img src={profil} alt={profil}/>
          </div>
        </div>
      </div>
      {loginVisible && <Login functionConnection={functionConnection} active={loginVisible} />}
    </>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
