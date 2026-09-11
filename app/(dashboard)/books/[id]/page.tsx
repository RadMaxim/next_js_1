 type  Props = {
    params:Promise<{id:string}>
     searchParams: Promise<{[key:string]:string}>
 }
export default async function Home(props:Props) {
    const params = await props.params
    const searchParams = await props.searchParams
    const data =await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
        .then(response => response.json())

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     Books
        <div>ID</div>
        <div>{data.title}</div>
        <div>{params.id}</div>
        <div>{searchParams.tit}</div>
    </div>
  );
}
