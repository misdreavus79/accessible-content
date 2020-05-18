import { useState } from "react";
import Head from "next/head";

export default function Furniture() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const handleFocusIn = (e) => {
    const { currentTarget } = e;
    setIsOpen(true);
    setActiveId(currentTarget.id);
  };
  const handleFocusOut = () => {
    setIsOpen(false);
    setActiveId("");
  };
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
            <li
              className={`menuList-item has-submenu ${
                isOpen && activeId === "list-item-0" ? "open" : ""
              }`}
              id="list-item-0"
              onMouseOver={handleFocusIn}
              onMouseOut={handleFocusOut}
              onFocus={handleFocusIn}
            >
              <a
                href="/furniture"
                className="menuList-link"
                aria-expanded={isOpen && activeId === "list-item-0"}
              >
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
            <li
              className={`menuList-item has-submenu ${
                isOpen && activeId === "list-item-1" ? "open" : ""
              }`}
              id="list-item-1"
              onMouseOver={handleFocusIn}
              onMouseOut={handleFocusOut}
              onFocus={handleFocusIn}
            >
              <a
                href="/outdoor"
                className="menuList-link"
                aria-expanded={isOpen && activeId === "list-item-1"}
              >
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
            <li
              className={`menuList-item has-submenu ${
                isOpen && activeId === "list-item-2" ? "open" : ""
              }`}
              id="list-item-2"
              onMouseOver={handleFocusIn}
              onMouseOut={handleFocusOut}
              onFocus={handleFocusIn}
            >
              <a
                href="/nav-submenu-long"
                className="menuList-link"
                aria-expanded={isOpen && activeId === "list-item-2"}
              >
                Bed & Bath
              </a>
              <section className="Submenu">
                <ul className="Submenu-list">
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-heading">
                      <h3>Bedding</h3>
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Comforters & Sets
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Duvet Covers & Sets
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Quilts, Coverlets, & Sets
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Blankets & Throws
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-heading">
                      <h3>Bedding Basics</h3>
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Sheets & Pillowcases
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Mattress Pads & Toppers
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Pillows
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Down Comforters & Duvet Inserts
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-heading">
                      <h3>Bath Accessories</h3>
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Bathroom Mirrors
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Bath Accessory Sets
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Soap Dispensers
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-heading">
                      <h3>Mattresses & Foundations</h3>
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Memory Foam Mattresses
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Box Springs & Foundations
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-heading">
                      <h3>Bathroom Storage</h3>
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Hampers & Baskets
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Over-The-Toilet Storage
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-heading">
                      <h3>Bath Linens</h3>
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Shower Curtains
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Bath Rugs & Mats
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Bath Towels
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-heading">
                      <h3>Bathroom Fixtures</h3>
                    </a>
                  </li>
                  <li>
                    <a href="/nav-submenu-long" className="Submenu-link">
                      Bathroom Vanities
                    </a>
                  </li>
                  <li>
                    <a
                      href="/nav-submenu-long"
                      className="Submenu-link"
                      onBlur={handleFocusOut}
                    >
                      Bathroom Faucets
                    </a>
                  </li>
                </ul>
              </section>
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
            padding: 9px;
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
            display: none;
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
          .has-submenu.open > .Submenu {
            display: flex;
            position: absolute;
            left: 0;
            min-width: 500px;
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
