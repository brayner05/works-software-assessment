import { useEffect, useState } from "react"
import {
    faCaretDown,
    faCaretRight,
    faTrash,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NoteThumbnail from "./NoteThumbnail"
import { Group, useNoteStore } from "../NoteStore"

interface Props {
    group: Group
}

const NoteGroup = ({ group }: Props) => {
    const deleteGroup = useNoteStore(state => state.deleteGroup)
    const notes = useNoteStore(state => state.notes).filter(
        note => note.groupId === group.id
    )

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <div className="mb-5">
            <div
                className="flex items-center justify-between text-gray-700 mb-2 text-sm"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className="flex">
                    <p className="mr-2 font-semibold">{group.name}</p>
                    <button onClick={() => setCollapsed(!collapsed)}>
                        <FontAwesomeIcon
                            icon={collapsed ? faCaretRight : faCaretDown}
                        />
                    </button>
                </div>
                {hovered ? (
                    <button onClick={() => deleteGroup(group.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                ) : undefined}
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
