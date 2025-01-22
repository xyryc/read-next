import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const user = await getUser();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?post_login_redirect_url=/profile");
  }

  console.log(user);

  return (
    <div className="text-center">
      <div className="p-6 border max-w-md mx-auto rounded-md my-10">
        <h2 className="font-bold text-2xl mb-6">Welcome to your profile!</h2>
        <h4>
          {user?.given_name} {user?.family_name}
        </h4>
        <p className="font-mono">{user?.email}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
