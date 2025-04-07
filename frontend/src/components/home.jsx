import React from 'react'
import { SignedIn } from '@clerk/clerk-react'
const Home = () => {
  return (
<>

<div className="grid grid-cols-3 gap-4 p-8">
            {/* Left Side - Classes, Projects, Assignments */}
            <div className="col-span-1 space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2">Today's Classes</h2>
                <p>Math - 10:00 AM</p>
                <p>Science - 1:00 PM</p>
              </div>
    
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2">Upcoming Projects</h2>
                <p>Project A - Due April 5</p>
                <p>Project B - Due April 10</p>
              </div>
    
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2">Assignments</h2>
                <p>Assignment 1 - Due March 30</p>
                <p>Assignment 2 - Due April 2</p>
              </div>
            </div>
    
            {/* Right Side - Image */}
            <div className="col-span-2 flex justify-center items-center">
              <img src="https://via.placeholder.com/500" alt="Placeholder" className="rounded-lg shadow" />
            </div>
          </div>
    
          {/* Form at Bottom */}
          <div className="p-8 bg-white shadow mt-4">
            <h2 className="text-lg font-semibold mb-4">Add Project or Assignment</h2>
            <form className="space-y-4">
            <select className="select select-bordered w-full">
      <option value="project">Project</option>
      <option value="assignment">Assignment</option>
    </select>
  
              <input type="text" placeholder="Name" className="input input-bordered w-full" />
              <input type="date" className="input input-bordered w-full" />
              <button className="btn btn-primary w-full">Add</button>
            </form>
          </div>

          
</>  )
}

export default Home