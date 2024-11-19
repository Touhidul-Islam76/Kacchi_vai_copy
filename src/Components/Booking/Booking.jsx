import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Booking = () => {
    const {id} = useParams();

    const [detail, setDetail ] = useState([]);
    useEffect(() => {
      axios.get('/detail.json')
      // .then(res => console.log(res.data))
      .then(res => {
        const branchData = res.data.find(branch => branch.id === parseInt(id));
        setDetail(branchData)
    })
      .catch(err => console.log(err))
  }, [id])

  const {title,address,photo} = detail || {};
  return (
    <div>
     
    </div>
  )
}

export default Booking
