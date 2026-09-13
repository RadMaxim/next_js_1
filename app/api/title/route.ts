import path from "node:path";
import fs from "fs/promises";

export async function GET(){
    const getParsedBooks = async () => {
        const filePath = path.join(process.cwd(),"public", "data.json");
        try {
            const data = await fs.readFile(filePath);
            return JSON.parse(data.toString());

        }
        catch {
            return []
        }
    }
    const books = await getParsedBooks();
    return Response.json(books);
}