import React from 'react'
import './About.css'
import image from '../../utils/FOTOPERFIL3.jpg'


const About = () => {
    return (
        <div className='about-container'>
            <div className='about-desc'>
                <h3>¿ Quien Soy ? 🔍</h3>
                <p>
                    Programador Full-Stack Developer 💻 , con gran interés en el desarrollo web y ciencias de la computación.
                    Adquirí estas habilidades en un bootcamp de Soy Henry de más de 700 hrs. Aprendimos tecnologías como React, Redux, CSS, Node js, Express ,Sequelize y PostgreSQL.

                    Descubrí con la programación la oportunidad de ofrecer soluciones a través de la tecnología, donde aún tengo mucho que aprender y conocer pero estoy dispuesto a tomar este camino.
                    Las tecnologías que me interesan aprender en un futuro son: Python, Angular, GunJS y la programación de inteligencia artificial.
                </p>
            </div>
            <div className='about-img'>
                <img src={image} alt='profile-image'/>
            </div>
        </div>
    )
}

export default About