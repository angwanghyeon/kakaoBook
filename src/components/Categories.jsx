import React from 'react';
import { NavLink } from 'react-router-dom';

const categories = [
  {id:1, title:'자바'},
  {id:2, title:'HTML'},
  {id:3, title:'JavaScript'},
  {id:4, title:'JSP'},
  {id:5, title:'React'},
  {id:6, title:'Spring'},
  {id:7, title:'Database'},
]

const Categories = ({category}) => {
  return (
    <div className='categoriesBlock'>
      {categories.map(c => (
        <div key={c.id} className='category'>
          <NavLink to={c.title === '자바' ? '/' : '/'+c.title}>{c.title}</NavLink>
        </div>
      ))}
    </div>
  );
};

export default Categories;