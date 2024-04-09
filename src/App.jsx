import React,{useState,useEffect} from 'react'
import axios from "axios";
import Cards from './components/Cards';

function App() {
   
  const[news, setNews]=useState([])

  useEffect(()=>{
    const fetchData=async()=>{
       try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=1d52e78e32ee4d158c9e85e4d8813214");
        console.log(response)
        
        if(response.status!=200){
          <h1>Loading....</h1>
        }else{
          setNews(response.data.articles)
        }
        
       } catch (error) {
        console.log(error)
       }
    }
   fetchData();
  },[]);

  return (
   <>
     <Cards news={news}/>
   </>
    
  )
}

export default App