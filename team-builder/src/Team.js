import React from 'react'

const Team = (props) => {
    const {member} = props
    return (
        <div>
            {member.name}<br/>
            {member.email}<br/>
            {member.role}
        </div>
    )
}
export default Team