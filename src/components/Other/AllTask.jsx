import React, { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider';

const AllTask = () => {
  const [userData] = useContext(AuthContext); 

  return (
    <div className='bg-[#1c1c1c] h-67 rounded p-5 mt-5'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed</h5>
      </div>

      <div>
        {userData && userData.map((elem, idx) => (
          <div key={idx} className='mb-2 py-2 px-3 flex justify-between rounded'>
            <h2 className="w-1/5 text-lg font-medium">{elem.firstName}</h2>
            <h3 className='w-1/5 text-lg font-medium text-blue-400'>
              {elem.tasks ? elem.tasks.filter(t => t.newTask).length : 0}
            </h3>
            <h5 className='w-1/5 text-lg font-medium text-yellow-400'>
              {elem.tasks ? elem.tasks.filter(t => t.active).length : 0}
            </h5>
            <h5 className='w-1/5 text-lg font-medium'>
              {elem.tasks ? elem.tasks.filter(t => t.completed).length : 0}
            </h5>
            <h5 className='w-1/5 text-red-600'>
              {elem.tasks ? elem.tasks.filter(t => t.failed).length : 0}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;