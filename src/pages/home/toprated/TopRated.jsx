import React, { useState } from 'react'
import ContentWrapper from './../../../components/contentWrapper/ContentWrapper';
import SwitchTab from './../../../components/switchTab/SwitchTab';
import useFetch from '../../../hooks/useFetch';
import Carousel from './../../../components/carousel/Carousel';

const Toprated = () => {
    const [endpoint, setendpoint] = useState('movie')
    const {data , loading} = useFetch(`/${endpoint}/top_rated`)

    const onTabChange=(tab)=>{
        setendpoint(tab === 'Movie' ? 'movie' : 'tv')
    }
    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">
                    Top Rated
                </span>
                <SwitchTab data={['Movie' , 'TV Show']} onTabChange={onTabChange}/>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
        
        </div>
    )
}

export default Toprated
