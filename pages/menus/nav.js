import Link from "next/link";
import Head from "next/head";

export default function Nav() {
  return (
    <>
      <Head>
        <title>Flyout Menus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header role="banner">
          <h1>Step 2: wrap list in a &lt;nav&gt; element</h1>
        </header>
        <p>
          Reference the accessibility tree from last time and note the
          difference in this node. It now presents as a list within a nav
          instead of just a list.
        </p>
        <nav>
          <ul>
            <li>
              <a>Futniture</a>
            </li>
            <li>
              <a>Outdoor</a>
            </li>
            <li>
              <a>Bed & Bath</a>
            </li>
            <li>
              <a>Rugs</a>
            </li>
            <li>
              <a>Decor & Pillows</a>
            </li>
            <li>
              <a>Storage</a>
            </li>
            <li>
              <a>Lighting</a>
            </li>
            <li>
              <a>Kitchen</a>
            </li>
            <li>
              <a>Baby & Kids</a>
            </li>
            <li>
              <a>Renovation</a>
            </li>
            <li>
              <a>Appliances</a>
            </li>
            <li>
              <a>Pet</a>
            </li>
          </ul>
        </nav>
        <Link href="/menus/nav-labeled">Next Section</Link>
      </main>
    </>
  );
}
