import { faAngleLeft, faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const Editor = ({ post }) => {
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
                defaultValue="Note Title"
            />
            <textarea className="resize-none w-full"></textarea>
        </div>
    )
}

export default Editor
