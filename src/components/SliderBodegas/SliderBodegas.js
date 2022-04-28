import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '../SliderBodegas/SliderBodegas.css'


const SliderBodegas = () => {
    return (
        <div className='mt5 centered'>
            <Splide className='carrousel'
            options={ {
            type: 'loop',
            perPage : 4,
            drag: 'free',
            focus  : 'center',
            autoplay: true,
            speed: 30,
            }}
            >
                <SplideSlide className='centered'>
                    <img className='imgSliderBodega' src={"https://d2r9epyceweg5n.cloudfront.net/stores/414/437/products/nicasiavineyards-logosolo1-214d56283ca0567c6215124528680259-1024-1024.jpg"} alt={"bodega nicasia"}/>
                </SplideSlide>

                <SplideSlide className='centered'>
                    <img className='imgSliderBodega' src={"https://pbs.twimg.com/profile_images/893205450526674944/_f5ehQzT_400x400.jpg"} alt={"bodega huarpe"}/>
                </SplideSlide>

                <SplideSlide className='centered'>
                    <img className='imgSliderBodega' src={"https://1000marcas.net/wp-content/uploads/2020/03/logo-Johnnie-Walker.png"} alt={"bodega johnnie walker"}/>
                </SplideSlide>

                <SplideSlide className='centered'>
                    <img className='imgSliderBodega' src={"https://www.vinosdelaluz.com/shop/img/m/3.jpg"} alt={"bodega callejon del crimen"}/>
                </SplideSlide>

                <SplideSlide className='centered'>
                    <img className='imgSliderBodega' src={"https://iberpark.com/web/image/64349/yacochuya%20logo%20color.jpg"} alt={"bodega yacochuya"}/>
                </SplideSlide>

                <SplideSlide className='centered'>
                    <img className='imgSliderBodega' src={"https://http2.mlstatic.com/D_NQ_NP_699956-MLA45830332383_052021-O.jpg"} alt={"bodega veuve clicquot"}/>
                </SplideSlide>

                <SplideSlide className='centered'>
                    <img className='imgSliderBodega' src={"https://pbs.twimg.com/profile_images/1404861310890823689/My3PnyY1_400x400.png"} alt={"bodega luigi bosca"}/>
                </SplideSlide>

                <SplideSlide className='centered'>
                    <img className='imgSliderBodega' src={"https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_520,h_420/https://api.winesofargentina.org/uploads/2020/02/IcW6cYPGNh_DVC_TTO_HISTORICO_REDBLEND_2018.jpeg"} alt={"bodega dv catena"}/>
                </SplideSlide>

                <SplideSlide className='centered'>
                    <img className='imgSliderBodega' src={"https://www.conaxesstrade.com/wp-content/uploads/2019/07/Amarula-Cream.jpg"} alt={"bodega amarola"}/>
                </SplideSlide>

                <SplideSlide className='centered'>
                    <img className='imgSliderBodega' src={"https://iconape.com/wp-content/files/ut/240078/png/240078.png"} alt={"bodega alama negra"}/>
                </SplideSlide>

                <SplideSlide className='centered'>
                    <img className='imgSliderBodega' src={"https://logos-world.net/wp-content/uploads/2020/12/Jameson-Emblem.jpg"} alt={"bodega jameson"}/>
                </SplideSlide>

                <SplideSlide className='centered'>
                    <img className='imgSliderBodega' src={"https://i.pinimg.com/736x/b1/1f/3c/b11f3c3d1b07e2b814b24e0f08b04ae9.jpg"} alt={"bodega chivas regal"}/>
                </SplideSlide>

                <SplideSlide className='centered'>
                    <img className='imgSliderBodega' src={"https://www.rigloswines.com/wp-content/uploads/2017/06/Marca-Riglos-ret-copy-dark.png"} alt={"bodega riglos"}/>
                </SplideSlide>

                <SplideSlide className='centered'>
                    <img className='imgSliderBodega' src={"https://www.closdelossiete.com/style/images/logo.png?v=0421"} alt={"bodega clos de los siete"}/>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default SliderBodegas