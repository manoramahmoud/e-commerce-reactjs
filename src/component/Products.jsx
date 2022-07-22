import React from'react';
import { ApiTopPropduct } from './../componentApi/TopProductApi';
import Product from './product';

function Products (){
    return(
        <div className ="flex  flex-wrap p-5 items-center justify-center">
       {ApiTopPropduct.map((product, index)=>{
          return(
              <Product item={product} key ={index}/>
          )
       })}
        </div>
    )
}
export default Products