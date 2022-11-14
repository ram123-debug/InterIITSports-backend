import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NewsCardSnippet from './HomeNews/NewsCardSnippet';
import NewsCard from './HomeNews/NewsCard';


const HomeNews = () => {
    return (
        <>
            <div className='conatiner-fluid'>
                <div className='d-flex justify-content-between align-items-center'>
                        <p className='fs-2'>Latest News</p>
                        <div className='center-inside'>
                            <p className='fs-6 ms-auto '>View All News <span style={{ color: "#22F9B8" }}><ArrowForwardIosIcon/></span></p>
                        </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-lg-6 mt-2 mt-lg-0'>
                        <NewsCard />
                    </div>
                    <div className='col-12 col-lg-6 mt-2 mt-lg-0'>
                        <NewsCard />
                    </div>

                    <div className='col-12 col-lg-6 mt-2 mt-lg-0'>
                        <NewsCardSnippet />
                    </div>
                    <div className='col-12 col-lg-6 mt-2 mt-lg-0'>
                        <NewsCardSnippet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeNews