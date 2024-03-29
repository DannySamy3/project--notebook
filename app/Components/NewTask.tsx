import { useState } from 'react';
const NewTask = ({ handleDelete, handleAdd }) => {
  const [enteredTask, setEnteredTask] = useState('');

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === '') {
      return;
    }
    handleAdd(enteredTask);
    setEnteredTask('');
  };
  return (
    <div className='flex gap-9 mr-36 '>
      <input
        type='text'
        className='input input-bordered w-64 px-2
            py-1  bg-stone-200 h-10'
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        onClick={handleClick}
        className='text-stone-300 btn btn-neutral hover:text-stone-500'
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
