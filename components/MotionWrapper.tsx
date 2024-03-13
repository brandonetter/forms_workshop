"use client"
import {motion} from "framer-motion"

export default function MotionWrapper(props:any){
    const isJavaScriptEnabled = typeof window !== 'undefined'
    return (
        <motion.div
            layoutId={props.children}
            initial={{ opacity: isJavaScriptEnabled ? 0 : 1, y: 0 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.1 }}

        >
            {props.children}
        </motion.div>
    )
}
