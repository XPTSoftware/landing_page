import Carousel from './Carousel';

const Home = () => {
    return (
        <>
            <section style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
                <h1 style={{fontSize:'10rem', fontWeight:'bolder'}}>
                    XPT
                </h1>
                <iframe style={{width:'100vw', height:'100vh', opacity:'0.75', zIndex:'100', top:'0', left:'0', position:'absolute'}} src="https://www.youtube.com/embed/GuLcxg5VGuo?autoplay=1&controls=0&mute=0&loop=1&playlist=GuLcxg5VGuo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </section>
            <div>
                <Carousel />
            </div>
        </>
    )
}

export default Home
