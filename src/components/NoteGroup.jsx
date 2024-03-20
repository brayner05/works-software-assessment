import { useState } from "react"
import {
    faCaretDown,
    faCaretRight,
    faEllipsis,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NoteThumbnail from "./NoteThumbnail"

const NoteGroup = ({ notes }) => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className="mb-5">
            <div className="flex text-gray-700 mb-2 text-sm">
                <p className="mr-2 font-semibold">Group Name</p>
                <button onClick={() => setCollapsed(!collapsed)}>
                    <FontAwesomeIcon
                        icon={collapsed ? faCaretRight : faCaretDown}
                    />
                </button>
            </div>
            {collapsed ? undefined : (
                <div>
                    <NoteThumbnail note={{ title: "My Note" }} />
                </div>
            )}
        </div>
    )
}

export default NoteGroup
