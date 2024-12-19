import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <div className="navbar navbar-center bg-slate-700 rounded-md flex justify-between">
        <details className="dropdown">
          <summary className="btn m-2">open or close</summary>
          <ul className="menu dropdown bg-base-100 ">
            <li>
              <Link href="/users">Users</Link>
            </li>
            <li>
              <ProductCard />
            </li>
          </ul>
        </details>
        <div>
        <input type="text" placeholder="Search" className="input w-full max-w-xs" />
        </div>
      </div>
      <h1>Hello world</h1>
      <p>How is your day?</p>
      <div className="justify-self-center card-body rounded-md w-80 h-72 bg-sky-900 ">
        <div className="border-2 h-40"></div>
        <button className="btn btn-active btn-ghos mt-4">love</button>
      </div>
    </main>
  );
}
