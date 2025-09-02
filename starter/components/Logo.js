import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  // Next forces us to specify a height and width for images to avoid layout shifts

  // Or we can import the image to let Next analyze it first
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image
        src={logo}
        height="60"
        width="60"
        quality={100}
        alt="The Wild Oasis logo"
      />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
