import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Next.js App. All rights reserved.</p>
        <p className="mt-2 text-sm text-gray-400">
          Developed with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;