import Head from "next/head";
import Link from "next/link";

export default function List() {
  return (
    <>
      <Head>
        <title>Flyout Menus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header role="banner">
          <h1>Step 1: Create a list</h1>
        </header>
        <p>
          Create a list that, when rendered without any styling can still be
          followed by a user.
        </p>
        <p>
          Note that in the below list is not rendered as a list of links by the
          accessibility tree, since these <b>&lt;a&gt;</b> tags lack href
          attributes.
        </p>
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
        <Link href="/menus/nav">Next Section</Link>
      </main>
    </>
  );
}
