import Navbar from "./Navbar";



function Resume() {
    const pdfURL = 'image/resume0.png';
    return(
        <>
        <Navbar />
        <div className="resume">
            <h2><a href="https://docs.google.com/document/d/1DIfTtbqOzVyS5-1S2o30vh9sazDUGwPFzLc06tMllww/edit?usp=sharing">⟩ ⟩ Download ⟨ ⟨</a></h2>
            <img src={pdfURL} alt="resume" />

        </div>
        </>
    )
}

export default Resume;