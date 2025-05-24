export default function Footer(props){
const {showModal,handleToogleModal}=props
    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>The Brutal Martain Landscape</h2>
                <h1>APOD PROJECT</h1>
            </div>
            <button onClick={handleToogleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>


            
        </footer>
    )
} 