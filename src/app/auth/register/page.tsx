import Image from 'next/image';
import { Toaster } from 'react-hot-toast';
import CommitanLogo from '../../../../public/images/commitan-logo.svg';
import RegisterSection from './registerSection';

export default function Register() {
  return (
    <div className='common-bg flex w-full max-w-sm flex-col items-center rounded-lg p-10'>
      <Toaster />
      <a href={'/'} className='mb-20 flex items-center gap-2'>
        <div className='h-7 w-7'>
          <Image src={CommitanLogo} className='w-full' alt='Commitan Logo' />
        </div>
        <h1 className='text-xl font-bold'>Commitan.</h1>
      </a>
      <h2 className='mb-10 text-center text-xl font-semibold'>Selamat datang di Commitan</h2>
      <RegisterSection />
    </div>
  );
}
