import React, { useState, useEffect } from 'react';
import Card from '../card/Card'
import cards from "../cards/cards.css";

const Cards = () => {
  const [apiData, setApiData] = useState([]);
  console.log(apiData)

  const card1 = {
    nombre: apiData[0]?.nombre,
    apellido: apiData[0]?.apellido,
    perfil: apiData[0]?.perfil,
    linkedin: apiData[0]?.linkedin,
    email: apiData[0]?.email,
    textoDescripcionTitulo:"Apasionado por seguir la tecnología.",
    textoDescripcion: "Disfruto aprendiendo cosas nuevas e intento superar nuevos desafíos,dando lo mejor de mi para lograr el mejor resultado posible."
  }
  const card2 = {
    img: apiData[0]?.photosPerfil[0]
  }
  const card3 = {
    titulo: "MY STACK",
    imgTecnologias: apiData[0]?.imgTecnologias
  }
  const card4 = {
    tituloDescripcion: "SOBRE MI",
    descripcion: apiData[0]?.descripcion
  }
  
    const card5 = {
    imgevent: apiData[0]?.photosTrabajos[0]
  }

  const card6 = {
    img: apiData[0]?.photosPerfil[0]
  }

  console.log("imagen tecnologias", card4)
  useEffect(() => {
    fetch('http://localhost:3002/api/portfolio')
      .then(response => response.json())
      .then(data => {
        setApiData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div className="video-background" playbackRate={0.1}>
        <video autoPlay loop muted>
        <source src="/199286.mp4" type="video/mp4" />
        </video>
      </div>


      <div className='contenedor'>
        <Card data={card1} />
        <Card data={card2} />
        <Card data={card3} />
        <Card data={card4} />
        <Card data={card5} />
        <Card data={card6} />
      </div>
    </>
  );
};

export default Cards;





