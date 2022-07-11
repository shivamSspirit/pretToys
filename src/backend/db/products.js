import { v4 as uuid } from "uuid";

import Jaketimg from '../../assest/images/jpeg/leather.jpg'
import SliperImg from '../../assest/images/jpeg/slipers.avif'
import shoesImg from '../../assest/images/jpeg/adidasDon.webp'

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

//  {
//   _id: "449a8cbb-f45b-4b84-8f62-15af8bb26ef2",
//   title: "Red Velvet Tall Cake",
//   imageUrl:
//     "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647014954/ecommerce/redvelvetcake3.webp",
//   rating: "4",
//   totalRatings: 12,
//   price: "600",
//   categoryName: "Red Velvet",
//   isOutOfStock: false,
//   offerPercentage: 0,
//   item: "Cake",
//   weight: "1 kg",
//   isBestSeller: false,
//   priceCategory: "price500To1000",
// },


export const products = [
  {
    _id: uuid(),
    title: "bikerjacket",
    price: "5000",
    categoryName: "shoes",
    btnTxt: "Addtocart",
    proImg: shoesImg,
    ratings: 2,
    qty: 1,
    discount: "1278"
  },
  {
    _id: uuid(),
    title: "bikershoes",
    price: "3000",
    categoryName: "shoes",
    btnTxt: "Addtocart",
    proImg: shoesImg,
    ratings: 4,
    qty: 1,
    discount: "1278"
  },
  {
    _id: uuid(),
    title: "bikershoes",
    price: "6000",
    categoryName: "shoes",
    btnTxt: "Addtocart",
    proImg: shoesImg,
    ratings: 5,
    qty: 1,
    discount: "1278"
  },

  {
    _id: uuid(),
    title: "bikerjacket",
    price: "9000",
    categoryName: "sliperss",
    btnTxt: "Addtocart",
    proImg: SliperImg,
    ratings: 2,
    qty: 1,
    discount: "1278"
  },

  {
    _id: uuid(),
    title: "bikersliperss",
    price: "7000",
    categoryName: "sliperss",
    btnTxt: "Addtocart",
    proImg: SliperImg,
    ratings: 1,
    qty: 1,
    discount: "1278"
  },

  {
    _id: uuid(),
    title: "bikerjaket",
    price: "1000",
    categoryName: "jaket",
    btnTxt: "Addtocart",
    proImg: Jaketimg,
    ratings: 2,
    qty: 1,
    discount: "1278"
  },
  {
    _id: uuid(),
    title: "bikerjaket",
    price: "1000",
    categoryName: "jaket",
    btnTxt: "Addtocart",
    proImg: Jaketimg,
    ratings: 2,
    qty: 1,
    discount: "1278"
  },
  {
    _id: uuid(),
    title: "bikerjaket",
    price: "1000",
    categoryName: "jaket",
    btnTxt: "Addtocart",
    proImg: Jaketimg,
    ratings: 2,
    qty: 1,
    discount: "1278"
  },
  {
    _id: uuid(),
    title: "bikerjaket",
    price: "1000",
    categoryName: "jaket",
    btnTxt: "Addtocart",
    proImg: Jaketimg,
    ratings: 2,
    qty: 1,
    discount: "1278"
  },
];
