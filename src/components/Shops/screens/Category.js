import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React, {useContext, useState, useEffect} from 'react'
import color from '../../../../assets/colors/color'
import { ShopContext } from '../utilities/ShopContext'


const Category = (props) => {
  const { navigation } = props;
  const {getAllCategory} = useContext(ShopContext)
  const [data, setData] = useState([])
  useEffect(() => {
    //tu dong chay khi component render
    //chay nhieu lan khi co su thay doi state cua component
    const getData = async () => {
        const result = await getAllCategory();
        setData(result);
    }
    getData();
    //return () => { }
}, []);
console.log("useffec", data);

  const renderListCate = (props) => {
    const {item } = props;
    const {name, description, _id} = item

    return (
      <Pressable style={styles.cardProduct}
      onPress={() => navigation.navigate("EditCategory", {id:_id})} >
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textDescription}>{description}</Text>
        <View style={styles.delete}>
          <Image
            style={styles.imgDelete}
            source={require('../../../../assets/images/delete.png')} />
        </View>
      </Pressable>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imgBack}
          source={require('../../../../assets/images/back.png')} />
        <Text style={styles.textProduct}>Category</Text>
        <Pressable onPress={() => navigation.navigate("AddCategory")}>
          <Image style={styles.imgAdd}
            source={require('../../../../assets/images/add.png')} />
        </Pressable>

      </View>
      <Text style={styles.textAll}>All Category</Text>
      <FlatList
        data={data}
        renderItem={renderListCate}
        keyExtractor={Math.random}
        showsVerticalScrollIndicator={false} />

    </View>
  )
}

export default Category

const styles = StyleSheet.create({
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
    color: color.text,
    marginLeft: 16,
    fontFamily: 'kurale'
  },
  textName: {
    fontWeight: '600',
    fontSize: 16,
    marginTop: 16,
    color: color.primary,
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
    height: 80,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: color.while,
    backgroundColor: color.while,
    marginBottom: 16
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
    backgroundColor: color.background
  }
})