'use client';
import React from 'react';
import Image from 'next/image';
import Button from './Button';

interface HomeProps {
  newproject: () => void;

  isHomePage: boolean;
}

const HomePage: React.FC<HomeProps> = ({ newproject }) => {
  interface Props {
    StaticImageData: 'string';
  }

  return (
    <div className='w-4/5 mx-auto my-44 '>
      <div className='flex flex-col items-center pr-8'>
        <Image
          src='/no-projects.png'
          alt='notebook image'
          width={90}
          height={90}
          className='mb-6 mr-20'
        />
        <p
          className='text-stone-500 text-2xl font-bold mb-6 mr-14
        '
        >
          No Project Selected
        </p>
        <p className='text-gray-400 font-medium text-xl mb-12'>
          Select a project or get started with a new one
        </p>

        <Button isHomePage={true} addproject={newproject}>
          Create new project
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
