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
      </main>
    </>
  );
}

// Notes: 
// Reference the accessibility tree from last time and note the difference in this node between a list and a list within a nav.
// <a> tags without href attributes are not recognized by screen readers.
