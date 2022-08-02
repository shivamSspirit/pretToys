import { v4 as uuid } from "uuid";

import Jaketimg from '../../assest/images/jpeg/leather.jpg'
import SliperImg from '../../assest/images/jpeg/slipers.avif'
import shoesImg from '../../assest/images/jpeg/adidasDon.webp'

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

// 4 categories
// creativity
// premium
// expensive
// trucktoys


export const products = [
  {
    _id: uuid(),
    title: "Artistic doll",
    price: "5000",
    categoryName: "creativity",
    btnTxt: "Addtocart",
    item: "lady doll",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659435859/ecom/photo-1658051493055-54eb82a4c8a4_nyxmjp.jpg',
    ratings: 4,
    isOutOfStock: false,
    totalRatings: 12,
    qty: 1,
    discount: "1200",
    discountinpersent:24,
    isTrending: true,
    priceCategory: "price5000To10000"
  },
  {
    _id: uuid(),
    title: "Dude in frame",
    price: "9000",
    categoryName: "creativity",
    btnTxt: "Addtocart",
    item: "dude teddy",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659435824/ecom/photo-1658674586785-458d66b775bd_rvitqj.jpg',
    ratings: 4,
    isOutOfStock: false,
    totalRatings: 12,
    qty: 1,
    discount: "2160",
    discountinpersent:24,
    isTrending: true,
    priceCategory: "price5000To10000"
  },
  {
    _id: uuid(),
    title: "goldy dude",
    price: "10000",
    categoryName: "creativity",
    btnTxt: "Addtocart",
    item: "dude in gold",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659435784/ecom/photo-1658999109686-c1d354090b6e_n6pxls.jpg',
    ratings: 4,
    isOutOfStock: false,
    totalRatings: 12,
    qty: 1,
    discount: "2400",
    discountinpersent:24,
    isTrending: false,
    priceCategory: "price5000To10000"
  },

  {
    _id: uuid(),
    title: "pods with throne",
    price: "8000",
    categoryName: "expensive",
    btnTxt: "Addtocart",
    item: "throne buds",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659435746/ecom/photo-1659113910983-f30d009889c6_fksch7.jpg',
    ratings: 4,
    isOutOfStock: false,
    totalRatings: 12,
    qty: 1,
    discount: "1920",
    discountinpersent:24,
    isTrending: true,
    priceCategory: "price5000To10000"
  },

  {
    _id: uuid(),
    title: "Artistic scary doll",
    price: "5000",
    categoryName: "creativity",
    btnTxt: "Addtocart",
    item: "scary doll",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659433100/ecom/photo-1659243485550-6be2ee0e4ebd_ae0wjb.jpg',
    ratings: 4,
    isOutOfStock: false,
    totalRatings: 12,
    qty: 1,
    discount: "1200",
    discountinpersent:24,
    isTrending: false,
    priceCategory: "price5000To10000"
  },

  {
    _id: uuid(),
    title: "Artistic chill dude",
    price: "5000",
    categoryName: "expensive",
    btnTxt: "Addtocart",
    item: "tamor doll",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659433072/ecom/photo-1658834045405-c5d8d03ec5fe_rpxm6e.jpg',
    ratings: 4,
    isOutOfStock: true,
    totalRatings: 12,
    qty: 1,
    discount: "1200",
    discountinpersent:24,
    isTrending: false,
    priceCategory: "price5000To10000"
  },
  {
    _id: uuid(),
    title: "legendray ladaka",
    price: "8000",
    categoryName: "premium",
    btnTxt: "Addtocart",
    item: "ladaka of yaman",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659433047/ecom/photo-1658270600988-7e6a66ed253e_jhbyp3.jpg',
    ratings: 4,
    isOutOfStock: false,
    totalRatings: 12,
    qty: 1,
    discount: "1920",
    discountinpersent:24,
    isTrending: true,
    priceCategory: "price5000To10000"
  },
  {
    _id: uuid(),
    title: "dude groot",
    price: "5000",
    categoryName: "premium",
    btnTxt: "Addtocart",
    item: "good groot",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659428176/ecom/antonio-uquiche-1cvhg2FyDvU-unsplash_ma6r7i.jpg',
    ratings: 4,
    isOutOfStock: false,
    totalRatings: 12,
    qty: 1,
    discount: "1200",
    discountinpersent:24,
    isTrending: true,
    priceCategory: "price5000To10000"
  },
  {
    _id: uuid(),
    title: "Artistic toys",
    price: "5000",
    categoryName: "premium",
    btnTxt: "Addtocart",
    item: "avatars",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659432727/ecom/ryan-quintal-fDd0HNcTEMk-unsplash_zigsie.jpg',
    ratings: 4,
    isOutOfStock: false,
    totalRatings: 12,
    qty: 1,
    discount: "1200",
    discountinpersent:24,
    isTrending: true,
    priceCategory: "price5000To10000"
  },

  {
    _id: uuid(),
    title: "load truck",
    price: "8000",
    categoryName: "trucktoys",
    btnTxt: "Addtocart",
    item: "truck toys",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659432965/ecom/photo-1658490261482-185ef4add566_euptdr.jpg',
    ratings: 4,
    isOutOfStock: true,
    totalRatings: 12,
    qty: 1,
    discount: "1920",
    discountinpersent:24,
    isTrending: false,
    priceCategory: "price5000To10000"
  },

  {
    _id: uuid(),
    title: "unloader truck",
    price: "10000",
    categoryName: "trucktoys",
    btnTxt: "Addtocart",
    item: "truck toys",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659428157/ecom/andrew-reshetov-XzEqlPQsLdI-unsplash_bm36ui.jpg',
    ratings: 4,
    isOutOfStock: true,
    totalRatings: 12,
    qty: 1,
    discount: "2400",
    discountinpersent:24,
    isTrending: false,
    priceCategory: "price5000To10000"
  },

  {
    _id: uuid(),
    title: "money buldozer",
    price: "5000",
    categoryName: "trucktoys",
    btnTxt: "Addtocart",
    item: "truck toys",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659294455/ecom/photo-1658490268010-8338dc97a721_tygiqz.jpg',
    ratings: 4,
    isOutOfStock: true,
    totalRatings: 12,
    qty: 1,
    discount: "1200",
    discountinpersent:24,
    isTrending: false,
    priceCategory: "price5000To10000"
  },

  {
    _id: uuid(),
    title: "yeelow buldozer",
    price: "5000",
    categoryName: "trucktoys",
    btnTxt: "Addtocart",
    item: "truck toys",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659428229/ecom/joshua-olsen-R63hi09tk-0-unsplash_1_kvq0cu.jpg',
    ratings: 4,
    isOutOfStock: true,
    totalRatings: 12,
    qty: 1,
    discount: "1200",
    discountinpersent:24,
    isTrending: false,
    priceCategory: "price5000To10000"
  },


  {
    _id: uuid(),
    title: "brown budde",
    price: "8000",
    categoryName: "expensive",
    btnTxt: "Addtocart",
    item: "teddy toys",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659432863/ecom/photo-1649595313657-731213e96d10_otfkr4.jpg',
    ratings: 4,
    isOutOfStock: false,
    totalRatings: 12,
    qty: 1,
    discount: "2400",
    discountinpersent:24,
    isTrending: true,
    priceCategory: "price5000To10000"
  },


  {
    _id: uuid(),
    title: "doggy teddy",
    price: "10000",
    categoryName: "expensive",
    btnTxt: "Addtocart",
    item: "teddy toys",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659432795/ecom/photo-1656100038070-7dadb5513cab_uwmroe.jpg',
    ratings: 4,
    isOutOfStock: true,
    totalRatings: 12,
    qty: 1,
    discount: "2400",
    discountinpersent:24,
    isTrending: false,
    priceCategory: "price5000To10000"
  },

  {
    _id: uuid(),
    title: "nice teddy",
    price: "8000",
    categoryName: "expensive",
    btnTxt: "Addtocart",
    item: "teddy toys",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659432836/ecom/photo-1653373112362-5dd312599a31_ylzocs.jpg',
    ratings: 4,
    isOutOfStock: false,
    totalRatings: 12,
    qty: 1,
    discount: "1920",
    discountinpersent:24,
    isTrending: true,
    priceCategory: "price5000To10000"
  },


  {
    _id: uuid(),
    title: "turtle teddy",
    price: "5000",
    categoryName: "premium",
    btnTxt: "Addtocart",
    item: "teddy toys",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659432759/ecom/mark-chan-dqZgh2v7sQY-unsplash_xnqgwk.jpg',
    ratings: 4,
    isOutOfStock: false,
    totalRatings: 12,
    qty: 1,
    discount: "1200",
    discountinpersent:24,
    isTrending: false,
    priceCategory: "price5000To10000"
  },


  {
    _id: uuid(),
    title: "great car",
    price: "10000",
    categoryName: "premium",
    btnTxt: "Addtocart",
    item: "truck toys",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659428263/ecom/super-snapper-sdTL4qTynfM-unsplash_uhjnur.jpg',
    ratings: 4,
    isOutOfStock: false,
    totalRatings: 12,
    qty: 1,
    discount: "2400",
    discountinpersent:24,
    isTrending: false,
    priceCategory: "price5000To10000"
  },


  {
    _id: uuid(),
    title: "the pink duck",
    price: "8000",
    categoryName: "expensive",
    btnTxt: "Addtocart",
    item: "ducks toys",
    proImg: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659428247/ecom/vicko-mozara-m82uh_vamhg-unsplash_q4rts9.jpg',
    ratings: 4,
    isOutOfStock: false,
    totalRatings: 12,
    qty: 1,
    discount: "1920",
    discountinpersent:24,
    isTrending: false,
    priceCategory: "price5000To10000"
  },


];
