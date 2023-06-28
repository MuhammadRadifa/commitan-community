import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Commitan',
  description: 'Commitan Community',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <section className='flex h-screen items-center justify-center px-4'>{children}</section>;
}
