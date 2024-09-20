"use server";

import { cookies } from "next/headers";
import userLoginRequest from "../services/user-api";
import { redirect } from "next/navigation";

export default async function userLogin(email: string, password: string) {
  const { data, status } = await userLoginRequest(email, password);

  if (status !== 200 || !data.token) {
    return { error: true };
  }

  cookies().set("authToken", data.token, {
    path: "/edit",
    httpOnly: true,
    sameSite: "strict",
  });
  redirect("/edit");
}