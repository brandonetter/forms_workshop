
export default async function UserCard(props:any){
    console.log("hey")
    const userLetter = props.name.charAt(0).toUpperCase();

    return (
        <div className="flex gap-2 border user-card w-72">
            <span className="bg-white text-black font-mono font-bold p-2 rounded-full shrink-0 size-12 border flex justify-center items-center text-4xl">
                {userLetter}
            </span>
            <section className="flex flex-col text-sm w-full">
            <div className="flex justify-between">
            <span className="text-lg">
                {props.name}
            </span>
            <span>
                {props.role}
            </span>
            </div>
            <span className="text-xs text-white/50">
                {props.email}
            </span>

            </section>
        </div>
    )
}
