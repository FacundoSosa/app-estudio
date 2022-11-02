import React, {useContext} from 'react'
import { CardContext } from '../Context/Context'
import ProjectLink from './ProjectLink'

function ProjectList() {
    const {projects} = useContext(CardContext)

    return (
        <ul className='p-3'>
            {projects.map((project) => {
                return (
                    <li>
                        {projects.length > 0 ? <ProjectLink key={project.id} project={project} /> : null}
                    </li>
                )
            })}
        </ul>
    )
}

export default ProjectList