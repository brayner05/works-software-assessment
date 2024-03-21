import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NoteGroup from "../NoteGroup"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useGroupStore } from "../../GlobalStore"

const Home = () => {
    const groups = useGroupStore(state => state.groups)

    return (
        <div className="w-full flex-1 relative">
            <h1 className="mb-5 text-3xl font-semibold font-display">Notes</h1>
            {groups.map(group => (
                <NoteGroup group={group} key={group.id} />
            ))}
            <Link
                to="/editor"
                className="text-white bg-secondary flex items-center justify-center rounded-full text-xl p-4 absolute bottom-0 right-0"
            >
                <FontAwesomeIcon icon={faPlus} />
            </Link>
        </div>
    )
}

export default Home
