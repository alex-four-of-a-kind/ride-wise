import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Willkommen bei Ride-Wise</h1>
      <nav className='space-y-2'>
        <Link to='/cabrio' className='block text-blue-600'>Cabrio</Link>
        <Link to='/elektro' className='block text-blue-600'>Elektro</Link>
      </nav>
    </div>
  );
}
