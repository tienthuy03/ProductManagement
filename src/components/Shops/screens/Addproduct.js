import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import color from '../../../../assets/colors/color'
import { SelectList } from 'react-native-dropdown-select-list'


const data = [
   { key: '1', value: 'Mobiles', disabled: true },
   { key: '2', value: 'Appliances' },
   { key: '3', value: 'Cameras' },
   { key: '4', value: 'Computers', disabled: true },
   { key: '5', value: 'Vegetables' },
   { key: '6', value: 'Diary Products' },
   { key: '7', value: 'Drinks' },
]

const AddProduct = (props) => {
   const {navigation} = props;
   const [selected, setSelected] = useState("");
   return (
      <ScrollView style={styles.container}
         showsVerticalScrollIndicator={false}>
         <View style={styles.header}>
            <Pressable
            onPress={()=>navigation.goBack()}>
               <Image style={styles.imgBack}
               source={require('../../../../assets/images/back.png')} />
            </Pressable>
            
            <Text style={styles.textThemMoi}>Create New Product</Text>
         </View>
         <View style={styles.imgDetail}>
            <Image style={styles.imgInput} source={require('../../../../assets/images/add.png')} />
            <Text style={styles.textAdd}>Add cover photo</Text>
         </View>
         <View style={styles.formEdit}>
            <View style={styles.textInputContainer}>
               <Text style={styles.textTitle}>Product name</Text>
               <TextInput style={styles.textName}
                  placeholder='Please your name product' />
            </View>
            <View style={styles.textInputContainer}>
               <Text style={styles.textTitle}>Price</Text>
               <TextInput style={styles.textName}
                  placeholder='Please your price' />
            </View>
            <View style={styles.textInputContainer}>
               <Text style={styles.textTitle}>Quantity</Text>
               <TextInput style={styles.textName}
                  placeholder='Please your quantity' />
            </View>
            <View style={styles.textInputContainer}>
               <Text style={styles.textTitle}>Category</Text>
               <SelectList
                  style={styles.selectList}
                  setSelected={setSelected}
                  data={data}
                  search={false}
                  boxStyles={{ borderRadius: 8, backgroundColor: '#FFFFFF', borderColor: '#FF0000' }} //override default styles
                  inputStyles={{ color: '#777777', fontFamily: 'kurale' }}
                  defaultOption={{ key: '1', value: 'Jammu & Kashmir' }}  //default selected option
               />
            </View>
            <View style={styles.textInputContainer}>
               <Text style={styles.textTitle}>Description</Text>
               <TextInput style={styles.textDescription}
                  numberOfLines={4}
                  multiline={true}
                  placeholder='Please your desc' />
            </View>
            <Pressable style={styles.login}>
               <Text style={styles.textSocial}>Create New</Text>
            </Pressable>
         </View>

      </ScrollView>
   )
}

export default AddProduct

const styles = StyleSheet.create({
   textAdd: {
      fontWeight: '400',
      fontSize: 16,
      color: color.seconds,
      fontFamily: 'kurale'
   },
   textSocial: {
      fontWeight: '400',
      fontSize: 20,
      lineHeight: 29.56,
      textAlign: 'center',
      color: color.while,
      fontFamily: 'kurale',
   },
   login: {
      width: '100%',
      height: 56,
      borderRadius: 15,
      backgroundColor: color.primary,
      alignContent: 'center',
      justifyContent: 'center',
      marginTop: 16,
      marginBottom: 50
   },
   textDescription: {
      width: '100%',
      height: 64,
      borderRadius: 8,
      borderColor: color.primary,
      borderWidth: 1,
      marginTop: 8,
      paddingLeft: 16,
      fontFamily: 'kurale',
      color: color.black
   },
   textName: {
      width: '100%',
      height: 48,
      borderRadius: 8,
      borderColor: color.primary,
      borderWidth: 1,
      marginTop: 8,
      paddingLeft: 16,
      fontFamily: 'kurale',
      color: color.black
   },
   textTitle: {
      fontWeight: '400',
      fontSize: 16,
      fontFamily: 'kurale',
      color: color.text
   },
   textInputContainer: {
      marginBottom: 8
   },
   formEdit: {
      marginTop: 16,
      width: '100%',
   },
   cameraDetail: {
      width: 40,
      height: 40,
      borderRadius: 8,
      elevation: 4,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color.while,
      position: 'absolute',
      top: 240,
      right: 30,
   },
   imgProduct: {
      width: '100%',
      height: '100%',
      borderRadius: 15,
      position: 'relative',

   },
   textThemMoi: {
      paddingLeft: 80,
      fontFamily: 'kurale',
      fontSize: 20,
      color: color.primary,
      fontWeight: '600'
   },
   imgDetail: {
      width: '100%',
      height: 200,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: color.text,
      alignItems: 'center',
      marginTop: 24,
      borderStyle: 'dashed',
      justifyContent: 'center'
   },
   header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 12
   },
   container: {
      flex: 1,
      padding: 24,
      backgroundColor: color.while
   }
})