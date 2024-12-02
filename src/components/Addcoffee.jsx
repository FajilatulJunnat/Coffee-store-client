import Swal from 'sweetalert2'
import React from 'react';
import Header from './Header';

const Addcoffee = () => {
    const hendleAddCoffee=event=>{
        event.preventDefault()
        const form=event.target
        const name=form.name.value
        const quantity=form.quantity.value
        const supplier=form.supplier.value
        const taste=form.taste.value
        const category=form.category.value
        const details=form.details.value
        const photo=form.photo.value
        const newCoffee={name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: 'success!',
              text: 'Successfully added data',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
            form.reset()
          }
          
        })
        
    }
    return (
      <div>
      <Header></Header>
        <div className='bg-[#F4F3F0] py-10'>
            <h1 className='text-3xl text-center font-serif'>Add New Coffee</h1>
            <div className="card w-full max-w-3xl mx-auto shrink-0 shadow-2xl">
      <form onSubmit={hendleAddCoffee} className="card-body">
    <div className='md:flex gap-6'>
    <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Enter coffee name" className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="text" name='quantity' placeholder="Enter coffee quantity" className="input input-bordered" required />
        </div>
    </div>
    <div className='md:flex gap-6'>
    <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input type="text" name='taste' placeholder="Enter coffee taste" className="input input-bordered" required />
        </div>
    </div>
    <div className='md:flex gap-6'>
    <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered" required />
        </div>
    </div>
    <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name='photo' placeholder="Enter coffee photo url" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#D2B48C]">Add Coffee</button>
        </div>
      </form>
      </div>
        </div>
        </div>
    );
};

export default Addcoffee;