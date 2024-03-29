'use client';
import React, { useRef } from 'react';

//////*DEFINING THEM INTERFACES*////////
interface Project {
  title: string;
  description: string;
  date: string;
}

interface AddProjectProps {
  saveHandler: (project: Project) => void;
}

/*
THE MAIN COMPONENT FUNCTION
*/
const AddProject: React.FC<AddProjectProps> = ({ saveHandler }) => {
  const enteredTitle = useRef();
  const enteredDescription = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    saveHandler({
      title: enteredTitle.current.value,
      description: enteredDescription.current.value,
      Date: dueDate.current.value,
    });
  };

  return (
    <section className='w-4/5 mx-auto my-44 flex flex-col items-center pr-8'>
      <div>
        <div className='flex gap-4 justify-end mb-5'>
          <button className='btn border-none bg-white py-1 px-8 text-gray-700 text-lg font-semibold hover:text-gray-300'>
            Cancel
          </button>
          <button
            onClick={handleSave}
            className='btn border-none py-1 px-12 bg-gray-700 text-lg text-gray-200 hover:text-gray-300'
          >
            Save
          </button>
        </div>
        <label className='text-stone-500 text-xl inline-block mb-2 font-semibold'>
          Title
        </label>
        <input
          type='text'
          required
          ref={enteredTitle}
          className='input input-bordered w-full max-w-4xl max-h-11 bg-stone-100 text-black border-2  border-gray-200 mb-3'
        />
        <label className='text-stone-500 text-xl inline-block mb-2 font-semibold'>
          Description
        </label>
        <textarea
          required
          ref={enteredDescription}
          className='textarea w-full max-w-4xl max-h-32 textarea-bordered bg-transparent bg-stone-100 border-2 border-solid border-gray-200 text-black mb-3'
        />
        <label className='text-stone-500 text-xl inline-block mb-2 font-semibold'>
          DUE DATE
        </label>
        <input
          type='date'
          ref={dueDate}
          className='input w-full max-w-4xl max-h-20 bg-stone-200 text-black input-bordered '
        />
      </div>
    </section>
  );
};

export default AddProject;
