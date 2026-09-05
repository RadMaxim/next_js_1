import s from "./NotFoundPage.module.css"
import Image from "next/image";
import img from "@/public/img/404.png"
export default function NotFoundPage () {
    return (
        <div className={s.main}>
            <Image src={img} alt={"Not found"} />
        </div>
    );
}
