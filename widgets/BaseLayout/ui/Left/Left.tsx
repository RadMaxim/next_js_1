import s from "./left.module.css"
import Link from "next/link";
interface LinkInterface {
    href:string;
    title:string;
}
export default function Left() {
    const links:LinkInterface[] = [
        {href:"main", title:"Main"},
        {href:"about", title:"About"},
        {href:"contact", title:"Contact"},
        {href:"addVideo", title:"AddVideo"}];
    return (
        <aside id={"aside_id"} className={s.main}>
            <ul className={s.ul}> {links.map((link:LinkInterface) =><li className={s.li} key={link.title}><Link style={{width:"100%"}} href={link.href}  >{link.title}</Link> </li>)}</ul>

        </aside>
    );
}
