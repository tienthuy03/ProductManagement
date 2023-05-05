import { StyleSheet, Text, View, Image, FlatList, Pressable, ToastAndroid } from 'react-native'
import React, { useContext, useState, useEffect, useCallback } from 'react'
import color from '../../../../assets/colors/color'
import { ShopContext } from '../utilities/ShopContext'

const Product = (props) => {
  const { navigation } = props;
  const { getAllProduct, DeleteProduct } = useContext(ShopContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    //tu dong chay khi component render
    //chay nhieu lan khi co su thay doi state cua component
    const getData = async () => {
      const result = await getAllProduct();
      // console.log("aaaa", result[0].image);
      setData(result);
    }
    getData();
    //return () => { }
  }, []);
  // console.log("useffec", data);

  const handleDelete = async (id) => {
    //console.log("id cua product dang can xoa: ", id);
    const result = await DeleteProduct(id);
    console.log("result xoa product ben app chinh", result);
    if (result) {
      ToastAndroid.show("delete product success", ToastAndroid.LONG);
    } else {
      ToastAndroid.show("delete product failed", ToastAndroid.LONG);

    }
  }

  const renderListProduct = (props) => {
    const { item } = props;
    const { _id, name, price, quantity, image, description, category } = item;
    return (
      <Pressable style={styles.cardProduct}
        onPress={() => navigation.navigate('EditProduct', { id: _id })}>
        <Image style={styles.imgProduct}
          source={{ uri: image.replace("localhost", "192.168.113.16") }} />
        <Pressable
          onPress={handleDelete}
          style={styles.delete}>
          <Image
            style={styles.imgDelete}
            source={require('../../../../assets/images/delete.png')} />
        </Pressable>
        <View style={styles.content}>
          <Text style={styles.textName}>{name}</Text>
          <Text style={styles.textDescription}>{category.name}</Text>
          <Text style={styles.textDescription}>{description}</Text>

          <View style={styles.cardPrice}>
            <View style={styles.price}>
              <Image style={styles.imgPrice}
                source={require('../../../../assets/images/price.png')} />
              <Text style={styles.textPrice}>{price}</Text>
            </View>

            <View style={styles.quantity}>
              <Image style={styles.imgQuantity}
                source={require('../../../../assets/images/quantity.png')} />
              <Text style={styles.textPrice}>{quantity}</Text>
            </View>
          </View>

        </View>
      </Pressable>
    )
  }
  //Reload lai danh sach
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    const result = await getNews();
    await getNews();
    setRefreshing(false);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imgBack}
          source={require('../../../../assets/images/back.png')} />
        <Text style={styles.textProduct}>Product</Text>
        <Pressable
          onPress={() => navigation.navigate("AddProduct")} >
          <Image style={styles.imgAdd}
            source={require('../../../../assets/images/add.png')} />
        </Pressable>

      </View>
      <Text style={styles.textAll}>All Product</Text>
      <FlatList
        data={data}
        renderItem={renderListProduct}
        keyExtractor={Math.random}
        onRefresh={onRefresh}
        refreshing={refreshing}
        showsVerticalScrollIndicator={false} />
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  content: {
    width: 200,
    height: 100,
    backgroundColor: color.colorView,
    borderRadius: 15,
    marginTop: 60,
    marginLeft: 16
  },
  quantity: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textPrice: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'kurale',
    color: color.primary,
    marginLeft: 8
  },
  textCategory: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'kurale',
    color: color.text
  },
  cardPrice: {
    width: 200,
    height: 48,
    backgroundColor: color.while,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.while,
    justifyContent: 'space-around',
    flexDirection: 'row',
    elevation: 5,
    marginTop: 24,
    padding: 8,
    left: 16
  },
  delete: {
    width: 40,
    height: 40,
    backgroundColor: color.while,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.while,
    position: 'absolute',
    top: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10
  },
  textDescription: {
    fontWeight: '400',
    fontSize: 16,
    color: color.black,
    marginLeft: 16,
    fontFamily: 'kurale'
  },
  textName: {
    fontWeight: '600',
    fontSize: 16,
    marginTop: 10,
    color: color.black,
    marginLeft: 16,
    fontFamily: 'kurale'
  },
  imgProduct: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    position: 'absolute'
  },
  cardProduct: {
    marginTop: 16,
    width: '100%',
    height: 180,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: color.while,
    elevation: 8,
    backgroundColor: color.while,
    marginBottom: 32
  },
  textAll: {
    marginTop: 16,
    fontSize: 16,
    color: color.seconds,
    fontFamily: 'kurale'
  },
  textProduct: {
    fontWeight: '500',
    fontSize: 24,
    fontFamily: 'kurale',
    color: color.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    justifyContent: 'space-between',
  },
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: color.while
  }
})