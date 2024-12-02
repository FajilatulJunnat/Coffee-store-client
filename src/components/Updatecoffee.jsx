import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Updatecoffee = () => {
    const coffee=useLoaderData()
    const{_id,name,quantity,supplier,taste,category,details,photo}=coffee
    const hendleUpdateCoffee=event=>{
        event.preventDefault()
        const form=event.target
        const name=form.name.value
        const quantity=form.quantity.value
        const supplier=form.supplier.value
        const taste=form.taste.value
        const category=form.category.value
        const details=form.details.value
        const photo=form.photo.value
        const updateCoffee={name,quantity,supplier,taste,category,details,photo}
        console.log(updateCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
          method:'PUT',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(updateCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if (data.modifiedCount>0) {
            Swal.fire({
              title: 'success!',
              text: 'Successfully Updated data',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
            form.reset()
          }
          
        })
        
    }
    return (
        <div>
            <h1 className='text-3xl text-center font-serif'>Update Coffee:{name}</h1>
            <div className="card w-full max-w-3xl mx-auto shrink-0 shadow-2xl">
      <form onSubmit={hendleUpdateCoffee} className="card-body">
    <div className='md:flex gap-6'>
    <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' defaultValue={name} placeholder="Enter coffee name" className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="text" name='quantity' defaultValue={quantity} placeholder="Enter coffee quantity" className="input input-bordered" required />
        </div>
    </div>
    <div className='md:flex gap-6'>
    <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input type="text" name='supplier' defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input type="text" name='taste' defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered" required />
        </div>
    </div>
    <div className='md:flex gap-6'>
    <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" name='category'defaultValue={category} placeholder="Enter coffee category" className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" name='details'defaultValue={details} placeholder="Enter coffee details" className="input input-bordered" required />
        </div>
    </div>
    <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name='photo'defaultValue={photo} placeholder="Enter coffee photo url" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#D2B48C]">Update Coffee</button>
        </div>
      </form>
      </div>
        </div>
    );
};

export default Updatecoffee;