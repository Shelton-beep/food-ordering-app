import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between">
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link className="text-primary font-semibold text-2xl" href="">
            SHUSHU PIZZA
          </Link>
          <Link href={""}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
        </nav>
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link href={""}>Login</Link>
          <Link
            href={""}
            className="bg-primary text-white rounded-full px-8 py-2"
          >
            Register
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
