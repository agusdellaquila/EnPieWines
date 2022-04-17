import '../Socials/Socials.css'

const Socials = () => {
    return (
        <div>
            <ul className="dFlex socialsList">
                <li className='noBullet'>
                    <a href = "https://www.facebook.com/EnPieWines/" target="_blank"><img src="https://img.icons8.com/ios-filled/50/fa314a/facebook--v1.png"/></a>
                </li>
                <li className='noBullet'>
                    <a href = "https://www.instagram.com/en_pie_wines/" target="_blank"><img src="https://img.icons8.com/ios-filled/50/fa314a/instagram-new--v1.png"/></a>
                </li>
            </ul>
        </div>
    )
}

export default Socials