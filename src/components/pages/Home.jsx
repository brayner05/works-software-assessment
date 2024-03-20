import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NoteGroup from "../NoteGroup"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "react-router-dom"

// const notes = {
//     group_uuid_here: {
//         note_uuid_here: {
//             title: String,
//             content: String,
//         },
//     },
// }

const Home = () => {
    return (
        <div className="w-full flex-1 relative">
            <h1 className="mb-5 text-3xl font-semibold font-display">Notes</h1>
            <NoteGroup notes={null} />
            <NoteGroup notes={null} />
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
