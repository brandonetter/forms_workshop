"use client"
import { AnimatePresence} from "framer-motion"


export default function AnimatePresenceWrapper(props:any){

    return (
        <AnimatePresence mode="wait">
            {props.children}
        </AnimatePresence>
    )
}
