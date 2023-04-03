import React from 'react'

export const Table = ({globalData, setEditState, deleteData}) => {
  return (
    <div>
        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Action Button</th>
    </tr>
  </thead>
  <tbody>
    {
        globalData.map(((ele,index)=>{
            return <>
            <tr>
      <th scope="row">{index}</th>
      <td>{ele.firstName}</td>
      <td>{ele.lastName}</td>
      <td>{ele.email}</td>
      <td>{ele.phoneNo}</td> 
       <td><button className='btn btn-success' onClick={()=>setEditState(ele)} >Edit</button>
       <button  className='btn btn-danger' style={{marginLeft:"10px"}} onClick={()=>deleteData(ele.phoneNo)} >Delete</button>
       </td>
    </tr>
            </>
        }))
    }
    
  </tbody>
</table>
    </div>
  )
}