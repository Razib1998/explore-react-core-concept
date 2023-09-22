import { useState } from "react"

export default function Team(){
 const [teamCount, setTeam] = useState(11);
// To add player 
 const handleAdd = () => {
    const newTeamCount = teamCount + 1;
    setTeam(newTeamCount);
 }

//  To remove player

const handleRemove = () =>{
    const newTeamCount = teamCount - 1;
    setTeam(newTeamCount);
}

    const teamStyle = {
        border: '2px solid yellow',
        margin: "10px",
        padding: "15px",
        borderRadius: "20px",
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {teamCount}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}