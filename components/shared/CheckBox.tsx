import { X, Check } from "lucide-react";


interface CheckBoxProps extends React.PropsWithChildren<{}> {
    value: string;
    category: string;

    }

export default function CheckBox ({value,category,children}: CheckBoxProps){
    const id = `${category}-${value}`;
    return (
        <label className="hover:bg-blue-300/20 cursor-pointer checkbox-style has-[:checked]:border-blue-300 border-2 p-2 rounded-lg flex justify-center items-center " htmlFor={id}>
        <input type="checkbox" className="peer hidden" id={id}  value={value} />

        <X size={18} className="stroke-black/30 peer-checked:hidden inline" />
        <Check size={18} className="stroke-blue-400 hidden peer-checked:inline"/>
        <span className="ml-1 select-none">
            {children}
        </span>
      </label>
    )
}
