import React from 'react'
import Resource from './Resource.js'


const Resources = ({resources,onDelete}) => {
    return (
        <>
            {resources.map((r)=>(      
                <Resource 
                    key={r.id} 
                    resource={r}
                    onDelete={onDelete}
                />
            ))}
        </>
    )
}

export default Resources
