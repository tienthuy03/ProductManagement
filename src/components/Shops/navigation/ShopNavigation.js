
import { Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Product from '../../../components/Shops/screens/Product'
import Category from '../../../components/Shops/screens/Category'
import StackNavigation from '../../Shops/navigation/StackNavigation'


const Tab = createBottomTabNavigator();

const ShopNavigation = () => {
    return (
          <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    if (route.name === 'Product') {
                        if (focused) {
                            return (
                                <Image
                                    source={require('../../../../assets/images/gift_ac.png')} />
                            )
                        } else {
                            return (
                                <Image
                                    source={require('../../../../assets/images/gift.png')} />
                            )
                        }
                    } else if (route.name === 'Category') {
                        if (focused) {
                            return (
                                <Image
                                    source={require('../../../../assets/images/shopping-bagac.png')} />
                            )
                        } else {
                            return (
                                <Image
                                    source={require('../../../../assets/images/shopping-bag.png')} />
                            )
                        }
                    }
                },
            })}>
            <Tab.Screen name="Product" component={Product} />
            <Tab.Screen name="Category" component={Category} />
        </Tab.Navigator>   
    )
}
export default ShopNavigation