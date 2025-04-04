import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-600 p-3 rounded-full shadow-lg w-fit mx-auto ">
      <ul className="flex space-x-6 px-6 text-white">
        <li>
          <Link href="/">
            <span className="cursor-pointer">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className="cursor-pointer">About</span>
          </Link>
        </li>
        <li>
          <Link href="/project">
            <span className="cursor-pointer">Projects</span>
          </Link>
        </li>
        <li>
          <Link href="/FAQs">
            <span className="cursor-pointer">FAQ's About me </span>
          </Link>
        </li>
        {/* <li>
          <Link href="/product">
            <span className="cursor-pointer">Product</span>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
