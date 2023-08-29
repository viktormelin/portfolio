import Breadcrumbs from '@/components/Breadcrumbs';
import { IconChevronLeft } from '@tabler/icons-react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className='h-screen max-w-3xl w-full flex flex-col py-5'>
      <div className='flex items-center gap-2 hover:text-blue-500 uppercase'>
        <IconChevronLeft size={20} />
        <Link href='/'>Navigate back home</Link>
      </div>
      <div className='mt-5'>
        <div className='flex flex-col gap-1 p-2 bg-gray-900 rounded-md'>
          <h2 className='uppercase font-bold text-2xl'>Movies</h2>
          <p>Sort of a IMDB clone. Built with the use of TMDB as data API (The Movie Database)</p>
          <Link
            href='https://github.com/dixxel/dixxel-movies'
            target='_blank'
            className='uppercase p-2 w-fit bg-gray-600 rounded-md hover:bg-gray-700'
          >
            Github Repo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
