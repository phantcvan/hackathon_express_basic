import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="navbar navbar-light" style={{ backgroundColor: "#F1B710",marginBottom:"20px",padding:"8px" }}>
                    <a className="nav-link active" aria-current="page" href="/" 
                    style={{ color: "#fff", paddingLeft: 50, fontWeight: 600,fontSize:18,textDecoration:"none" }}>
                        Note App
                    </a>
            </div>
        </>
    )
}

export default Navbar