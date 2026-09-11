
type  Props = {
    data:{title:string}[]

 }


 export default  function BooksItems({data}:Props) {


  return (
    <div >
        {data.map((item, i) => (<div key={item.title}>{item.title}</div>))}
    </div>
  );
}
