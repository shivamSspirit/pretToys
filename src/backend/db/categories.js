import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "creativity",
    description:
      "creative nature of handcrafting art",
      imgthumbnail:'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659428290/ecom/soraya-irving-AGtksbL8z2c-unsplash_mmbqdu.jpg'
  },
  {
    _id: uuid(),
    categoryName: "premium",
    description:
      "premium toys for multipersonality",
      imgthumbnail:"https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659439900/ecom/photo-1652697229110-c30dd3db00f2_wpf7g5.jpg"
  },
  {
    _id: uuid(),
    categoryName: "expensive",
    description:
      "expensive in playing feelings",
      imgthumbnail:"https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659439958/ecom/photo-1656400313954-5ef487b54394_hupusd.jpg"
  },
  {
    _id: uuid(),
    categoryName: "trucktoys",
    description:
      "nice truck toys for babies",
      imgthumbnail:'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659294455/ecom/photo-1658490268010-8338dc97a721_tygiqz.jpg'
  },
];
