"use client";

import { useEffect } from "react";

export function ViewportFix() {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Set initially
    setVh();

    // We only update on width changes. Mobile browsers fire 'resize' when 
    // the address bar hides/shows (which changes height), so ignoring height 
    // changes prevents the layout jump.
    let lastWidth = window.innerWidth;
    const onResize = () => {
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        setVh();
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return null;
}

