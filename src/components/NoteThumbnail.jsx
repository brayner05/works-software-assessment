import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const NoteThumbnail = ({ note }) => {
    return (
        <div className="text-white bg-secondary cursor-pointer px-5 py-2 rounded-lg flex items-center">
            <Link
                to={`/editor/${note.id}`}
                className="flex-1 font-medium font-body text-sm"
            >
                {note.title}
            </Link>
            <button>
                <FontAwesomeIcon icon={faEllipsis} />
            </button>
        </div>
    )
}

export default NoteThumbnail
