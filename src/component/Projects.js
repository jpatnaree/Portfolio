import Navbar from "./Navbar";

function Projects() {
    return(
        <>
        <Navbar />
        <div className="project">
            <h1 className="title">Project:</h1>
                <h1 id="chr">_______________________</h1>

                <div className="scrolling-wrapper">
                    <div className="project-detail">
                        <div className="p-1">
                            <h2>SpookyEgg</h2>
                            <a href="https://github.com/jpatnaree/SpookyEgg"><img className="linktogh" src='image/github.png' alt='link to GitHub' /></a>
                            <a id='demolink' href="https://drive.google.com/file/d/1HDmcycVJCyBscuLkdg2YOa7unq0ODUGL/view?usp=sharing"> Demo</a>
                            <h3>React JS Python Flask MapboxGL HTML CSS</h3>
                            <h4>Explore the supernatural side of hospitality with my Spooky Hotel Review Application with interactive map</h4>
                        </div>
                        <div className="p-2">
                            <img className="scapture" src="screenshot/spookyegg.png" alt="SpookyEgg" />
                        </div>
                    </div>

                    <div className="project-detail">
                        <div className="p-1">
                            <h2>Schmooze</h2>
                            <a href="https://github.com/ian-a-frankel/schmooze"><img className="linktogh" src='image/github.png' alt='link to GitHub' /></a>
                            <h3>React JS Python Flask HTML CSS</h3>
                            <h5>Contributers: Ian Frankel, Khrystyna Klapushchak, Isamar Gonzalez-Banos</h5>
                            <h4>Conversate seamlessly with our Chat-Based Messenger App – Your intuitive and engaging communication platform.</h4>
                        </div>
                        <div className="p-2">
                            <img className="scapture" src="screenshot/schmooze.png" alt="Schmooze" />
                            {/* <a href="demo"> demo</a> */}
                        </div>
                    </div>

                    <div className="project-detail">
                        <div className="p-1">
                            <h2>Library of Hayao Miyazaki</h2>
                            <a href="https://github.com/jpatnaree/HayaoMiyazaki"><img className="linktogh" src='image/github.png' alt='link to GitHub' /></a>
                            <h3>ReactJS HTML CSS</h3>
                            <h4>A Database of Hayao Miyazaki's Masterpieces in Film</h4>
                        </div>
                        <div className="p-2">
                            <img className="scapture" src="screenshot/hayao.png" alt="Library of Hayao Miyazaki" />
                            {/* <a href="demo"> demo</a> */}
                        </div>
                    </div>

                    <div className="project-detail">
                        <div className="p-1">
                            <h2>Mario: Super Chett!</h2>
                            <a href="https://github.com/royelaawar/Project-3-Mario"><img className="linktogh" src='image/github.png' alt='link to GitHub' /></a>
                            <h3>Python Pygame</h3>
                            <h5>Contributer: Oliver Gray, Roy Elaawar</h5>
                            <h4>Embark on an adventurous journey with our Mario-inspired knock-off! Encounter challenging, brutal maps designed to test your skills and perseverance. Can you conquer the unforgiving terrain?</h4>
                        </div>
                        <div className="p-2">
                            <img className="scapture" src="screenshot/mario.png" alt="super chett" />
                            {/* <a href="demo"> demo</a> */}
                        </div>
                    </div>

                    <div className="project-detail">
                        <div className="p-1">
                            <h2>Crystal Harmony</h2>
                            <a href="https://github.com/KhrystynaKla/Crystal-Harmony-Project"><img className="linktogh" src='image/github.png' alt='link to GitHub' /></a>
                            <h3>Vanilla JavaScript HTML CSS</h3>
                            <h5>Contributers: Khrystyna Klapushchak, Isamar Gonzalez-Banos</h5>
                            <h4>Discover serenity at our Healing Crystal Shop, where each crystal is a gateway to wellness. Explore a wealth of information on the unique benefits of every crystal, guiding you towards a harmonious balance of mind, body, and spirit.</h4>

                        </div>
                        <div className="p-2">
                            <img className="scapture" src="screenshot/crystal-harmony.png" alt="crystal harmony" />
                            {/* <a href="demo"> demo</a> */}
                        </div>

                    </div>
                
                </div>
                
        </div>
        </>
    )
}

export default Projects;