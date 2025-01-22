import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t-2 text-center py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Read Next</h1>

        <div className="flex items-center gap-12 justify-center">
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
