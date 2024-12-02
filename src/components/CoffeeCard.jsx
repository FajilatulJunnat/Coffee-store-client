import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee,setCoffees,coffees}) => {
    const {_id,name,quantity,supplier,taste,category,details,photo}=coffee

    const hendleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
              fetch(`http://localhost:5000/coffee/${_id}`,{
                method:'DELETE'
              })
                .then(res=>res.json())
                .then(data=>{
                    if (data.deletedCount>0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          const remainingCoffee=coffees.filter(coff=>coff._id !==id)
                          console.log(remainingCoffee);
                          
                          setCoffees(remainingCoffee)
                    }
                })
              
            }
          });
        
    }
    return (
        <div className="card card-side bg-[#F5F4F1] shadow-xl">
  <figure>
    <img
      src={photo}
      alt="Movie" />
  </figure>
  <div className=" flex justify-between items-center w-full mx-5">
   <div>
   <h2 className="card-title">Name:{name}</h2>
    <p>Price:{quantity}</p>
    <p>Category:{category}</p>
   </div>
    <div className="card-actions">
    <div className="join join-vertical space-y-4 ">
  <button className="btn ">view</button>
  <Link to={`update-coffee/${_id}`} className="btn bg-black text-white">Update</Link>
  <button onClick={()=>hendleDelete(_id)} className="btn bg-red-500 text-white">delete</button>
</div>
    </div>
  </div>
</div>
    );
};

export default CoffeeCard;