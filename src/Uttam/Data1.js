'use client'
import React, { useEffect, useState } from 'react'
import api from '@/Api/axios'
const Data1 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const result = await api.get('/website/journey-to-niet')
            console.log('result', result)
            setData(result.data);
        }
        getData();
    }, [])

    return (
        <>
            <h1> hello my name is sohan achhami. </h1>
        </>
    )
}

export default Data1