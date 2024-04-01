import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import "./index.css"
import Editor from "./components/pages/Editor"
import SelectGroup from "./components/pages/SelectGroup"
import { Group, Note, useNoteStore } from "./NoteStore"
import { useEffect } from "react"

const App = () => {
    const setGroups = useNoteStore(state => state.setGroups)
    const setNotes = useNoteStore(state => state.setNotes)

    useEffect(() => {
        const savedGroups = localStorage.getItem("groups")
        const savedNotes = localStorage.getItem("notes")
        setGroups(savedGroups ? (JSON.parse(savedGroups) as Group[]) : [])
        setNotes(savedNotes ? (JSON.parse(savedNotes) as Note[]) : [])
    }, [])

    return (
        <div className="px-7 py-5 min-h-dvh flex flex-col select-none">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/select-group" element={<SelectGroup />} />
                <Route path="/editor/:id" element={<Editor />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </div>
    )
}

export default App
