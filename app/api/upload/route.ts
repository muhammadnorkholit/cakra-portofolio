import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = async (req: any, res: any) => {
  const formData = await req.formData();
  const file = formData.get("file");
  const imgName = formData.get("imgName");

  try {
    if ((typeof imgName === "string" && imgName != "") || imgName != null) {
      const uploadDir = path.join(process.cwd(), "public");
      const filePathToDelete = path.join(uploadDir, imgName);
      fs.unlinkSync(filePathToDelete);
    }
    // Set the upload directory
    let fileName = new Date().getTime() + "_" + file.name;
    const uploadDir = path.join(process.cwd(), "public/uploads");
    const filePath = path.join(uploadDir, fileName);
    fs.writeFileSync(filePath, Buffer.from(await file.arrayBuffer()));

    return NextResponse.json("/uploads/" + fileName);
  } catch (error) {
    console.log(error);

    return NextResponse.json({ done: "error" });
  }
};
