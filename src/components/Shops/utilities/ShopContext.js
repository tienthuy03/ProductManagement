import { View, Text } from 'react-native'
import React, { useState, createContext } from 'react'
import AxiosInstance from '../../../axiosClient/AxiosInstance'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ShopContext = createContext();

export const ShopProvider = (props) => {
  const { children } = props;
  const [product, setProduct] = useState([])
  const updateProduct = async (id, name, price, quantity, image, description, category) => {
    const form = new FormData()
    form.append('name', name)
    form.append('price', price)
    form.append('quantity', quantity)
    form.append('image', image)
    form.append('category', category)
    form.append('description', description)
    try {
      const res = await AxiosInstance('multipart/form-data').post(`/product/update/${id}`, form);
      console.log('update retrive', res.data);
      return res.data
    } catch (error) {
      console.log('updateProduct Error: ', error);
    }
  }
  const getAllProduct = async () => {
    try {
      const res = await AxiosInstance().get('/product/get-all')
      // console.log("all product:", res.data.products);
      return res.data.products
    } catch (error) {
      console.log(error);
    }
    return [];
  }
  const getDetail = async (id) => {
    try {
      const res = await AxiosInstance().get(`/product/get-by-id/${id}`);
      // console.log("product bt id:", res.data.product);
      return res.data.product
    } catch (error) {
      console.log(error);

    }
    return null;
  }

  const getAllCategory = async () => {
    try {
      const res = await AxiosInstance().get('/category/get-all')
      // console.log("all category:", res.data.categories);
      return res.data.categories
    } catch (error) {
      console.log(error);
    }
    return [];
  }
  const getDetailCate = async (id) => {
    try {
      const res = await AxiosInstance().get(`/category/get-by-id/${id}`);
      // console.log("cate bt id:", res.data);
      return res.data.category
    } catch (error) {
      console.log(error);

    }
    return null;
  }
  const DeleteProduct = async (id) => {
    try {
      const res = await AxiosInstance().post(`/product/delete/${id}`)
      console.log("id product dang can xoa:", res);
      // Cập nhật danh sách sản phẩm sau khi sản phẩm bị xoá
      setProduct(product.filter(product => product.id !== id));
    } catch (error) {
      console.error(error);
    }
    return null;
  };

  return (
    <ShopContext.Provider value={{ getAllProduct, getDetail, getAllCategory, getDetailCate, updateProduct, DeleteProduct }}>
      {children}
    </ShopContext.Provider>
  )
}
