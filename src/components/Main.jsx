import '../assets/Styles/Main.css'
import encabezado from "../assets/Images/fondo.jpg";
import img_more_information from "../assets/Images/space1.gif"
import Constelacion from './Constelacion'
function Main() {
    return (
        <main>
            <section id="section-1">
                <div className='encabezado'>
                        <img src={encabezado} />
                        <div className='contenedor'>
                    <h1>la astronomia es la religion de los ateos</h1>
                        </div>
                </div>
            </section>
            <section id='section-2'>
                <div className='container_section_2-informacion'>
                    <h2>Mas informacion</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit atque aspernatur ducimus ratione tenetur provident ea illo doloremque aliquam consequatur quis corporis, obcaecati repellendus velit perspiciatis ullam asperiores. Sapiente, repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem error enim fugit voluptates laboriosam aliquam. Debitis, eius dolorem velit blanditiis quam possimus amet exercitationem perspiciatis, doloribus deleniti alias recusandae vitae.</p>
                </div>
                <div className='container_section_2-img-more-information'>
                    <img src={img_more_information} />
                </div>
            </section>
            <div className='centrar-Y'>
                <section id='section-3'>
                <h1>Galeria de constelaciones</h1>
        <div className="portafolio-container">
                <Constelacion/>
        </div>
            </section>
            </div>
            
        </main>
    );
}
export default Main;