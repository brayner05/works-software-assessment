import { create } from "zustand"
import { v4 as uuidv4 } from "uuid"

const testId = uuidv4()
const groupTestId = "test"

export const useNoteStore = create(set => ({
    notes: [
        {
            id: testId,
            title: "Combinatorics",
            content: "Hello World",
            group: groupTestId,
        },
    ],
    groups: [{ id: groupTestId, name: "CSCI 1315", notes: [testId] }],

    addGroup: (name, notes = []) =>
        set(state => ({
            groups: [
                ...state.groups,
                { id: uuidv4(), name: name, notes: notes },
            ],
        })),

    addNote: (title, content, groupId) =>
        set(state => {
            const newNote = {
                id: uuidv4,
                title: title,
                content: content,
                group: groupId,
            }

            const groupIndex = state.groups.findIndex(
                group => group.id === groupId
            )
            if (groupIndex == -1) {
                return state
            }

            const newGroups = [...state.groups]
            newGroups[groupIndex].notes.push(newNote.id)
            return { notes: [...state.notes, newNote], groups: newGroups }
        }),
    updateNote: (id, title, content) =>
        set(state => {
            const note = state.notes.find(el => el.id === id)
            if (!note) {
                console.log(id)
                return state
            }

            note.title = title
            note.content = content
            return state
        }),
    deleteNote: id =>
        set(state => ({
            notes: state.notes.filter(note => note.id !== id),
            groups: state.groups,
        })),
}))
