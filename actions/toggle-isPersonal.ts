"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function toggleSwitch() {
	const cookieData = await cookies()
  const current = cookieData.get("isPersonal")?.value === "true";
  cookieData.set("isPersonal", (!current).toString(), {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
  });
  //redirect("/");
}
