import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import "./index.css"
import Editor from "./components/pages/Editor"

const App = () => {
    return (
        <div className="px-7 py-5 h-dvh flex flex-col">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/editor/:id" element={<Editor />} />
            </Routes>
        </div>
    )
}

export default App
