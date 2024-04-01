import { faAngleLeft, faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useNoteStore } from "../../NoteStore"
import Page from "./Page"

const Editor = () => {
    const { id } = useParams()

    const allNotes = useNoteStore(state => state.notes)
    const note = allNotes.find(note => note.id === id)
    const updateNote = useNoteStore(state => state.updateNote)

    const [title, setTitle] = useState<string>(note ? note.title : "New Note")
    const [content, setContent] = useState<string>(note ? note.content : "")

    useEffect(() => {
        if (note) {
            updateNote(note.id, title, content, note.groupId)
            localStorage.setItem("notes", JSON.stringify(allNotes))
        }
    }, [title, content])

    return (
        <Page className="flex flex-col">
            <nav className="flex items-center justify-between text-xl mb-5">
                <Link to="/">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Link>
                <button>
                    <FontAwesomeIcon icon={faGear} />
                </button>
            </nav>
            <input
                className="w-full text-2xl font-semibold select-text"
                defaultValue={title}
                onChange={event => setTitle(event.target.value)}
            />
            <hr className="my-3" />
            <textarea
                className="resize-none w-full flex-1 select-text"
                defaultValue={content}
                onChange={event => setContent(event.target.value)}
            ></textarea>
        </Page>
    )
}

export default Editor
