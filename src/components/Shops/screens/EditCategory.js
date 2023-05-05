import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import color from '../../../../assets/colors/color'
import { ShopContext } from '../utilities/ShopContext'

const EditCategory = (props) => {
 const { navigation, route } = props;
 const {getDetailCate} = useContext(ShopContext)
 const { id } = route?.params;
 const [data, setData] = useState("")

 useEffect(() => {
   const getData = async () => {
     const result = await getDetailCate(id);
     // const getAllCate = await getAllCategory();
     // setDataCate(getAllCate);
     setData(result)
     console.log("result effex", result);
   }
   //if (id) 
   if (id) getData();
   return () => { };

 }, [id])
 console.log(data, 'data_detail');

 
   return (
      <ScrollView style={styles.container}
         showsVerticalScrollIndicator={false}>
         <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()}>
               <Image style={styles.imgBack}
               source={require('../../../../assets/images/back.png')} />
            </Pressable>
               <Text style={styles.textEdit}>Edit Category</Text>
         </View>
         <View style={styles.formEdit}>
            <View style={styles.textInputContainer}>
               <Text style={styles.textTitle}>Category name</Text>
               <TextInput style={styles.textName}
                  placeholder='Please your name category'
                  value={data.name}/>
            </View>

            <View style={styles.textInputContainer}>
               <Text style={styles.textTitle}>Description</Text>
               <TextInput style={styles.textDescription}
                  numberOfLines={4}
                  multiline={true}
                  placeholder='Please your desc'
                  value={data.description}/>
            </View>
            <Pressable style={styles.login}>
               <Text style={styles.textSocial}>Update</Text>
            </Pressable>
         </View>

      </ScrollView>
     
   )
}

export default EditCategory

const styles = StyleSheet.create({
   textEdit:{
      fontSize: 20,
      fontWeight: '500',
      fontFamily: 'kurale',
      color: color.primary, 
      paddingLeft: 120
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
      marginTop: 24
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
      marginTop: 56,
      width: '100%',
   },
   header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 24
   },
   container: {
      flex: 1,
      padding: 24,
      backgroundColor: color.while
   }
})