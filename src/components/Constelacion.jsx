import ConstelacionAndromeda from "../assets/Images/sistema-solar.png"
import ConstelacionCarina from "../assets/Images/sistema-solar.png"
import ConstelacionDelphinus from "../assets/Images/sistema-solar.png"
import ConstelacionTelescopium from "../assets/Images/sistema-solar.png"



import Card from "./Card"

function Constelacion() {
    const constelacion=[{
         nombre:'Andromeda',
         origen:'Antigüedad',
         descritaPor:'Claudio Ptolomeo',
         imagen:ConstelacionAndromeda,
         descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatum facilis voluptatem, libero voluptas neque exercitationem eaque quasi ea dicta culpa excepturi voluptates autem molestiae facere ab tempora sint ipsa"
     },
     {
         nombre:'Carina',
         origen:'1763',
         descritaPor:'Nicolas-Louis de Lacaille',
         imagen:ConstelacionCarina,
         descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatum facilis voluptatem, libero voluptas neque exercitationem eaque quasi ea dicta culpa excepturi voluptates autem molestiae facere ab tempora sint ipsa"
     },
     {
         nombre:'Delphinus',
         origen:'Antigüedad',
         descritaPor:'Claudio Ptolomeo',
         imagen:ConstelacionDelphinus,
         descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatum facilis voluptatem, libero voluptas neque exercitationem eaque quasi ea dicta culpa excepturi voluptates autem molestiae facere ab tempora sint ipsa"
     }]
    return ( 
        constelacion.map((constelation)=>(
             <Card
                 nombre={constelation.nombre}
                 origen={constelation.origen}
                 descritaPor={constelation.descritaPor}
                 imagen={constelation.imagen}
                 descripcion={constelation.descripcion}
             />,
             <Card
                 nombre={constelation.nombre}
                 origen={constelation.origen}
                 descritaPor={constelation.descritaPor}
                 imagen={constelation.imagen}
                 descripcion={constelation.descripcion}
             />,
             <Card
                nombre={constelation.nombre}
                origen={constelation.origen}
                descritaPor={constelation.descritaPor}
                imagen={constelation.imagen}
                 descripcion={constelation.descripcion}
             />

         ))
    );
}

export default Constelacion;