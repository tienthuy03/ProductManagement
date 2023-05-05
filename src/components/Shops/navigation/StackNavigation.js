import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ShopNavigation from './ShopNavigation';
import EditProduct from '../../Shops/screens/EditProduct'
import AddProduct from '../../Shops/screens/Addproduct'
import EditCategory from '../../Shops/screens/EditCategory'
import AddCategory from '../../Shops/screens/AddCategory'
import Product from '../screens/Product';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
   <Stack.Navigator
   screenOptions={{headerShown : false}}>
      <Stack.Screen name='ShopNavigation' component={ShopNavigation}/>
      <Stack.Screen name='EditProduct' component={EditProduct}/>
      <Stack.Screen name='AddProduct' component={AddProduct}/>
      <Stack.Screen name='EditCategory' component={EditCategory}/>
      <Stack.Screen name='AddCategory' component={AddCategory}/>

   </Stack.Navigator>
  )
}

export default StackNavigation