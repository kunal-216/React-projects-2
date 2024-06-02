import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import axios from 'axios';

const url = "https://api.themoviedb.org/3/"
const api_key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDEwYWE5MDk0YzhmODhmYzI4ZTQ4ZTVjNGQ5ZDYyOCIsInN1YiI6IjY2NWFmMGMyNzgxNDExM2JiYzEwMzVjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mZHl_QtpBY4LpK-h_xWD-8s26WhMPp4x7SjyBUFWDH4"


const Row = ({title}) => {
  const [arr, setArr] = useState([]);

  const fetchTopRatedTvShows = async () => {
    const options = {
      method: 'GET',
      url: `${url}tv/top_rated`,
      params: { language: 'en-US', page: '3' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_key}`
      }
    };
    try {
      const response = await axios.request(options);
      const shows = response.data.results.map(show => ({
        img: `https://image.tmdb.org/t/p/w500${show.poster_path}`
      }));
      setArr(shows);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTopRatedMovies = async () => {
    const options = {
      method: 'GET',
      url: `${url}movie/top_rated`,
      params: { language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_key}`
      }
    };
    try {
      const response = await axios.request(options);
      const shows = response.data.results.map(show => ({
        img: `https://image.tmdb.org/t/p/w500${show.poster_path}`
      }));
      setArr(shows);
    } catch (error) {
      console.error(error);
    }
  };

  const upcomingMovies = async () => {
    const options = {
      method: 'GET',
      url: `${url}movie/upcoming`,
      params: { language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_key}`
      }
    };
    try {
      const response = await axios.request(options);
      const shows = response.data.results.map(show => ({
        img: `https://image.tmdb.org/t/p/w500${show.poster_path}`
      }));
      setArr(shows);
    } catch (error) {
      console.error(error);
    }
  };

  const myList = async () => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/tv/airing_today',
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_key}`
      }
    };
    try {
      const response = await axios.request(options);
      const shows = response.data.results.map(show => ({
        img: `https://image.tmdb.org/t/p/w500${show.poster_path}`
      }));
      setArr(shows);
    } catch (error) {
      console.error(error);
    }
  };

  const TrendingNow = async () => {
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
      const shows = response.data.results.map(show => ({
        img: `https://image.tmdb.org/t/p/w500${show.poster_path}`
      }));
      setArr(shows);
    } catch (error) {
      console.error(error);
    }
  };

  const popularTvShows = async () => {
    const options = {
      method: 'GET',
      url: `${url}tv/popular`,
      params: { language: 'en-US', page: '3' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_key}`
      }
    };
    try {
      const response = await axios.request(options);
      const shows = response.data.results.map(show => ({
        img: `https://image.tmdb.org/t/p/w500${show.poster_path}`
      }));
      setArr(shows);
    } catch (error) {
      console.error(error);
    }
  };

  const popularMovies = async () => {
    const options = {
      method: 'GET',
      url: `${url}movie/popular`,
      params: { language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_key}`
      }
    };
    try {
      const response = await axios.request(options);
      const shows = response.data.results.map(show => ({
        img: `https://image.tmdb.org/t/p/w500${show.poster_path}`
      }));
      setArr(shows);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    switch (title) {
      case 'Top Rated TV Shows':
        fetchTopRatedTvShows();
        break;
      case 'Top Rated Movies':
        fetchTopRatedMovies();
        break;
      case 'Upcoming Movies':
        upcomingMovies();
        break;
      case 'My List':
        myList();
        break;
      case 'Trending Now':
        TrendingNow();
        break;
      case 'Popular TV Shows':
        popularTvShows();
        break;
      case 'Popular Movies':
        popularMovies();
        break;
      default:
        break;
    }
  }, [title]);


  return (
    <div className='row'>
      <h3>{title}</h3>
      <div className='rowItems'>
        {arr.map((item,index) => (
          <Card key={index} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default Row;
