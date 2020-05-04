import { useState } from "react";
import Head from "next/head";

export default function Furniture() {
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
          <ul className="menuList">
            <li className="menuList-item">
              <a href="/furniture" className="menuList-link">
                Futniture
              </a>
              <section className="Submenu">
                <ul>
                  <li>
                    <a href="/nav-submenu">Living Room Furniture</a>
                  </li>
                  <li>
                    <a href="/nav-submenu">Bedroom Furniture</a>
                  </li>
                  <li>
                    <a href="/nav-submenu">Office</a>
                  </li>
                  <li>
                    <a href="/nav-submenu">Accent</a>
                  </li>
                  <li>
                    <a href="/nav-submenu">Kitchen & Dining</a>
                  </li>
                  <li>
                    <a href="/nav-submenu">Entry & Mudroom</a>
                  </li>
                  <li>
                    <a href="/nav-submenu">Game Room Furniture</a>
                  </li>
                </ul>
              </section>
            </li>
            <li className="menuList-item">
              <a href="/outdoor" className="menuList-link">
                Outdoor
              </a>
              <section className="Submenu">
                <ul>
                  <li>
                    <a href="/nav-submenu">Outdoor & Patio Furniture</a>
                  </li>
                  <li>
                    <a href="/nav-submenu">Outdoor Cooking & Tabletop</a>
                  </li>
                  <li>
                    <a href="/nav-submenu">Outdoor Shades</a>
                  </li>
                  <li>
                    <a href="/nav-submenu">Outdoor Décor</a>
                  </li>
                  <li>
                    <a href="/nav-submenu">Garden</a>
                  </li>
                  <li>
                    <a href="/nav-submenu">Outdoor Lighting</a>
                  </li>
                  <li>
                    <a href="/nav-submenu">Hot Tubs & Saunas</a>
                  </li>
                  <li>
                    <a href="/nav-submenu">Backyard Play</a>
                  </li>
                  <li>
                    <a href="/nav-submenu">Outdoor Heating & Cooling</a>
                  </li>
                  <li>
                    <a href="/nav-submenu">Outdoor Storage</a>
                  </li>
                </ul>
              </section>
            </li>
            <li className="menuList-item">
              <a href="#" className="menuList-link">
                Bed & Bath
              </a>
            </li>
            <li className="menuList-item">
              <a href="#" className="menuList-link">
                Rugs
              </a>
            </li>
            <li className="menuList-item">
              <a href="#" className="menuList-link">
                Decor & Pillows
              </a>
            </li>
            <li className="menuList-item">
              <a href="#" className="menuList-link">
                Storage
              </a>
            </li>
            <li className="menuList-item">
              <a href="#" className="menuList-link">
                Lighting
              </a>
            </li>
            <li className="menuList-item">
              <a href="#" className="menuList-link">
                Kitchen
              </a>
            </li>
            <li className="menuList-item">
              <a href="#" className="menuList-link">
                Baby & Kids
              </a>
            </li>
            <li className="menuList-item">
              <a href="#" className="menuList-link">
                Renovation
              </a>
            </li>
            <li className="menuList-item">
              <a href="#" className="menuList-link">
                Appliances
              </a>
            </li>
            <li className="menuList-item">
              <a href="#" className="menuList-link">
                Pet
              </a>
            </li>
          </ul>
        </nav>
      </main>
      <style jsx>
        {`
          .visuallyhidden {
            display: inline-block;
            transform: translateX(99999999999px);
          }
          .menuList {
            list-style: none;
            display: flex;
            justify-content: flex-start;
            padding: 0;
          }
          .menuList-link {
            padding: 16px;
            text-decoration: none;
          }
          .menuList-link:hover,
          .menuList-link:focus,
          .menuList-link[aria-current="page"] {
            border-bottom: 2px solid blue;
          }
        `}
      </style>
    </>
  );
}
