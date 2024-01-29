import Navbar from "./Navbar";

function About() {
    return(
        <>
        <Navbar />

        <div className="about">

            <h1 className="title">About:</h1>
            <h1 id="chr"> ● »« ⟨⁄⟩ »« ●</h1>

            <div className="detail">

                <div className="a-1">
                <div className="a-2">
                    <img id='me' src="image/me2.png" alt="me" />
                </div>


                    <div className="textbox">
                        <h2>
                        Hello, I'm Patnaree, a Flatiron bootcamp graduate and dedicated Fullstack Developer. With a background in customer service, I bring a unique blend of coding skills and user-centric thinking.
                        </h2>

                        <h2>
                        Proficient in Vanilla Javascript, ReactJS, Python, and Flask, I thrive on solving complex problems and collaborating seamlessly within a team.
                        </h2>
                                            
                        <h2>
                        Eager to embrace new challenges, my coding journey is marked by a continuous quest for learning and mastering emerging technologies.
                        </h2>
                                            
                        <h2>
                        I find joy in crafting intuitive user interfaces and building robust backend systems. Let's collaborate and turn every line of code into something extraordinary for the future.
                        </h2>
                    </div>
                    

                </div>


            </div>

        </div>
        </>
    )
}

export default About;