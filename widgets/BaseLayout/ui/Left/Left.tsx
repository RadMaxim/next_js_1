"use client"
import s from "./left.module.css"
import Link from "next/link";
import {useRouter} from "next/navigation";
import {ReactNode} from "react";
interface LinkInterface {
    href:string;
    title:string;
}
export default function Left({children}: {children: ReactNode}) {
    const links:LinkInterface[] = [
        {href:"main", title:"Main"},
        {href:"about", title:"About"},
        {href:"contact", title:"Contact"},{href:"books", title:"Books"},{href:"booksall", title:"All Books"},
        {href:"addVideo", title:"AddVideo"}];
    const router = useRouter()

    return (
        <aside id={"aside_id"} className={s.main}>
            <ul className={s.ul}><li key={"back"}><button onClick={()=>router.back()}>Back</button></li> {links.map((link:LinkInterface) =><li onClick={() => router.push(link.href)} className={s.li} key={link.title}><Link style={{width:"100%"}} href={link.href}  >{link.title}</Link> </li>)}<li><button onClick={()=>router.forward()}>Forward</button></li></ul>
            {children}
        </aside>
    );
}
