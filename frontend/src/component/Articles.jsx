import React from 'react';
import { useEffect } from 'react';
import {Box} from '@mui/material';
import {getNews} from '../service/api';



export default function Articles() {
    useEffect(() =>{
        dailyNews();
    },[]);
    const dailyNews=async()=>{
        let response = await getNews();

    }
  return (
    <Box>
      hello
    </Box>
  )
}
