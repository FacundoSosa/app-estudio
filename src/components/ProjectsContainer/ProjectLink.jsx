import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ProjectLink({project}) {
    
    return (
        <Link className='nav-link p-0' to={`/proyecto/${project.id}`}>{project.name}</Link>
    )
}

export default ProjectLink