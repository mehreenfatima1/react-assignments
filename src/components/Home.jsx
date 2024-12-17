import React from 'react'
import Table from "./Table"

const Home = () => {
    const tableInfo=[{
        id:1,
        name:"Iron",
        category: "Electronics",
    price:1899
    },
    {
    id:2,
    name:"Blender",
    category: "Electronics",
    price:2999
    },
    {
    id:3,
    name:"Juicer",
    category: "Electronics",
    price:4999
    },
    {
    id:4,   
    name:"Knife",
    category: "Utensils",
    price:199
    },{
    id:5,
    name:"Air Fryer",
    category: "Electronics",
    price:49999
    }]
  return (
    <div className='home'>
    
    <div className='main'>
        <h2>Product List</h2>
    <div className='table'>
    
    <Table tableInfo={tableInfo}/>
    </div>
    </div>
    </div>
  )
}

export default Home