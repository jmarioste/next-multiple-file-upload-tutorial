import fs from "fs";

export async function POST(req: Request) {
  const formData = await req.formData();
  const files = Array.from(formData.values());
  for (const file of files) {
    if (file instanceof Blob) {
      const buffer = Buffer.from(await file.arrayBuffer());
      fs.writeFileSync(`public/${file.name}`, buffer);
    }
  }
}
