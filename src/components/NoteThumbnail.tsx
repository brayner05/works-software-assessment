import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis, faShare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Note, useNoteStore } from "../NoteStore"

interface Props {
    note: Note
}

const NoteThumbnail = ({ note }: Props) => {
    const [ctxMenuActive, setCtxMenuActive] = useState<boolean>(false)
    const deleteNote = useNoteStore(state => state.deleteNote)

    return (
        <div className="text-white bg-secondary relative cursor-pointer px-5 py-2 rounded-lg flex items-center mb-2">
            <Link
                to={`/editor/${note.id}`}
                className="flex-1 font-medium font-body text-sm"
            >
                {note.title}
            </Link>
            <button onClick={() => setCtxMenuActive(!ctxMenuActive)}>
                <FontAwesomeIcon icon={faEllipsis} />
            </button>
            {ctxMenuActive ? (
                <ul className="absolute top-full right-0 py-2 px-3 rounded-lg bg-secondary z-50">
                    <li>
                        <button
                            className="mb-2"
                            onClick={() => deleteNote(note.id)}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </li>
                    <li>
                        <button>
                            <FontAwesomeIcon icon={faShare} />
                        </button>
                    </li>
                </ul>
            ) : undefined}
        </div>
    )
}

export default NoteThumbnail
