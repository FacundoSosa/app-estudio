import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ProjectLink({project}) {
    console.log(project.id);
    
    return (
        <Link className='nav-link' to={`/proyecto/${project.id}`}>{project.name}</Link>
    )
}

export default ProjectLink