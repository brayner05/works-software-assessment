import React from "react"
import { Group } from "../NoteStore"

interface Props {
    groups: Group[]
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const GroupList = ({ groups, onChange }: Props) => {
    return (
        <>
            {groups.length > 0 ? (
                <select
                    onChange={onChange}
                    className="block w-full px-3 py-2 bg-transparent rounded-md border-2 border-gray-400 focus:border-blue-500"
                >
                    {groups.map(group => (
                        <option value={group.id} key={group.id}>
                            {group.name}
                        </option>
                    ))}
                </select>
            ) : (
                <p className="text-lg">You have not created any note groups</p>
            )}
        </>
    )
}

export default GroupList
