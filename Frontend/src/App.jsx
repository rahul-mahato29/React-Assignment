import { useState } from 'react'
import './App.css'

// import HomeBg from './assets/HomeBg.jpg'
import Product from './components/Product'
import PopularSug from './components/PopularSug'

function App() {

  const [value, setValue] = useState(false);

  return (
    <>
      {/* bg - style={{ background: 'no-repeat', backgroundSize: 'cover', background: `url(${HomeBg})` }} */}
      <div className="home-container p-8 pt-6 h-screen bg-gray-400">
        <div className="logo flex flex-row-reverse text-2xl">
          <span className='text-4xl font-mono cursor-pointer'>zevi</span>
        </div>   

        <div className="mt-6 m-48">
          <div>
          <form className="searchBar flex items-center">
              <input type="text" onClick={() => setValue(true)} placeholder="Search" className="flex-grow px-2 p-3 pl-4 rounded-lg text-xl"/>
          </form>
         </div>
          {value ? <TrendsContainer/> : " "}
        </div>
      </div>
    </>
  )
}

function TrendsContainer() {
  return(
    <>
      <div className='p-7 pt-4 pb-4 mt-4 bg-white rounded'>
            <div className="font-semibold text-xl">Latest Trends</div>
            <div className="mt-3 flex gap-2 ">
              <Product/>  
              <Product/>  
              <Product/>  
              <Product/>  
            </div>
            <div className="mt-5 mb-3">
              <div className="text-lg font-semibold text-gray-600">Popular Suggestion</div>
              <div className="mt-2">
                <PopularSug title={"Striped Shirt dress"}/>
                <PopularSug title={"Satin shirts"}/>
                <PopularSug title={"Denim jumpsuit"}/>
                <PopularSug title={"Leather dresses"}/>
                <PopularSug title={"Solid tshirts"}/>
              </div>
            </div>
          </div>
    </>
  )
}

export default App
