import EditProfile from "@/components/forms/edit-profile/EditProfile";
import getOneProfile from "../../actions/profile/getOneProfile";
import LogoutButton from "@/components/button/logout-button/LogoutButton";
import checkProtectedRoutes from "@/utils/checkProtectedRoutes";

export default async function EditPage() {
  checkProtectedRoutes();
  const profileId = "66edd9186183a3705f1aa8f4";
  const profile = await getOneProfile(profileId);

  return (
    <main className="bg-dark-gray min-h-screen">
      <div className="flex justify-end p-8">
        <LogoutButton />
      </div>
      <div className="flex p-8">
        <div className="flex flex-col gap-8 w-full p-6 bg-white rounded">
          <h1 className="text-3xl text-center">Edit Profile</h1>
          <EditProfile profile={profile} />
        </div>
      </div>
    </main>
  );
}
