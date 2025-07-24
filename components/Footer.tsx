"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mt-auto text-center">
      2025 &copy;{" "}
      <Link href="https://takumayumi.com/" target="_blank">
        takumayumi
      </Link>
    </footer>
  );
}
