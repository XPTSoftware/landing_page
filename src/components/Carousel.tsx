import '../assets/css/Carousel.css';

const Carousel = () => {
    
    return (
        <>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:'1.5rem', textAlign:'center'}}><h1>Herramientas conocidas por el equipo.</h1></div>
            <div className="tools">
                <ul className="tools-slide">
                    <li>Angular</li>
                    <li>React</li>
                    <li>Spring boot</li>
                    <li>RStudio</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Java</li>
                </ul>

                <ul className="tools-slide">
                    <li>Angular</li>
                    <li>React</li>
                    <li>Spring boot</li>
                    <li>RStudio</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Java</li>
                </ul>
            </div>
        </>
    );
};

export default Carousel;
