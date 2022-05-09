import '../Contacto/Contacto.css'

const Contacto = () => {
    return (
        <div className='navbarGap altContainer centered dFlexCol'>
            <h2 className="centered">Contacto</h2>
            <div className="contactInfoContainer">
                <section className='contactInfoText altFont'>
                    <p className='fs6 fwBold underline'>Estamos en:</p>
                    <p>Belaustegui 3395</p>
                    <p className='fs6 fwBold underline'>Horario de Atención:</p>
                    <p>Lunes a Viernes: 11 a 20 hs</p>
                    <p>Sábados: 11 a 14 y 17 a 20 hs</p>
                </section>
                <section className='contactInfoMap'>
                    <iframe title='enpie maps' className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505.4366336756925!2d-58.48476164130301!3d-34.61982845037521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9fcb8b44dcd%3A0xf51fe3a0d1dbc500!2sEn%20Pie%20Wines%20%26%20Spirits!5e0!3m2!1ses!2sar!4v1651555264492!5m2!1ses!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </div>
        </div>
    )
}

export default Contacto