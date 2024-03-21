
import React from 'react';
import './card.css';
import BotonGithub from '../boton github/BotonGithub';
import BotonLinkedin from '../botonLinkedin/BotonLinkedin';

const Card = ({ data }) => {
    console.log(data)
    const { nombre, apellido, descripcion, photosPerfil } = data;
    console.log(data?.nombre);
    // Verifica si data.img y data.titulo existen antes de mostrarlos
    const showImage =  data.img ? <img className='imgPerfil' src={data?.img} alt="imagen de Emiliano"></img> : null;
    const showTitulo = data.nombre ? <span className="small-text">{data.nombre}</span> : null;
    const showTitulo2 = data.apellido ? <span className="small-text">{data.apellido}</span> : null;
    const showTitulo3 = data.descripcion ? <span >{data.descripcion}</span> : null;
    const showTitulo4 = data.perfil ? <span className="perfil">{data.perfil}</span> : null;
    const showTitulo6 = data.email ? <span className="small-text">{data.email}</span> : null;
    // const showImgTecnologias = data.imgTecnologias ? <img className='imgTecnologias' src={data?.imgTecnologias} alt="imagen de tecnologias" /> : null;
    // eslint-disable-next-line react/prop-types
    // const showTitulo3 = descripcion ? <span className="title">{descripcion}</span> : null;
    const showImgTecnologias = data?.imgTecnologias ? (
        data.imgTecnologias.map((url, index) => (
            <img key={index} className='imgTecnologias' src={url} alt={`imagen de tecnología ${index}`} />
        ))
    ) : null;
    const showTituloImgTecnologias = data?.imgTecnologias ? <span >{data.titulo}</span> : null;
    const renderGitHub = data.nombre ? (
        <BotonGithub />) : null;
    const renderLinkedinButton = data.linkedin ? (
        <BotonLinkedin />) : null;
    const parrafo1 = data.nombre ? (
        // <p>Passionate to pursue the technology.</p>
        <p>{data.textoDescripcionTitulo}</p>
    ) : null;
    const parrafo2 = data.nombre ? (
        // <p>I enjoy learning new things and try to overcome new
        //     challenges while analyzing how I improved through them.</p>
        <p >{data.textoDescripcion}</p>
    ) : null;
    const titutoDescripcion = data.descripcion ? (
        <p>{data.tituloDescripcion}</p>
    ) : null;
    const imgEvent = data.imgevent ? <img className='imgEvent' src={data?.imgevent} alt="" />:null;
    


    return (
        <div className="card">
            <div className='contenedorHederCar1'>
                <div className='contenedorNombreApellido'>
                    <div className='nombre'>
                        {showTitulo}
                    </div>
                    <div className='apellido'>
                        {showTitulo2}
                    </div>
                </div>
                <div className='contenedorSocial'>
                    <div className='botonGithub'>
                        {renderGitHub}
                    </div>
                    <div className='botonLinkedin'>
                        {renderLinkedinButton}
                    </div>
                </div>
            </div>
            
            <div className='contenedorPerfil'>
                {showTitulo4}
            </div>
            {showImage && showImage}
            <div>
                <div className='parrafo1'>
                    {parrafo1}
                </div>
                <div className='parrafo2'>
                    {parrafo2}
                </div>

            <div className='contenedorCard3'>
                <div className='tituloDescripcion'>
                    {titutoDescripcion}
                </div>
                <div className='descipcionSobreMi'>
                    {showTitulo3}
                </div>
            </div>

            </div>
                <div className='contenedorcard4'>
                    <div className='tituloTecnologia'>
                        {showImgTecnologias && showTituloImgTecnologias}
                    </div>
                    <div className='contenedorImgTecnologias'>
                        {showImgTecnologias && showImgTecnologias}
                    </div>
            </div>

            <div className='contenedorCard5'>
                <div className='imgEvent'>
                    {imgEvent && imgEvent}
                </div>
            </div>

        </div>
    );
};

export default Card;
