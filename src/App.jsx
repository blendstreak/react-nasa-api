import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"

function App() {
  const [ShowSidebar, setShowSidebar] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  
  function handleToggleSidebar(){
    setShowSidebar(!ShowSidebar)
  }
  
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        return
      }
      localStorage.clear()
      
      try{
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('DATA\n', apiData)
      } catch(err){
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])

  return (
    <>
    {data ? (<Main data={data} handleToggleSidebar={handleToggleSidebar}/>):(
      <div className="LoadingState">
        <i className="fa-solid fa-gear"></i>
      </div>
    )}
    {ShowSidebar && (<Sidebar data={data} handleToggleSidebar={handleToggleSidebar}/>)}
    {( data && <Footer data={data} ShowSidebar={ShowSidebar} handleToggleSidebar={handleToggleSidebar}/>)}
    </>
  )
}

export default App
