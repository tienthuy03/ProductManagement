import React, {useContext}  from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserNavigation from '../components/users/navigation/UserNavigation'
import { UserContext } from '../components/users/utilities/UserContext'
import ShopNavigation from '../components/Shops/navigation/ShopNavigation'
import StackNavigation from '../components/Shops/navigation/StackNavigation'
const AppNavigation = () => {

    const {isLogin} = useContext(UserContext)
  return (
   <NavigationContainer>
        {isLogin ? <StackNavigation/> : <UserNavigation/>}
   </NavigationContainer>
  )
}

export default AppNavigation;
