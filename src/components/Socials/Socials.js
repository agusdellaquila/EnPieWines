import '../Socials/Socials.css'

const Socials = () => {
    return (
        <div>
            <ul className="centered socialsList">
                <li className='noBullet'>
                    <a href = "https://www.facebook.com/EnPieWines/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/glyph-neue/64/ffffff/facebook.png" alt='facebook icon'/></a>
                </li>
                <li className='noBullet'>
                    <a href = "https://www.instagram.com/en_pie_wines/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/glyph-neue/64/ffffff/instagram-new.png" alt='instagram icon'/></a>
                </li>
            </ul>
        </div>
    )
}

export default Socials