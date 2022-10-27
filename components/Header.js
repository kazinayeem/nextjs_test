import React, { useEffect, useState } from "react";
import Link from "next/link";



const Header = () => {
  const [auth, setauth] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setauth(true);
    } else {
      setauth(false);
    }
  }, []);

  return (
    <div>
      <ul style={{ display: "inline-block", padding: "10px" }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        {auth && (
          <li>
            <Link href="/admin">Admin</Link>
          </li>
        )}
        <li>
          <Link href="/about">About</Link>
        </li>
        {!auth && (
          <li>
            <Link href="/login">Log In</Link>
          </li>
        )}
        <li>
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
