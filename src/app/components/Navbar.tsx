import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <Link href="/">Home</Link>
      <div>
        <Link href="/slides">All slides</Link>
      </div>
    </div>
  );
};

export default Navbar;
