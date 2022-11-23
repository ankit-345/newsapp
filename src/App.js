
import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
   let apikey = process.env.REACT_APP_NEWS_API;
  
  const [progress, setProgress] = useState(0);

    return (
      <>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <div>
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={5} country="us" category="general" />} />
            <Route path="Home" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={5} country="in" category="general" />} />
            <Route path="business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={5} country="in" category="business" />} />
            <Route path="entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={5} country="in" category="entertainment" />} />
            <Route path="sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={5} country="in" category="sports" />} />
            <Route path="politics" element={<News setProgress={setProgress} apikey={apikey} key="politics" pageSize={5} country="in" category="politics" />} />
            <Route path="health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={5} country="in" category="health" />} />
            <Route path="technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={5} country="in" category="technology" />} />
          </Routes>
        </div>
      </>
    )
}  

export default App;