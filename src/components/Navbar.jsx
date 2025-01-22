import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();
  console.log(user);

  return (
    <div className="border-b-2">
      <div className="flex items-center justify-between py-6  container mx-auto">
        <div>Read Next</div>

        <div className="flex items-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>

          {user ? (
            <>
              <Link href="/api/auth/logout">Log Out</Link>
            </>
          ) : (
            <>
              <Link href="/api/auth/login">Log In</Link>
              <Link href="/api/auth/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
