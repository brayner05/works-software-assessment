import { useGroupStore } from "../../GlobalStore"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { v4 as uuidv4 } from "uuid"
import { useState } from "react"

const SelectGroup = () => {
    const groups = useGroupStore(state => state.groups)
    const addGroup = useGroupStore(state => state.addGroup)
    const [groupSelected, setGroupSelected] = useState(false)

    return (
        <div className="flex flex-col flex-1">
            <nav className="flex items-center justify-between text-xl mb-5">
                <Link to="/">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Link>
            </nav>
            <div className="flex-1 ">
                <span className="block text-2xl font-semibold">
                    Select a class
                </span>
                <button className="text-blue-400 rounded-md text-md">
                    New Class
                </button>
                <ul className="py-5 w-full overflow-auto">
                    {groups.map(group => (
                        <li className="p-2">{group.name}</li>
                    ))}
                    <li className="p-2">class</li>
                    <li className="p-2">class</li>
                    <li className="p-2">class</li>
                    <li className="p-2">class</li>
                    <li className="p-2">class</li>
                    <li className="p-2">class</li>
                </ul>
                <div className="flex items-center justify-end">
                    {groupSelected ? (
                        <Link
                            to={`/editor/${uuidv4()}`}
                            className="text-white bg-green-500 rounded-md px-5 py-1.5"
                        >
                            Create Note
                        </Link>
                    ) : (
                        <span className="bg-gray-500 text-white cursor-not-allowed px-5 py-1.5 rounded-md">
                            Create Note
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SelectGroup
