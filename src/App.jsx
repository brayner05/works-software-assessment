import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import "./index.css"
import Editor from "./components/pages/Editor"
import SelectGroup from "./components/pages/SelectGroup"

const App = () => {
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
