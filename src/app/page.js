import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <a href="">Shush Pizza</a>
        <na>
          <Link href={""}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
          <Link href={""}>Login</Link>
        </na>
      </header>
    </>
  );
}
