import { create } from "zustand"
import { v4 as uuidv4 } from "uuid"

const testId = uuidv4()

export const useGroupStore = create(set => ({
    groups: [{ id: uuidv4(), name: "CSCI 1315", notes: [testId] }],
    addGroup: (name, notes = [testId]) =>
        set(state => ({
            groups: [
                ...state.groups,
                { id: uuidv4(), name: name, notes: notes },
            ],
        })),
}))

export const useNoteStore = create(set => ({
    notes: [{ id: testId, title: "Combinatorics", content: "Hello World" }],
    addNote: (title, content) =>
        set(state => ({
            notes: [
                ...state.notes,
                { id: uuidv4, title: title, content: content },
            ],
        })),
}))
