
interface HomeParams {
  params: {
    // Укажите здесь поля, которые ожидаете получить
      videoID?: string;
    // или другие поля
  };
}

export default async function Home({ params }: HomeParams) {
  const video_data = await params;
  console.log("video_data", video_data);

  return (
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        Video {video_data.videoID}
      </div>
  );
}