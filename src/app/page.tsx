'use client';

import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { useState } from 'react';

const Page = () => {
  const [isShowingHeader, setIsShowingHeader] = useState(true);

  return (
    <div className='flex flex-col max-w-3xl w-full'>
      <Transition
        appear={true}
        show={isShowingHeader}
        enter='ease-out duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <h1 className='uppercase font-bold text-[1.75rem]'>
          Viktor <span className='text-blue-500'>Mellin</span>
        </h1>
        <p>I build things for the Web and Cfx platform.</p>
        <div className='mt-10 flex gap-5'>
          <Link
            target='_blank'
            href='https://github.com/viktormelin'
            className='uppercase p-2 bg-gray-600 rounded-md hover:bg-gray-700'
          >
            Github
          </Link>
          <Link
            target='_blank'
            href='https://linkedin.com/in/viktormelin/'
            className='uppercase p-2 bg-gray-600 rounded-md hover:bg-gray-700'
          >
            LinkedIn
          </Link>
          <Link
            target='_blank'
            href='https://dixxel.io'
            className='uppercase p-2 bg-gray-600 rounded-md hover:bg-gray-700'
          >
            CFX Scripts
          </Link>
          <Link href='/projects' className='uppercase p-2 bg-gray-600 rounded-md hover:bg-gray-700'>
            Personal Projects
          </Link>
        </div>
      </Transition>
    </div>
  );
};

export default Page;
