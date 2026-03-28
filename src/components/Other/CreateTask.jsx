import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/Authprovider'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  const [TaskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [TaskDate, setTaskDate] = useState('')
  const [AssignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const taskObj = {
      title: TaskTitle,
      description: taskDescription,
      date: TaskDate,
      category,
      active: false,    // fix: set active false initially
      newTask: true,    // newTask true
      completed: false,
      failed: false
    }

    const data = userData.map(emp => {
      if (emp.firstName.toLowerCase() === AssignTo.trim().toLowerCase()) {
        return {
          ...emp,
          tasks: [...(emp.tasks || []), taskObj],
          taskNumber: {
            active: emp.taskNumber?.active || 0, // don't increment active yet
            newTask: (emp.taskNumber?.newTask || 0) + 1,
            completed: emp.taskNumber?.completed || 0,
            failed: emp.taskNumber?.failed || 0
          }
        }
      }
      return emp
    })

    setUserData(data)
    localStorage.setItem('employees', JSON.stringify(data))

    // Reset form
    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      <form onSubmit={submitHandler} className='w-full flex-wrap flex items-start justify-between'>
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input
              value={TaskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder='Make a UI design'
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
              value={TaskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='date'
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input
              value={AssignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder='Employee Name'
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder='Design,Dev e.t.c'
            />
          </div>
        </div>

        <div className='w-2/5 flex flex-col items-center'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
          />
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask