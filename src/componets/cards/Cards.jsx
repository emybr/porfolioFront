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
    textoDescripcion: "Disfruto aprendiendo cosas nuevas e intento superar nuevos desafíos,dando lo mejor de mi para lograr el mejor resultado posible.",
    url:"https://github.com/emybr"
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
    tituloEvent: "EVENTWAVE  ",
    textoEvent: "UN ENTORNO DONDE PODRAS ENTERARTE DE LOS PROXIMOS EVENTOS",
    imgevent: apiData[0]?.photosTrabajos[0],
    enlace: "https://s12-02-m-node-react-gestor-de-eventos.vercel.app",
    urlGit:"https://github.com/No-Country/s12-02-m-node-react?tab=readme-ov-file"
  }

  const card6 = {
    tituloEvent: "CLON AIRBNB",
    textoEvent: "UNA PLATAFORMA DIGITAL DEDICADA A LA OFERTA DE ALOJAMIENTOS",
    imgevent: apiData[0]?.photosTrabajos[4],
    enlace: "https://c14-02-m-node-react.vercel.app",
    urlGit:"https://github.com/No-Country/c14-02-m-node-react?tab=readme-ov-file"
  }

  const card7 = {
    tituloMemo: "APP MEMO",
    textoMemo: "MEMO EN UNA EGNEDA DIGITAL PARA PERSONAS CON ESPECTRO AUTISTA",
    imgMemo: "https://camo.githubusercontent.com/c7b0993acbf9c8c824313dd7a9f8658f7d1504ece71bd59d1390cff18f5c2af6/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f696d6167656e65732d6d656d6f2e61707073706f742e636f6d2f6f2f43617074757261253230646525323070616e74616c6c61253230323032342d30322d3133253230612532306c6128732925323032312e34362e33322e706e673f616c743d6d6564696126746f6b656e3d38663761366635362d633832382d343835642d393533632d323838386134336363363231",
    imgMemo2: apiData[0]?.photosTrabajos[5],
    imgMemo3: apiData[0]?.photosTrabajos[6],
    enlace: "https://github.com/belugallardo/MemoReactNative",
    urlGitMemo:"https://github.com/belugallardo/MemoReactNative"
  }

  const card8 = {
    tituloPython: "APP phython",
    textoPython: "APP DE GESTION DE TAREAS",
    imgPython: "https://firebasestorage.googleapis.com/v0/b/imagenes-memo.appspot.com/o/apppython.png?alt=media&token=33dd7193-8c4c-4a61-baef-888dfd3578ce",
    imgPython2:"https://firebasestorage.googleapis.com/v0/b/imagenes-memo.appspot.com/o/appphython2.png?alt=media&token=2ae5b8e2-b31d-4bea-9df4-5853071eb5a1",
    urlGitPython:"https://github.com/emybr/trabajoFinalPython.git",
    textoDescripcion: "Disfruto aprendiendo cosas nuevas e intento superar nuevos desafíos,dando lo mejor de mi para lograr el mejor resultado posible.",
  }

  console.log("imagen tecnologias", card4)
  useEffect(() => {
    fetch('https://back-web-nine.vercel.app/api/portfolio')
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
        <Card data={card7} />
        <Card data={card8} />
      </div>
    </>
  );
};

export default Cards;





