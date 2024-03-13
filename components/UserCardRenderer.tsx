import { Suspense } from "react";
import AnimatePresenceWrapper from "./AnimatePresenceWrapper";
import MotionWrapper from "./MotionWrapper";
import UserCard from "./UserCard";

export default function UserCardRenderer(props:any){

    return (
         <AnimatePresenceWrapper>
            <section className="grid grid-cols-3 gap-4">
            {props.users.map((user:any) => (

                 <MotionWrapper key={user.id}>
                    <UserCard {...user} />

                </MotionWrapper>

            ))}
            </section>
          </AnimatePresenceWrapper>
    )
}
