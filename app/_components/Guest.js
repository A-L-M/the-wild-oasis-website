"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function User() {
  // const session = await auth(); // This makes the route dynamic. Since the navigation is on every page, every page becomes dynamic

  // We can instead use the SessionProvider
  const { data: session } = useSession();

  return (
    <li>
      {session?.user?.image ? (
        <Link
          href="/account"
          className="hover:text-accent-400 transition-colors flex items-center gap-4"
        >
          <img
            src={session.user.image}
            alt={session.user.name}
            className="h-8 rounded-full"
            referrerPolicy="no-referrer"
          />
          <span>Guest area</span>
        </Link>
      ) : (
        <Link
          href="/account"
          className="hover:text-accent-400 transition-colors"
        >
          Guest area
        </Link>
      )}
    </li>
  );
}
