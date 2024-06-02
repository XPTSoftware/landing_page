import '../assets/css/Carousel.css';

const Carousel = () => {
    
    return (
        <>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:'1.5rem', textAlign:'center'}}><h1>Herramientas conocidas por el equipo.</h1></div>
            <div className="tools">
                <ul className="tools-slide">
                    <li className="tag">Angular</li>
                    <li className="tag">React</li>
                    <li className="tag">Spring boot</li>
                    <li className="tag">RStudio</li>
                    <li className="tag">JavaScript</li>
                    <li className="tag">TypeScript</li>
                    <li className="tag">Java</li>
                </ul>

                <ul className="tools-slide">
                    <li className="tag">Angular</li>
                    <li className="tag">React</li>
                    <li className="tag">Spring boot</li>
                    <li className="tag">RStudio</li>
                    <li className="tag">JavaScript</li>
                    <li className="tag">TypeScript</li>
                    <li className="tag">Java</li>
                </ul>
            </div>
            <div className="tools">
                <ul className="tools-slide-2">
                    <li className="tag">Angular</li>
                    <li className="tag">React</li>
                    <li className="tag">Spring boot</li>
                    <li className="tag">RStudio</li>
                    <li className="tag">JavaScript</li>
                    <li className="tag">TypeScript</li>
                    <li className="tag">Java</li>
                </ul>

                <ul className="tools-slide-2">
                    <li className="tag">Angular</li>
                    <li className="tag">React</li>
                    <li className="tag">Spring boot</li>
                    <li className="tag">RStudio</li>
                    <li className="tag">JavaScript</li>
                    <li className="tag">TypeScript</li>
                    <li className="tag">Java</li>
                </ul>
            </div>
        </>
    );
};

export default Carousel;
