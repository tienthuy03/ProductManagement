import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import color from '../../../assets/colors/color'

const HomeIn = (props) => {
  const {navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.Image}>
        <Image style={styles.imgBrLeft}
          source={require('../../../assets/images/leftTop.png')} />
        <Image style={styles.imgBrRight}
          source={require('../../../assets/images/RightBottom.png')} />
      </View>

      <View style={styles.textHeader}>
        <Text style={styles.textWe}>Welco</Text>
        <Text style={styles.textMe}>me</Text>
      </View>

      <Pressable style={styles.bottom}
      onPress = {()=> navigation.navigate('Login')}>
        <View style={styles.text}>
          <Text style={styles.textSignUp}>Swip-up to start</Text>
        </View>
        <View style={styles.imgPlane}>
          <Image style={styles.icPlane}
            source={require('../../../assets/images/Plane.png')} />
        </View>

      </Pressable>

    </View>
  )
}

export default HomeIn;

const styles = StyleSheet.create({
  textSignUp: {
    width: 100,
    height: 18,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17.74,
    textAlign: 'center',
    color: color.black,
    left: 60,
    fontFamily: 'kurale',
  },
  imgPlane: {
    backgroundColor: color.primary,
    width: 105,
    height: 56,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    width: 320,
    height: 56,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: color.while,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    top: 280,
    left: 20,
    elevation: 10
  },
  textMe: {
    fontFamily: 'Kurale',
    fontWeight: '400',
    fontSize: 48,
    lineHeight: 70.94,
    textAlign: 'center',
    color: color.seconds
  },
  textWe: {
    fontFamily: 'Kurale',
    fontWeight: '400',
    fontSize: 48,
    lineHeight: 70.94,
    textAlign: 'center',
    color: color.primary
  },
  textHeader: {
    width: 280,
    height: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    left: 40,
    top: 30,
    fontFamily: 'kurale',
  },

  imgBrRight: {
    left: 190,
  },
  Image: {
    position: 'absolute',
  },
  container: {
    flex: 1,
    backgroundColor: color.while,
    justifyContent: 'center',
    padding: 24
  },
})