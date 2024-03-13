export default function ProgressBar({ formPosition }: { formPosition: number }){
    return (
        <div className="w-full h-4 bg-black absolute top-0 left-0">
        <div className="h-4 bg-blue-500 transition-all" style={{width: `${(formPosition/3)*100}%`}}></div>
      </div>
    )
}
