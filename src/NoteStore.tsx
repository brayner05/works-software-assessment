import { create } from "zustand"
import { v4 as uuidv4 } from "uuid"

export interface Note {
    id: string
    title: string
    content: string
    groupId: string
}

export interface Group {
    id: string
    name: string
    notes: string[]
}

interface NoteState {
    notes: Note[]
    groups: Group[]
    setNotes: (notes: Note[]) => void
    setGroups: (groups: Group[]) => void
    addGroup: (name: string, notes?: string[], id?: string) => void
    addNote: (note: Note) => void
    updateNote: (
        id: string,
        title: string,
        content: string,
        groupId: string
    ) => void
    deleteNote: (id: string) => void
}

export const useNoteStore = create<NoteState>(set => ({
    notes: [],
    groups: [],

    setNotes: (notes: Note[]) => {
        console.log(notes)
        return set(state => ({ notes: notes, groups: state.groups }))
    },

    setGroups: (groups: Group[]) =>
        set(state => ({ notes: state.notes, groups: groups })),

    addGroup: (name: string, notes: string[] = [], id = uuidv4()) =>
        set(state => ({
            groups: [...state.groups, { id: id, name: name, notes: notes }],
        })),

    addNote: (note: Note) =>
        set(state => {
            const groupIndex = state.groups.findIndex(
                (group: Group) => group.id === note.groupId
            )

            if (groupIndex == -1) {
                return state
            }

            const newGroups = [...state.groups]
            newGroups[groupIndex].notes.push(note.id)
            return { notes: [...state.notes, note], groups: newGroups }
        }),

    updateNote: (id: string, title: string, content: string, groupId: string) =>
        set(state => {
            const note: Note | undefined = state.notes.find(
                (el: Note) => el.id === id
            )
            if (!note) {
                return state
            }

            note.title = title
            note.content = content
            note.groupId = groupId
            return state
        }),

    deleteNote: (id: string) =>
        set(state => ({
            notes: state.notes.filter((note: Note) => note.id !== id),
            groups: state.groups,
        })),
}))
