import { useState } from "react";
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
          <h1>UI Chapter: Accessible Menus</h1>
        </header>
        <nav aria-label="main navigation">
          <ul>
            <li>
              <a href="/furniture">Futniture</a>
            </li>
            <li>
              <a href="/outdoor">Outdoor</a>
            </li>
            <li>
              <a href="/bed-and-bath">Bed & Bath</a>
            </li>
            <li>
              <a href="/rugs">Rugs</a>
            </li>
            <li>
              <a href="/decor-and-pillows">Decor & Pillows</a>
            </li>
            <li>
              <a href="/storage">Storage</a>
            </li>
            <li>
              <a href="/lighting">Lighting</a>
            </li>
            <li>
              <a href="/kitchen">Kitchen</a>
            </li>
            <li>
              <a href="/baby-and-kids">Baby & Kids</a>
            </li>
            <li>
              <a href="/renovation">Renovation</a>
            </li>
            <li>
              <a href="/appliances">Appliances</a>
            </li>
            <li>
              <a href="/pet">Pet</a>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
