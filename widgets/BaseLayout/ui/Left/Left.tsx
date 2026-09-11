"use client"
import s from "./left.module.css"
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
interface LinkInterface {
    href:string;
    title:string;
}
export default function Left() {
    const links:LinkInterface[] = [
        {href:"main", title:"Main"},
        {href:"about", title:"About"},
        {href:"contact", title:"Contact"},{href:"books", title:"Books"},
        {href:"addVideo", title:"AddVideo"}];
    const router = useRouter()
    useEffect(() => {
        console.log(window.history)
    }, [router]);
    return (
        <aside id={"aside_id"} className={s.main}>
            <ul className={s.ul}><li key={"back"}><button onClick={()=>router.back()}>Back</button></li> {links.map((link:LinkInterface) =><li onClick={() => router.push(link.href)} className={s.li} key={link.title}><Link style={{width:"100%"}} href={link.href}  >{link.title}</Link> </li>)}<li><button onClick={()=>router.forward()}>Forward</button></li></ul>

        </aside>
    );
}
