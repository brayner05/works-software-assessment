import { useNoteStore } from "../../NoteStore"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
import Page from "./Page"
import PromptBox from "../PromptBox"
import { Group } from "../../NoteStore"
import GroupList from "../GroupList"

const SelectGroup = () => {
    const navigate = useNavigate()
    const groups = useNoteStore(state => state.groups)
    const addGroup = useNoteStore(state => state.addGroup)
    const addNote = useNoteStore(state => state.addNote)
    const [showNewGroupBox, setShowNewGroupBox] = useState(false)
    const [group, setGroup] = useState<Group | null>(groups[0] || null)

    // TODO: Break this component into smaller subcomponents

    return (
        <Page className="flex flex-col justify-between">
            <div>
                <nav className="mb-5">
                    <Link to="/" className="font-semibold text-xl">
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </Link>
                </nav>
                <span className="block font-semibold text-2xl">
                    Choose a group
                </span>
                <button
                    className="text-blue-500 mb-5"
                    onClick={() => setShowNewGroupBox(true)}
                >
                    New group
                </button>

                {showNewGroupBox ? (
                    <PromptBox
                        title={"New Group"}
                        onOk={value => {
                            if (value && value !== "") {
                                addGroup(value, [])
                                setShowNewGroupBox(false)
                            }
                        }}
                    />
                ) : undefined}

                <GroupList
                    groups={groups}
                    onChange={event => {
                        const selectedGroup = groups.find(
                            group => group.id === event.target.value
                        )
                        setGroup(selectedGroup || null)
                    }}
                />
            </div>

            <div className="flex justify-end">
                {group ? (
                    <button
                        onClick={() => {
                            const noteId = uuidv4()
                            addNote({
                                id: noteId,
                                title: "New Note",
                                content: "",
                                groupId: group.id,
                            })
                            navigate(`/editor/${noteId}`)
                        }}
                        className="bg-green-500 text-white px-3 py-2 rounded-md"
                    >
                        Create Note
                    </button>
                ) : (
                    <button className="bg-gray-500 text-white px-3 py-2 rounded-md cursor-not-allowed">
                        Create Note
                    </button>
                )}
            </div>
        </Page>
    )
}

export default SelectGroup
