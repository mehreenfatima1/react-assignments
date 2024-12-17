import React from 'react'

const Table = (props) => {
   
  
  return (
    <>
    <h2>{props.heading1}</h2>
    <table border={1}>
        <thead>
            <tr>
                <td>Product Id</td>
                <td>Product Name</td>
                <td>Category</td>
                <td>Price</td>
            </tr>
             
            
        </thead>
        <tbody>
            
                {props.tableInfo.map((items,index)=>{
                   return(
                    <tr key={index}>
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.category}</td>
                        <td>{items.price}</td>
                    </tr>
                   )

                    
                })}
            
        </tbody>
    </table>
    </>
  )
}

export default Table