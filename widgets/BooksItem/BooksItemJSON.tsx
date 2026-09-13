"use client"
import {use} from "react";

type  Props = {
    result: Promise<{ title: string }[]>

 }


 export default function BooksItems({result}:Props) {
        const res = use(result)

  return (
    <div >
        {res.map((item, i) => (<div key={item.title}>{item.title}</div>))}
    </div>
  );
}
