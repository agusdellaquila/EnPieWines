import '../Home/Home.css'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom'

const Carrousel = () => {
    return (
        <div className='centered mt5'>
            <Splide className='carrousel'
            options={ {
            rewind: true,
            autoScroll: true,
            }}
            >
                <SplideSlide className='centered'>
                    <Link to="/item/champagne"><img src='../images/banners/bannerChampagne.png'/></Link>
                </SplideSlide>
                <SplideSlide className='centered'>
                    <Link to="/item/whisky"><img src='../images/banners/bannerOfertas.png'/></Link>
                </SplideSlide>
                <SplideSlide className='centered'>
                    <Link to="/item/vino"><img src='../images/banners/bannerVinos.png'/></Link>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Carrousel