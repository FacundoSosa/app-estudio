import React, {useContext} from 'react'
import { CardContext } from '../Context/Context'
import DeleteProject from './DeleteProject'
import ProjectLink from './ProjectLink'

function ProjectList() {
    const {projects} = useContext(CardContext)

    return (
        <ul className='nav d-flex align-content-center list-group w-100'>
            {projects.map(project => {
                return (
                    <li className='list-group-item position-static w-100'>
                        {projects.length > 0 ? <span className='w-100 d-flex justify-content-between'>
                                                  <ProjectLink key={project.id} project={project} /> 
                                                  <DeleteProject project={project}/>
                                               </span>
                                                  
                                             : null}
                    </li>
                )
            })}
        </ul>
    )
}

export default ProjectList