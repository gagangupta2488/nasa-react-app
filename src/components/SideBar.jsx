export default function SideBar(props){
    const {handleToogleModal}=props
   return (
        <div className="sidebar" >
            <div className="bgOverlay"></div>
            <div className="sidebarContents">
             <h2>The Brutal Martain Landscape</h2>
             <div>
                <p>Description</p>
                <p>mn nmfg jkgnjkndfg nkgf jkg fg
                    nknhkgf 
                    bnbfbgnfkgjk
                </p>
             </div>
             <button onClick={handleToogleModal}>
                <i className="fa-solid fa-right-long"></i>
             </button>
             </div>
        </div>
    )
} 