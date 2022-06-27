import { Component } from "react";


class NavBar extends Component{


    handleClick = ()=>{
        document.querySelector(".container").classList.add("active");
        document.querySelector(".movie-container").classList.add("block")
        document.querySelector(".banner-card").classList.add("block")
        

        
    }
    render(){
        return(
        <div className="nav-bar"style={{display:"flex",padding:'0.5rem',color:"blue"}}>
            <h1>Movies App</h1>
            <h2 style={{marginLeft:"2rem",marginTop:"0.5rem"}}><button onClick={this.handleClick}>Favourites</button></h2>
        </div>
        )
    }
}

export default NavBar