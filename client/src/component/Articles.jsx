import React from 'react';
import { useEffect,useState } from 'react';
import {Box} from '@mui/material';
import {getNews} from '../services/api.js';
import ArticleCards from './ArticleCards.jsx';



export default function Articles() {

  const [news, setNews] = useState([]);
    useEffect(() =>{
        dailyNews();
    },[]);
    const dailyNews=async()=>{
      let response = await getNews();
      setNews(response.data);
    //  console.log(response.data);
    }
  return (
    <Box>
    { news.map((ele)=>{
         return <ArticleCards data={ele}/>
     })}
    </Box>
  )
}
