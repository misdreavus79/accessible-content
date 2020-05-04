import { useState } from "react";
import Head from "next/head";

export default function Furniture() {
  const [isOpen, setIsOpen] = useState("");
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
            <li className="menuList-item has-submenu">
              <a href="/furniture" className="menuList-link" aria-expanded="false">
                Futniture
              </a>
              <section className="Submenu">
                <ul className="Submenu-list">
                  <li className="Submenu-listItem">
                    <a href="/nav-submenu" className="Submenu-link">
                      Living Room Furniture
                    </a>
                  </li>
                  <li className="Submenu-listItem">
                    <a href="/nav-submenu" className="Submenu-link">
                      Bedroom Furniture
                    </a>
                  </li>
                  <li className="Submenu-listItem">
                    <a href="/nav-submenu" className="Submenu-link">
                      Office
                    </a>
                  </li>
                  <li className="Submenu-listItem">
                    <a href="/nav-submenu" className="Submenu-link">
                      Accent
                    </a>
                  </li>
                  <li className="Submenu-listItem">
                    <a href="/nav-submenu" className="Submenu-link">
                      Kitchen & Dining
                    </a>
                  </li>
                  <li className="Submenu-listItem">
                    <a href="/nav-submenu" className="Submenu-link">
                      Entry & Mudroom
                    </a>
                  </li>
                  <li className="Submenu-listItem">
                    <a href="/nav-submenu" className="Submenu-link">
                      Game Room Furniture
                    </a>
                  </li>
                </ul>
              </section>
            </li>
            <li className="menuList-item has-submenu">
              <a href="/outdoor" className="menuList-link" aria-expanded="false">
                Outdoor
              </a>
              <section className="Submenu">
                <ul className="Submenu-list">
                  <li className="Submenu-listItem">
                    <a href="/nav-submenu" className="Submenu-link">
                      Outdoor & Patio Furniture
                    </a>
                  </li>
                  <li className="Submenu-listItem">
                    <a href="/nav-submenu" className="Submenu-link">
                      Outdoor Cooking & Tabletop
                    </a>
                  </li>
                  <li className="Submenu-listItem">
                    <a href="/nav-submenu" className="Submenu-link">
                      Outdoor Shades
                    </a>
                  </li>
                  <li className="Submenu-listItem">
                    <a href="/nav-submenu" className="Submenu-link">
                      Outdoor Décor
                    </a>
                  </li>
                  <li className="Submenu-listItem">
                    <a href="/nav-submenu" className="Submenu-link">
                      Garden
                    </a>
                  </li>
                  <li className="Submenu-listItem">
                    <a href="/nav-submenu" className="Submenu-link">
                      Outdoor Lighting
                    </a>
                  </li>
                  <li className="Submenu-listItem">
                    <a href="/nav-submenu" className="Submenu-link">
                      Hot Tubs & Saunas
                    </a>
                  </li>
                  <li className="Submenu-listItem">
                    <a href="/nav-submenu" className="Submenu-link">
                      Backyard Play
                    </a>
                  </li>
                  <li className="Submenu-listItem">
                    <a href="/nav-submenu" className="Submenu-link">
                      Outdoor Heating & Cooling
                    </a>
                  </li>
                  <li className="Submenu-listItem">
                    <a href="/nav-submenu" className="Submenu-link">
                      Outdoor Storage
                    </a>
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
          .menuList-item {
            position: relative;
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
          .Submenu {
            display: flex;
            justify-content: space-between;
            padding: 16px 32px;
          }
          .Submenu-list {
            list-style: none;
            padding: 0;
          }
          .Submenu-listItem {
            margin-bottom: 9px;
          }
          .has-submenu.open,
          .Submenu {
            background-color: #e9e8e8;
          }
        `}
      </style>
    </>
  );
}
