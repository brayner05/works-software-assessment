import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NoteGroup from "../NoteGroup"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useNoteStore } from "../../NoteStore"
import Page from "./Page"

const Home = () => {
    const groups = useNoteStore(state => state.groups)
    return (
        <Page className="relative">
            <h1 className="mb-5 text-3xl font-semibold font-display">Notes</h1>
            {groups.map(group => (
                <NoteGroup group={group} key={group.id} />
            ))}
            <Link
                to="/select-group"
                className="text-white bg-secondary min-w-5 min-h-5 flex items-center justify-center rounded-full text-xl p-4 fixed bottom-5 right-5"
            >
                <FontAwesomeIcon icon={faPlus} />
            </Link>
        </Page>
    )
}

export default Home
