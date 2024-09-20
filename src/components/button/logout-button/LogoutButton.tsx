"use client";

import logout from "@/actions/signin/logout";
import LogoutIcon from "@mui/icons-material/Logout";

export default function LogoutButton() {
  const handleClick = () => {
    logout();
  };

  return (
    <button onClick={handleClick}>
      <LogoutIcon className="text-white" />
    </button>
  );
}
