import React,{useState,useEffect} from 'react'
import axios from "axios";
import News from './components/News';
import NavBar from './components/NavBar';

function App() {
   
  const[article, setArticle]=useState([]);
  const[category, setCategory]=useState("general");
  const [isLoading, setIsLoading]=useState(false);
  const [searchQuery, setSearchQuery] = useState("");



  useEffect(()=>{
    const fetchData=async()=>{
      setIsLoading(true);
       try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1d52e78e32ee4d158c9e85e4d8813214`);
        console.log(response)
        
        if(response.status!=200){
          <h1>Loading....</h1>
        }else{
          setArticle(response.data.articles)
          setSearchQuery(response.data.articles)
        }

    
       } catch (error) {
        console.log(error)
       }
       finally{
        setIsLoading(false)
       }
    }
   fetchData();
  },[category]);

  return (
   <>
     <NavBar setCategory={setCategory} setSearchQuery={setSearchQuery} article={article} />
     <News isLoading={isLoading} searchQuery={searchQuery} article={article}/>
   </>
    
  )
}

export default App