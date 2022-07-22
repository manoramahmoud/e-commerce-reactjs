import {React, useState} from 'react';
import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
  SearchOutlined,
} from '@material-ui/icons';

function Product({ item }) {
    const[hoverEffect, setHoverEffect] = useState("opacity-0");
    const style ='h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-[#894af3] hover:text-white hover: scale[1.1] ease-in duration-100 cursor-pointer';
    const handleHoverEnter= ()=>{
        setHoverEffect(' opacity-1 bg-[rgba(0,0,0,0.2)]')
    }
    const handleHoverLeaved=()=>{
        setHoverEffect(' opacity-0')
    }
  return (
    <div className ='flex flex-1 justify-center items-center overflow-hidden min-w-[250px] min-h[300px] rounded-md shadow-lg m-2 relative'
    onMouseEnter={handleHoverEnter} onMouseLeave ={handleHoverLeaved} >
      <img src={item.src} alt="product_img" />
      <div className = {`flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100 `+ hoverEffect}>
        {/* icons*/}
        <div className ={style}>
          <ShoppingCartOutlined />
        </div>
        <div className={style}>
          <FavoriteBorderOutlined />
        </div>
        <div className = {style}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
}
export default Product;
