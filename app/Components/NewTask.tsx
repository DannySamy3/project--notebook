import { useState } from 'react';
const NewTask = ({ handleDelete, handleAdd, project, tasks }) => {
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
    <div className='flex justify-between  '>
      <input
        type='text'
        className='input input-bordered w-1/2 px-2
            py-1  bg-stone-200 h-10'
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        onClick={handleClick}
        className='
        hover:text-green-500'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          class='w-6 h-6'
        >
          <path
            fill-rule='evenodd'
            d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z'
            clip-rule='evenodd'
          />
        </svg>
      </button>
    </div>
  );
};

export default NewTask;
