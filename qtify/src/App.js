import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { useEffect, useState } from "react";
import axios from "axios";
import FilterSection from "./components/FilterSection/FilterSection";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [fliteredSongs, setFilteredSongs] = useState([]);

  const getTopAlbums = async () => {
    try {
      let topAlbumsResp = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
      setTopAlbums(topAlbumsResp.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getNewAlbums = async () => {
    try {
      let newAlbumsResp = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
      setNewAlbums(newAlbumsResp.data);
    } catch (err) {
      console.log(err);
    }
  }

  const getSongsData = async () => {
    try{
      let songsDataResp = await axios.get("https://qtify-backend-labs.crio.do/songs");
      setSongsData(songsDataResp.data);
      setFilteredSongs(songsDataResp.data);
    } catch (err) {
      console.log(err);
    }
  }

  const generateFilteredSongs = (value)=>{
    let key="";
    if(value===0){
      getSongsData();
    }
    else if(value===1){
      key="rock";
    }
    else if(value===2){
      key="pop";
    }
    else if(value===3){
      key="jazz";
    }
    else if(value===4){
      key="blues"
    }

    let fliteredSongsArray = songsData.filter((songs)=>songs.genre.key===key);
    setFilteredSongs(fliteredSongsArray);
  }

  console.log(fliteredSongs);

  const handleTabsChanges = (value)=>{
    generateFilteredSongs(value);
  }

  useEffect(() => {
    getTopAlbums();
    getNewAlbums();
    getSongsData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Section type="album" title="Top Albums" data={topAlbums}/>
      <Section type="album" title="New Albums" data={newAlbums}/>
      <FilterSection type="song" title="Songs" fliteredSongs={fliteredSongs} handleTabsChanges={handleTabsChanges}/>
    </div>
  );
}

export default App;
