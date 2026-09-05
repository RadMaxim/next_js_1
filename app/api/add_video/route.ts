export interface VideoInterface {
    link: string;
}
const videos:VideoInterface[] = []

export async function POST(req: Request) {
    const data:VideoInterface = await req.json();
    videos.push(data)
    console.log(videos)
    return videos;
}