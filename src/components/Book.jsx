import React from 'react';

const Book = ({document}) => {
  let {title, contents, thumbnail, authors, price, publisher, url} = document;
  //이미지가 없을 때
  thumbnail = thumbnail || 'http://placehold.it/160x100';
  return (
    <div className='bookBlock'>
      <div className='thumbnail'>
        <a href={url}>
          <img src={thumbnail} alt="thumbnail" />
        </a>
      </div>
      <div className='contents'>
        <a href={url}>
          <h1>{title}</h1>
          <p>{contents}</p>
          <p>
            <span>{authors} </span>
            <span>{publisher} </span>
            <span>{price} </span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Book;