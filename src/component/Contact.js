import Navbar from "./Navbar";

function Contact() {
    return(
        <>
        <Navbar />
        <div className="contact">
            <h1 className="title">Contact me:</h1>
            <h1 id="chr"> ● ◉ ⟨⁄⟩ ◉ ●</h1>

            <div className="linkcontact">
                <ul><a href="https://github.com/jpatnaree"> <img src="image/github.png" alt='GitHub'/> GitHub: jpatnaree </a></ul>
                <ul><a href="https://www.linkedin.com/in/patnaree-johnson-470643299/"> <img src="image/linkedin.png" alt='LinkedIn'/> LinkedIn: patnaree-johnson-470643299</a></ul>
                <ul><a href="mailto:jpatnaree@gmail.com"><img src="image/email.png" alt='Email'/> Email: j.patnaree.t@gmail.com</a> </ul>
                
            </div>
        </div>
        </>
    )
}

export default Contact;