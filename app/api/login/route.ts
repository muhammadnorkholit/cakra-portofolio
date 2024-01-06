import { axios } from "@/helpers/Axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let form = await req.formData();
  let email = form.get("email");
  let password = form.get("password");

  let data = await axios(`/account?email=${email}&password=${password}`);
  console.log(data.data.length);

  if (data.data.length > 0) {
    const user = data.data[0];
    const cookieData = JSON.stringify(user);

    // Set cookie
    const response = NextResponse.json({ data: "ok" });
    response.cookies.set("auth", cookieData, {
      httpOnly: true, // Untuk menjaga cookie dari akses melalui JavaScript di browser
      maxAge: 60 * 60 * 24 * 7, // Contoh: Menetapkan masa berlaku cookie dalam detik (1 minggu)
      path: "/", // Path cookie (bisa disesuaikan sesuai kebutuhan)
    });

    return response;
  }
}
