import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import color from '../../../../assets/colors/color'
import { ShopContext } from '../utilities/ShopContext'
import { SelectList } from 'react-native-dropdown-select-list'

const EditProduct = (props) => {

  const [selectedItem, setSelectedItem] = useState(null);
  const { navigation, route } = props;
  const { id } = route?.params;
  const { getDetail, getAllCategory } = useContext(ShopContext)
  const [data, setData] = useState({})
  const [dataCate, setDataCate] = useState({})
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');



  useEffect(() => {
    const getData = async () => {
      const result = await getDetail(id);
      // const getAllCate = await getAllCategory();
      // setDataCate(getAllCate);
      setData(result)
      setName(result.name);
      setPrice(result.price);
      setQuantity(result.quantity);
      setImage(result.image);
      console.log("imagae", result.image);
      setDescription(result.description);
      setCategory(result.category.name)
      console.log("result effex", result);
      // EffectAllCate();
    }
    //if (id) 
    if (id) getData();
    return () => { };

  }, [id])
  // console.log(data, 'data_detail');

  //get all category
  const EffectAllCate = async () => {
    try {
      const result = await getAllCategory();
      setDataCate(result);
      console.log("result cate:", result);
    } catch (error) {
      console.log("get all cate error", error);
    }
  }
  const handleSelect = item => {
    setSelectedItem(item);
  };


  return (
    <ScrollView style={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image style={styles.imgBack}
            source={require('../../../../assets/images/back.png')} />
        </Pressable>
        <Text style={styles.textEdit}>Edit Product</Text>
      </View>
      <View style={styles.imgDetail}>
        <Image
          style={styles.imgProduct}
          source={{uri: image.replace("localhost", "192.168.113.16")}}
        />
      </View>
      <View style={styles.cameraDetail}>
        <Image style={styles.imgCamera}
          source={require('../../../../assets/images/camera.png')} />
      </View>

      <View style={styles.formEdit}>
        <View style={styles.textInputContainer}>
          <Text style={styles.textTitle}>Product name</Text>
          <TextInput style={styles.textName}
            placeholder='Please your name product'
            value={name} />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.textTitle}>Price</Text>
          <TextInput style={styles.textName}
            placeholder='Please your price'
            value={price.toString()} />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.textTitle}>Quantity</Text>
          <TextInput style={styles.textName}
            placeholder='Please your quantity'
            value={quantity.toString()} />
        </View>
        {/* <View style={styles.textInputContainer}>
          <Text style={styles.textTitle}>Category</Text>
          <TextInput style={styles.textName}
            placeholder='Please your category'
            value={category} />
        </View> */}
        {/* <View style={styles.textInputContainer}>
          <Text style={styles.textTitle}>Category</Text>
          <SelectList
            style={styles.selectList}
            setSelected={setSelectedItem}
            onChan
            data={dataCate}
            search={false}
            boxStyles={{ borderRadius: 8, backgroundColor: '#FFFFFF', borderColor: '#FF0000' }} //override default styles
            inputStyles={{ color: '#777777', fontFamily: 'kurale' }}
            defaultOption={{ key: '1', value: 'Jammu & Kashmir' }}  //default selected option
          />
        </View> */}
        <View style={styles.textInputContainer}>
          <Text style={styles.textTitle}>Description</Text>
          <TextInput style={styles.textDescription}
            numberOfLines={4}
            multiline={true}
            placeholder='Please your desc'
            value={description} />
        </View>
        <Pressable style={styles.login}>
          <Text style={styles.textSocial}>Update</Text>
        </Pressable>
      </View>

    </ScrollView>
  )
}

export default EditProduct

const styles = StyleSheet.create({
  textEdit: {
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
    marginTop: 12,
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
    position: 'relative'
  },
  imgDetail: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: color.while,
    alignItems: 'center',
    marginTop: 24,
    elevation: 5,

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