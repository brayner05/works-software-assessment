import { faAngleLeft, faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"

const Editor = () => {
    const { id } = useParams()
    const [title, setTitle] = useState("New Note")
    const [content, setContent] = useState("")

    return (
        <div className="flex-1">
            <nav className="flex items-center justify-between text-xl mb-5">
                <Link to="/">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Link>
                <button>
                    <FontAwesomeIcon icon={faGear} />
                </button>
            </nav>
            <input
                className="w-full text-2xl font-semibold mb-5"
                defaultValue={title}
                onChange={event => setTitle(event.target.value)}
            />
            <textarea
                className="resize-none w-full"
                defaultValue={content}
                onChange={event => setContent(event.target.value)}
            ></textarea>
        </div>
    )
}

export default Editor
