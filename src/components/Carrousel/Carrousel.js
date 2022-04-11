import '../Home/Home.css'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

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
                    <img src='../images/banners/bannerChampagne.png'/>
                </SplideSlide>
                <SplideSlide className='centered'>
                    <img src='../images/banners/bannerOfertas.png'/>
                </SplideSlide>
                <SplideSlide className='centered'>
                    <img src='../images/banners/bannerVinos.png'/>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Carrousel