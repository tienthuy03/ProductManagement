import React from 'react';
import { UserProvider } from './src/components/users/utilities/UserContext'
import {ShopProvider} from './src/components/Shops/utilities/ShopContext'
import AppNavigation from './src/navigation/AppNavigation'

const App = () => {

  return (
      <UserProvider>
        <ShopProvider>
          <AppNavigation/>
        </ShopProvider>
    </UserProvider>
    
  )
}

export default App
