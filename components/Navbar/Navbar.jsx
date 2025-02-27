import Link from "next/link";
import React from "react";
import css from "./Navbar.module.scss";


export default function Navbar() {
  return <header className={`section ${css.navbar}`}>
    <div className="sectionInner">
      <div className={css.entries} >
        <Link href="/" className="custom">Home</Link>
      </div>
    </div>
  </header>;
}

