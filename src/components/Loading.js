import React, { useEffect } from 'react';
import Spinner from '../assets/img/loading_spinner.gif'

const Loading = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='loading'>
       <img src={Spinner} />
      </div>
    </div>
  );
}

export default Loading;
