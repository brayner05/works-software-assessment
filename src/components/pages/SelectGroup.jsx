import { useGroupStore } from "../../GlobalStore"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
import Page from "./Page"

const SelectGroup = () => {
    const groups = useGroupStore(state => state.groups)
    const addGroup = useGroupStore(state => state.addGroup)

    return (
        <Page className="flex flex-col justify-between">
            <div>
                <nav className="mb-5">
                    <Link to="/" className="font-semibold text-xl">
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </Link>
                </nav>
                <span className="block font-semibold text-2xl">
                    Choose a group
                </span>
                <button className="text-blue-500 mb-5">New group</button>
                <select className="block w-full px-3 py-2 bg-transparent rounded-md border-2 border-gray-400 focus:border-blue-500">
                    {groups.map(group => (
                        <option>{group.name}</option>
                    ))}
                </select>
            </div>
            <div className="flex justify-end">
                <Link
                    to={`/editor/${uuidv4()}`}
                    className="bg-green-500 text-white px-3 py-2 rounded-md"
                >
                    Create Note
                </Link>
            </div>
        </Page>
    )
}

export default SelectGroup
