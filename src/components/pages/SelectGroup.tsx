import { useNoteStore } from "../../NoteStore"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
import Page from "./Page"
import PromptBox from "../PromptBox"
import { Group } from "../../NoteStore"

const SelectGroup = () => {
    const navigate = useNavigate()
    const groups = useNoteStore(state => state.groups)
    const addGroup = useNoteStore(state => state.addGroup)
    const addNote = useNoteStore(state => state.addNote)
    const [showNewGroupBox, setShowNewGroupBox] = useState(false)
    const [group, SetGroup] = useState<Group | null>(null)

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
                            alert(value)
                            setShowNewGroupBox(false)
                        }}
                    />
                ) : undefined}

                {groups.length > 0 ? (
                    <select
                        onChange={event => {
                            const selectedGroup = groups.find(
                                group => group.id === event.target.value
                            )
                            SetGroup(selectedGroup || null)
                        }}
                        className="block w-full px-3 py-2 bg-transparent rounded-md border-2 border-gray-400 focus:border-blue-500"
                    >
                        <option>Choose a group</option>
                        {groups.map(group => (
                            <option value={group.id}>{group.name}</option>
                        ))}
                    </select>
                ) : (
                    <p className="text-lg">
                        You have not created any note groups
                    </p>
                )}
            </div>

            <div className="flex justify-end">
                {/*! Bug is here: going to random id instead of the notes id */}
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
