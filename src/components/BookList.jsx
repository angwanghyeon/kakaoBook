import React, { useState } from 'react'
import Book from './Book'
import axios from 'axios'
import useSearch from './useSearch'

const BookList = ({ category }) => {

  const [size, setSize] = useState(10);
  const [loading, response, error] = useSearch(() => {
    const url = 'https://dapi.kakao.com/v3/search/book?target=title';
    const sendQuery = '&query=' + category;
    const sendSize = '&size=' + size;
    // const cate = category === 'all' ? '' : '&category=' + category;
    const key = { headers: 'Authorization: KakaoAK 9360a628703fcb5124e5b4de4974792b' };
    console.log(url + sendQuery + sendSize)
    return axios.get(url + sendQuery + sendSize, key)
  }, [category]);
  // console.log(response)
  if (loading === true) {
    return <div>로딩중</div>
  }

  if (!response) {
    return null;
  }

  if(error){
    return <div className='newsListBlock'>에러!</div>
  }

  // if(error){
  //   console.log('error: ', error);
  //   return <div className='newsListBlock'>에러!</div>
  // }
  const { documents } = response.data;
  console.log('documents: ', documents);

return (
  <div className='newsListBlock'>
    {documents.map(document => (
      <Book key={document.title} document={document}></Book>
    ))}
  </div>
)
}

export default BookList