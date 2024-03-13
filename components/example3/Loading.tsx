import { Loader } from "lucide-react";

export default function Loading({ isPending }: { isPending: boolean }) {
    const baseclass = "pointer-events-none absolute top-0 left-0 h-screen w-screen flex justify-center items-center"
    return (
        <div className={`${baseclass} ${isPending && 'backdrop-blur-[1px]'} transition-all`}>
        <Loader
        style={{opacity: isPending ? 1 : 0}}
        className="animate-spin z-100 size-20 " />
        </div>
    )
}
