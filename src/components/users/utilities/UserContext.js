import { View, Text } from 'react-native'
import React, {useState, createContext} from 'react'
import AxiosInstance from '../../../axiosClient/AxiosInstance'
import AsyncStorage from '@react-native-async-storage/async-storage';

 export const UserContext = createContext();

export const UserProvider = (props) => {
   const {children} = props;
   const [isLogin, setIsLogin] = useState(false);
   const [user, setUser] = useState({});

   const login = async(email, password) =>{
      console.log("params email, pass" ,email,password);
      try {
         const  body ={
            email: email,
            password:password
         } 
         const res = await AxiosInstance().post('/user/login',body);
         setUser(res.data)
         setIsLogin(true);
         return true
      } catch (error) {
         console.log("login error", error);
      }
      return false
   }

   const register = async ( name,email, password) =>{
         try {
            const body ={
               name: name,
               email: email, 
               password: password
            }
            const res = await AxiosInstance().post('/user/register', body);
            console.log("register", res);
            return true
         } catch (error) {
            console.log("register error", error);
         }
         return false
   }

   return(
     <UserContext.Provider value={{login, user, setUser, register, isLogin}}>
         {children}
     </UserContext.Provider>
   )
}
