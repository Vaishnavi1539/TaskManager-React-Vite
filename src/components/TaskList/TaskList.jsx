import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='flex overflow-x-auto flex-shrink-0 gap-20 flex-nowrap items-center justify-start h-[50%] w-full mt-10'>
            {data.tasks.map((elem, idx) => {
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }
            })}
        </div>
    )
}

export default TaskList