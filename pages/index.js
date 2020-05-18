import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flyout Menus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <h1>UI Chapter: Accessible Content</h1>
        </header>
        <section className="Menus">
          <h3>Order:</h3>
          <ol>
            <li>List</li>
            <li>nav</li>
            <li>nav-labeled</li>
            <li>nav-styled</li>
            <li>nav-submenu</li>
            <li>nav-submenu-styled</li>
            <li>nav-submenu-state</li>
            <li>nav-submenu-long</li>
            <li>nav-submenu-button</li>
          </ol>
          <Link href="/menus/list">
            <a>View Menus</a>
          </Link>
        </section>
        <section className="Forms">
          <h3>Order:</h3>
          <ol>
            <li>Index</li>
            <li>structured</li>
            <li>semantic</li>
            <li>styled</li>
            <li>validated</li>
          </ol>
          <Link href="/forms/">
            <a>View Forms</a>
          </Link>
        </section>
      </main>
      <style jsx>{`
        main {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        header {
          flex: 0 0 100%;
        }
      `}</style>
    </>
  );
}
