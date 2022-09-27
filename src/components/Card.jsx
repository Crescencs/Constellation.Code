import "../assets/Styles/Card.css"

function Card({nombre, origen, descritaPor, imagen, descripcion}) {
    return ( 

        
                <section class="portafolio-item">
                    <img src={imagen} className="portafolio-img"/>
                    <section class="portafolio-text">
                        <h2>Informacion</h2>
                        <p>
                            {nombre} <br />
                            {origen} <br />
                            {descritaPor}
                            {descripcion}
                        </p>
                    </section>
                </section>
        
    );
}

export default Card;