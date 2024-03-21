import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NoteGroup from "../NoteGroup"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useGroupStore } from "../../GlobalStore"
import { v4 as uuidv4 } from "uuid"
import Page from "./Page"

const Home = () => {
    const groups = useGroupStore(state => state.groups)
    return (
        <Page className="relative">
            <h1 className="mb-5 text-3xl font-semibold font-display">Notes</h1>
            {groups.map(group => (
                <NoteGroup group={group} key={group.id} />
            ))}
            <Link
                to="/select-group"
                className="text-white bg-secondary flex items-center justify-center rounded-full text-xl p-4 absolute bottom-0 right-0"
            >
                <FontAwesomeIcon icon={faPlus} />
            </Link>
        </Page>
    )
}

export default Home
