import { Component } from "react";
import {movies} from "../movieData"
import axios from "axios"

class Banner extends Component {
    constructor(){
        super();
        this.state = {
            movie:""
        }
    }
    async componentDidMount(){
        let res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=e2391a84d2ccebf4c064f6c24e616037');
        const data = await res.json();
        this.setState({
            movie:data.results[Math.floor((Math.random() * 20) + 1)]
        })

    }

    render() {
        let backdrop_path = this.state.movie.backdrop_path;
        return (
            <div className="card banner-card">
                <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} className="card-img-top banner-img" alt="..."/>
                <h1 className="card-title banner-title">{this.state.movie.title}</h1>
                <p className="card-text banner-text">{this.state.movie.overview}</p>
            </div>
        )
    }
}

export default Banner