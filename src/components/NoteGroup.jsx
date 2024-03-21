import { useState } from "react"
import {
    faCaretDown,
    faCaretRight,
    faEllipsis,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NoteThumbnail from "./NoteThumbnail"
import { useNoteStore } from "../GlobalStore"

const NoteGroup = ({ group }) => {
    const [collapsed, setCollapsed] = useState(false)
    const notes = useNoteStore(state => state.notes).filter(note =>
        group.notes.includes(note.id)
    )

    return (
        <div className="mb-5">
            <div className="flex text-gray-700 mb-2 text-sm">
                <p className="mr-2 font-semibold">{group.name}</p>
                <button onClick={() => setCollapsed(!collapsed)}>
                    <FontAwesomeIcon
                        icon={collapsed ? faCaretRight : faCaretDown}
                    />
                </button>
            </div>
            {collapsed ? undefined : (
                <div>
                    {notes.map(note => (
                        <NoteThumbnail note={note} key={note.id} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default NoteGroup
