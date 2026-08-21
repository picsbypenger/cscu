"use client";
import { useRef } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/join-our-team", label: "Get Involved" },
];

export function DesktopNav() {
  const pathname = usePathname();
  
  return (
    <nav className={styles.desktopNav}>
      {navItems.map((item) => (
        <Link 
          key={item.href} 
          href={item.href}
          className={pathname === item.href ? styles.activeLink : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handleLinkClick = () => {
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };
  
  return (
    <nav className={styles.mobileNavItems}>
      {navItems.map((item) => (
        <Link 
          key={item.href} 
          href={item.href}
          className={pathname === item.href ? styles.activeLink : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
    <details className={styles.mobileMenu} ref={detailsRef}>
      <summary className={styles.menuIcon}>☰</summary>
      <nav className={styles.mobileNavItems}>
        {navItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href}
            className={pathname === item.href ? styles.activeLink : undefined}
            onClick={handleLinkClick}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </details>
  );
}

