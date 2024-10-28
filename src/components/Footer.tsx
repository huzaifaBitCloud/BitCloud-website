import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white p-4 shadow-lg border-t bottom-0 fixed w-full">
      <div className="w-full flex items-center justify-center">
        <span className="text-sm text-center ">
          © 2024 <Link href="https://flowbite.com/" className="hover:underline">BitCloud Solution</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
