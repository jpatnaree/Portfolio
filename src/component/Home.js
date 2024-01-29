import Navbar from "./Navbar";

function Home() {
    return(
        <>
        <Navbar />
        <div className="home">
            <div className="namediv">
                <h1 id='name'>Patnaree</h1>
                <h1 id='fullname'>⟨ Pat ⟩ Johnson</h1>
            </div>
            <div className="webdev">
                <h1>Web</h1>
                <h1 id="dev">Developer</h1>
                <h1 id="dev2">⟨⁄⟩</h1>
            </div>

            <div className="linkinfo">
                <a href="https://github.com/jpatnaree"> <img src="image/github.png" alt='GitHub'/> </a>
                <a href="https://www.linkedin.com/in/patnaree-johnson-470643299/"> <img src="image/linkedin.png" alt='LinkedIn'/></a>
                <a href="mailto:jpatnaree@gmail.com"><img src="image/email.png" alt='Email'/></a>
            </div>

        </div>
        </>
    )
}

export default Home;