import { useState } from "react"

interface Props {
    title: string
    onOk: (value: string) => void
}

const PromptBox = ({ title, onOk }: Props) => {
    const [value, setValue] = useState<string>("")
    return (
        <div className="flex items-center justify-center w-full h-full fixed top-0 left-0 bg-white bg-opacity-full">
            <div>
                <span className="block">{title}</span>
                <input
                    className="block w-full px-3 bg-transparent rounded-md border border-gray-400 focus:border-blue-500"
                    type="text"
                    onChange={event => setValue(event.target.value)}
                />
                <div className="flex justify-end">
                    <button className="" onClick={() => onOk(value)}>
                        Ok
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PromptBox
