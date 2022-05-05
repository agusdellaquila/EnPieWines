import { Link } from 'react-router-dom'
import '../HomeBanners/HomeBanners.css'

const HomeBanners = () => {
    return (
        <div className="banners">
            <Link to="/item/champagne">
                <img src="images/banners/bannerChampagne.png" alt="PromoBanner_1"/>
            </Link>
            <Link to="/item/whisky">
                <img src="images/banners/bannerOfertas.png" alt="PromoBanner_2"/>
            </Link>
            <Link to="/item/vino">
                <img src="images/banners/bannerVinos.png" alt="PromoBanner_3"/>
            </Link>
        </div>
    )
}

export default HomeBanners