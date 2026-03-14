import Header from "../Header";
import { useEffect,useState } from "react";
import { Link,useParams } from "react-router-dom";
import { APIKEY } from "../config/key";
import { Container } from "../style";
import Footer from "../Footer";


function Details() {
    const img_path = 'https://image.tmdb.org/t/p/w500/'
    const { type, id} = useParams()
    const[content, setContent] = useState(null)
    const[trailerKey, setTrailerKey] = useState(null)
    const[cast, setCast] = useState(null)
    const[genres, setGenres] = useState(null)
    const[isFavorite, setIsFavorite] = useState(false)

    useEffect(()=>{

        async function fetchContent() {
            try{
                const response = await fetch(
                    `https://api.themoviedb.org/3/${type}/${id}?api_key=${APIKEY}&language=pt-BR`
                )
                const data = await response.json()
                setContent({
                    id,
                    title: data.title || data.name,
                    overview: data.overview,
                    releaseDate: data.release_date || data.first_ari_date,
                    poster: data.poster_path,
                    rating: data.vote_average
                })setGenres(data.genres || [])

                const videosResponse = fetch(
                    `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${APIKEY}&language=pt-BR`
                )

                const videosData = await videosResponse.json()
                if(videosData.results){
                    const trailer = videosData.results.find(v => v.type === 'Trailer'
                    && v.site === 'Youtube')
                    if(trailer)setTrailerKey(trailer.key)
                }

            const creditsResponse = await fetch(
                `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${APIKEY}&language=pt-BR`
            )
            const creditsData = awai
            }
        }
    })






}

export default Details
