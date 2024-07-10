import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../core/api/user';

const userInfoDefault = {
  id: '',
  username: '',
  realname: '',
};
export const UserContext = React.createContext(userInfoDefault);

// const getUserId = () => {
//   const cookies = document.cookie.split(';');
//   return cookies
//     .filter((cookie) => cookie.indexOf('userid') > -1)[0]
//     .replace(/userid=/g, '');
// };

export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(userInfoDefault);

  useEffect(() => {
    async function fetchUserInfo(id: string) {
      try {
        const res = await getUserInfo(userId);
        if (res.errno === 0) {
          setUserInfo(res.data);
        } else {
          setUserInfo(userInfoDefault);
        }
      } catch (error) {
        setUserInfo(userInfoDefault);
      }
      const user = await getUserInfo(id);

      setUserInfo(user.data);
    }

    const userId = userInfo.id || sessionStorage.getItem('userId');
    if (userId) {
      fetchUserInfo(userId);
    }
  }, [userInfo.id]);

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};
