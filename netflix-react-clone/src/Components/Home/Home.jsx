import React, { useEffect, useState } from 'react';
import "./Home.scss";
import Row from "../Row";
import axios from 'axios';
import playbtn from '../playbtn.png'
import info from '../info.png'

const url = "https://api.themoviedb.org/3/"
const api_key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDEwYWE5MDk0YzhmODhmYzI4ZTQ4ZTVjNGQ5ZDYyOCIsInN1YiI6IjY2NWFmMGMyNzgxNDExM2JiYzEwMzVjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mZHl_QtpBY4LpK-h_xWD-8s26WhMPp4x7SjyBUFWDH4"


const Home = () => {

  const [imgUrl, setImgUrl] = useState("")
  const [imgTitle, setImgTitle] = useState("")
  const [imgOverview, setImgOverview] = useState("")

  const popularMovies = async () => {
    const options = {
      method: 'GET',
      url: `${url}trending/all/day`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_key}`
      }
    };
    try {
      const response = await axios.request(options);
      console.log(response)
      const img_url = response.data.results[6].backdrop_path;
      const movie_title = response.data.results[6].title;
      const overview = response.data.results[6].overview;
      setImgUrl(`https://image.tmdb.org/t/p/w500${img_url}`)
      setImgOverview(overview)
      setImgTitle(movie_title)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    popularMovies()
  }, [])


  return (
    <>
      <section className='home'>
        <div className='banner' style={{ backgroundImage: `url(${imgUrl})`}}>
          <div className='banner-content'>
            <h1>{imgTitle}</h1>
            <p>{imgOverview}</p>
            <div className='banner-btns'>
              <button className='play-btn'><img src={playbtn} alt="Play" style={{height:25, width:25, position:'relative', right: 7}} /> Play</button>
              <button className='moreInfo-btn'><img src={info} alt="Info" style={{height:25, width:25, position:'relative', right: 7}} /> More Info</button>
            </div>
          </div>
        </div>
      </section>
      <Row title={"Popular Movies"} />
      <Row title={"Popular TV Shows"} />
      <Row title={"Upcoming Movies"} />
      <Row title={"Trending Now"} />
      <Row title={"Top Rated Movies"} />
      <Row title={"Top Rated TV Shows"} />
      <Row title={"My List"} />
    </>
  );
};

export default Home;
