import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4">
      <div className="pt-6 mx-auto text-center border-t border-gray-300">
        <p>&copy; {new Date().getFullYear()} Electronics Hub. All rights reserved.</p>
        <p className="mt-2 text-sm text-gray-400">
          Developed with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;