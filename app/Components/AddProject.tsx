'use client';
import React, { useRef } from 'react';
import Modal from './Modal';

//////*DEFINING THEM INTERFACES*////////
interface Project {
  title: string;
  description: string;
  date: string;
}

interface AddProjectProps {
  saveHandler: (project: Project) => void;
  onCancel: () => void;
}

/*
THE MAIN COMPONENT FUNCTION
*/
const AddProject: React.FC<AddProjectProps> = ({ saveHandler, onCancel }) => {
  const modal = useRef<HTMLInputElement>(null);
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const date = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    const enteredTitle = title.current ? title.current.value : '';
    const enteredDescription = description.current
      ? description.current.value
      : '';
    const dueDate = date.current ? date.current.value : '';

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      dueDate.trim() === ''
    ) {
      if (modal.current) {
        modal.current.open();

        return;
      }
    }

    saveHandler({
      title: enteredTitle,
      description: enteredDescription,
      date: dueDate,
    });
  };

  return (
    <>
      <Modal ref={modal}>
        <h2 className=' text-4xl text-stone-800 font-bold mb-3 mr-14 '>
          {' '}
          Invalid Input{' '}
          {
            <img
              width='32'
              height='32'
              src='https://img.icons8.com/color/48/high-priority.png'
              alt='high-priority'
              className='inline  '
            />
          }
        </h2>
        <p className='text-stone-700 font-medium  mb-2'>
          Ooops .... looks like you forgot to enter a value.
        </p>
        <p className='text-stone-700 font-medium mb-4'>
          Please make sure you have provided valid value for each input field
        </p>
      </Modal>
      <section className='w-4/5 mx-auto my-44 flex flex-col items-center pr-8'>
        <div>
          <div className='flex gap-4 justify-end mb-5'>
            <button
              onClick={onCancel}
              className='btn border-none bg-white py-1 px-8 text-gray-700 text-lg font-semibold hover:text-gray-300'
            >
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
            ref={title}
            className='input input-bordered w-full max-w-4xl max-h-11 bg-stone-100 text-black border-2  border-gray-200 mb-3'
          />
          <label className='text-stone-500 text-xl inline-block mb-2 font-semibold'>
            Description
          </label>
          <textarea
            required
            ref={description}
            className='textarea w-full max-w-4xl max-h-32 textarea-bordered bg-transparent bg-stone-100 border-2 border-solid border-gray-200 text-black mb-3'
          />
          <label className='text-stone-500 text-xl inline-block mb-2 font-semibold'>
            DUE DATE
          </label>
          <input
            type='date'
            ref={date}
            className='input w-full max-w-4xl max-h-20 bg-stone-200 text-black input-bordered '
          />
        </div>
      </section>
    </>
  );
};

export default AddProject;
