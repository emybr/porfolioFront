import React, { useState, useEffect } from 'react';
import Card from '../card/Card'
import cards from "../cards/cards.css";

// const Cards = () => {
//   const [apiData, setApiData] = useState([]);
//   console.log('api',apiData); 

//   useEffect(() => {
//     // Llamada a la API para obtener los datos
//     fetch('http://localhost:3002/api/portfolio')
//       .then(response => response.json())
//       .then(data => {
//         setApiData(data);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     return (
//       <>
//       <div className='contenedor'>
//         {/* Usar apiData en todos los componentes Card */}
//         <Card data={apiData} />
//         <Card data={apiData} />
//         <Card data={apiData} />
//         <Card data={apiData} />
//         <Card data={apiData} />
//       </div>
//     </>
//   );
// };

// export default Cards;

const Cards = () => {
  const [apiData, setApiData] = useState([]);
  console.log(apiData)

  const data1 = {
    nombre: apiData[0]?.nombre,
    apellido: apiData[0]?.apellido,
    perfil: apiData[0]?.perfil,
    linkedin: apiData[0]?.linkedin,
    email: apiData[0]?.email,
  }
  const data2 = {
    descripcion: apiData[0]?.descripcion

  }
  const data3 = {
    img: apiData[0]?.photosPerfil[0]
  }

  const data4 = {
    img: apiData[0]?.photosPerfil[0]
  }

  const data5 = {
    img: apiData[0]?.photosPerfil[0]
  }

  const ImgTetecnologias = {
    titulo: "MY STACK",
    imgTecnologias: apiData[0]?.imgTecnologias
  }

  console.log("imagen tecnologias", ImgTetecnologias)
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
        <Card data={data1} />
        <Card data={data3} />
        <Card data={data2} />
        <Card data={ImgTetecnologias} />
        <Card data={data2} />

        {/* ))} */}
      </div>
    </>
  );
};

export default Cards;





