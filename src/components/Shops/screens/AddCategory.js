import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import color from '../../../../assets/colors/color'


const AddProduct = (props) => {
   const {navigation} = props;
   return (
      <ScrollView style={styles.container}
         showsVerticalScrollIndicator={false}>
         <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()}>
                <Image style={styles.imgBack}
               source={require('../../../../assets/images/back.png')} />
            </Pressable>
           
            <Text style={styles.textThemMoi}>Create New Category</Text>
         </View>
         <View style={styles.formEdit}>
            <View style={styles.textInputContainer}>
               <Text style={styles.textTitle}>Category name</Text>
               <TextInput style={styles.textName}
                  placeholder='Please your name' />
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
      marginTop: 48,
      width: '100%',
   },
   textThemMoi: {
      paddingLeft: 80,
      fontFamily: 'kurale',
      fontSize: 20,
      color: color.primary,
      fontWeight: '600'
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