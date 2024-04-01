import { useState } from "react"

interface Props {
    title: string
    onOk: (value: string) => void
}

const PromptBox = ({ title, onOk }: Props) => {
    const [value, setValue] = useState<string>("")
    return (
        <div className="flex items-center justify-center w-full h-full fixed top-0 left-0 bg-white bg-opacity-75">
            <div className="bg-white px-5 py-3 shadow-md rounded-md">
                <span className="block text-xl">{title}</span>
                <input
                    className="block w-full px-3 my-5 bg-transparent rounded-md border border-gray-400 focus:border-blue-500"
                    type="text"
                    onChange={event => setValue(event.target.value)}
                />
                <div className="flex justify-end">
                    {value !== "" ? (
                        <button
                            className="bg-green-500 text-white px-5 py-0.5 rounded-md"
                            onClick={() => onOk(value)}
                        >
                            Ok
                        </button>
                    ) : (
                        <span className="cursor-not-allowed bg-gray-500 text-white px-5 py-0.5 rounded-md">
                            Ok
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PromptBox
