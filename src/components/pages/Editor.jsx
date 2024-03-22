import { faAngleLeft, faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useNoteStore } from "../../NoteStore"
import Page from "./Page"

const Editor = () => {
    const { id } = useParams()

    // Get the loaded note
    const note = useNoteStore(state => state.notes).find(note => note.id === id)

    const [title, setTitle] = useState(note ? note.title : "New Note")
    const [content, setContent] = useState(note ? note.content : "")
    console.log(note)

    useEffect(() => {
        // updateNote(id, {title: title, content: content})
    })

    return (
        <Page>
            <nav className="flex items-center justify-between text-xl mb-5">
                <Link to="/">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Link>
                <button>
                    <FontAwesomeIcon icon={faGear} />
                </button>
            </nav>
            <input
                className="w-full text-2xl font-semibold mb-5 select-text"
                defaultValue={title}
                onChange={event => setTitle(event.target.value)}
            />
            <textarea
                className="resize-none w-full select-text"
                defaultValue={content}
                onChange={event => setContent(event.target.value)}
            ></textarea>
        </Page>
    )
}

export default Editor
