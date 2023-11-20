import Link from "next/link";

export default function Home() {
  return (
    <main>
      <button className="btn">
        <Link href="/slides">Show slides</Link>
      </button>
    </main>
  );
}
