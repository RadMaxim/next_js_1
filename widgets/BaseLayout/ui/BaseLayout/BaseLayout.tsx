import s from "./baseLayout.module.css"
import Header from "@/widgets/BaseLayout/ui/Header/Header";
import Left from "@/widgets/BaseLayout/ui/Left/Left";
import TestServerComponents from "@/widgets/serversComponents/testServerComponents";
export default function BaseLayout ({children}: {children: React.ReactNode}) {
    return (
        <div className={s.main}>
            <Header/>
            <Left>
                <TestServerComponents/>
            </Left>
            {children}
        </div>
    );
}
