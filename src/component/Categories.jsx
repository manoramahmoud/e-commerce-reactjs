import { React } from 'react';
import { ApiCategories } from '../componentApi/CategoriesApi';
import Category from './Category';
const Categories = () => {
  return (
    <div className="flex justify-between items-center p-5 mobile:flex-col">
      {ApiCategories.map((catogry, index) => {
        return <Category item={catogry} key={index} />;
      })}
    </div>
  );
};
export default Categories;
