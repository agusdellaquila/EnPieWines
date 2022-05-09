import '../Carrousel/Carrousel.css'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom'

const Carrousel = () => {
    return (
        <div className='centered mt5'>
            <Splide className='carrousel'
            options={ {
            type: 'slide',
            speed: 100,
            rewindSpeed: 300,
            autoplay: true,
            rewind: true,
            }}
            >
                <SplideSlide className='centered'>
                    <Link to="/item/champagne"><img src='../images/banners/bannerChampagne.png' alt='banner champagne'/></Link>
                </SplideSlide>
                <SplideSlide className='centered'>
                    <Link to="/item/whisky"><img src='../images/banners/bannerOfertas.png' alt='banner ofertas'/></Link>
                </SplideSlide>
                <SplideSlide className='centered'>
                    <Link to="/item/vino"><img src='../images/banners/bannerVinos.png' alt='banner vino'/></Link>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Carrousel