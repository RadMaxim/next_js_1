
export default async function Home() {
    const data =await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     Books
        <div>List</div>
        <div>{data?.title}</div>
    </div>
  );
}
