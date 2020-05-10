import React, { useEffect, useState } from 'react'
import { Page } from './style';
import axios from 'axios'; 

import { Link } from 'react-router-dom';
import { FiArrowLeft, FiRotateCw } from 'react-icons/fi';

import Loading from '../../components/Loading';

const Sad = () => {
    const [ gif, setGif ] = useState({});
    const [ isLoading, setIsLoading ] = useState(false); 

    const getGif = async () => {
      setIsLoading(true);
      const apiGif = await axios.get('https://api.thecatapi.com/v1/images/search?mime_types=gif&limit=1', {
        headers: {
          "x-api-key": "fcd5529f-ca67-4364-ace4-2bc1e2d3a357",
        }
      })
      
      setGif(apiGif.data[0]);
  }

  useEffect(_ => {getGif()}, []);


    return (
        <Page showImage={!isLoading}>
          <h3>Tá aqui um GIF para te animar:</h3>
          <Loading show={isLoading}/> 
          <img onLoad={() => setIsLoading(false)} src={gif.url} alt=""/>

          <div className="menu">
            <button className="reload-link" onClick={getGif}>
              <FiRotateCw size={30} color="#808080" />
            </ button>

            <Link className="back-link" to="/">
              <FiArrowLeft size={30} color="#808080" />
            </ Link>
          </div>
          
        </Page>
    )
}

export default Sad;