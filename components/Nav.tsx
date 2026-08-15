"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const APPLY_URL = "https://forms.gle/HXagfZE1e7NiD4KJ7";

const links = [
  { href: "/", label: "Home" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Materials & depth (apple-design §12): the hairline boundary only appears once
  // content is actually behind the translucent bar, not at rest.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} aria-label="Primary">
      <div className={`${styles.inner} container`}>
        <Link href="/" className={styles.brand}>
          <Image src="/logo-white.png" alt="" width={28} height={28} className={styles.logo} priority />
          <span>BioCraft</span>
        </Link>

        <ul className={styles.links}>
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.link} pressable ${active ? styles.active : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary ${styles.apply}`}
        >
          Apply
        </a>
      </div>
    </nav>
  );
}
