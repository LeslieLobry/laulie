import "../Loader/loader.css"

function Loader (){
    const loader = document.querySelector('.loader');
    window.addEventListener('load', () => {
    loader.classList.add('fondu-out');
})
    return(
        <div className="loader">
            <span className="lettre">L</span>
            <span className="lettre">A</span>
            <span className="lettre">U</span>
            <span className="lettre">L</span>
            <span className="lettre">I</span>
            <span className="lettre">E</span>
            <span className="lettre">.</span>
            <span className="lettre">W</span>
            <span className="lettre">E</span>
            <span className="lettre">B</span>
        </div>
    )
}

export default Loader