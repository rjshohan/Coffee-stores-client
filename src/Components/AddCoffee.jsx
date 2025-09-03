import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const navigate = useNavigate()
  const handleAddCoffee = (event)=>{
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {name,quantity,supplier,taste,category,details,photo}
    console.log(newCoffee);

    // send data to the server
    fetch("https://coffee-stores-server.onrender.com/coffee",{
      method:"POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Coffees Added successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        }).then(()=>{
          navigate("/")
        })
      }
    })
  }


  return (
    <div className='bg-[#f4f3f0] p-28'>
      <h2 className='text-3xl font-extrabold'>AddCoffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* Form name and quantity row */}
        <div className='md:flex mb-8'>
          <div className="form-control md:w-1/2 ">
            <label className='label'>
              <span className="label-text">
                Coffee Name
              </span> 
            </label>
            <label className="input-group">
              <input type="text" name='name' placeholder='Coffee Name'  className = "input input-bordered w-full"/>
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className='label'>
              <span className="label-text">
                Available Quantity
              </span>
            </label>
            <label className="input-group">
              <input type="text" name='quantity' placeholder='Available Quantity'  className = "input input-bordered w-full"/>
            </label>
          </div>
        </div>
        {/* Form supplier row */}
        <div className='md:flex mb-8'>
          <div className="form-control md:w-1/2 ">
            <label className='label'>
              <span className="label-text">
                supplier Name
              </span> 
            </label>
            <label className="input-group">
              <input type="text" name='supplier' placeholder='supplier Name'  className = "input input-bordered w-full"/>
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className='label'>
              <span className="label-text">
                Taste
              </span>
            </label>
            <label className="input-group">
              <input type="text" name='taste' placeholder='Taste'  className = "input input-bordered w-full"/>
            </label>
          </div>
        </div>
        {/* Form category and details row */}
        <div className='md:flex mb-8'>
          <div className="form-control md:w-1/2 ">
            <label className='label'>
              <span className="label-text">
                Category
              </span> 
            </label>
            <label className="input-group">
              <input type="text" name='category' placeholder='Category'  className = "input input-bordered w-full"/>
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className='label'>
              <span className="label-text">
                Details
              </span>
            </label>
            <label className="input-group">
              <input type="text" name='details' placeholder='Details'  className = "input input-bordered w-full"/>
            </label>
          </div>
        </div>
        {/* Form photo url row */}
        <div className='mb-8'>
          <div className="form-control w-full">
            <label className='label'>
              <span className="label-text">
                Photo URL
              </span> 
            </label>
            <label className="input-group">
              <input type="text" name='photo' placeholder='Photo URL'  className = "input input-bordered w-full"/>
            </label>
          </div>
        </div>
        
        <input className="btn btn-block" type="submit" value="Add Coffee" />
      </form>
    </div>
  )
}

export default AddCoffee