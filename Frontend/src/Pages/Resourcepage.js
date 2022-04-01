import { useState } from 'react'
import Header from './../components/Header.js'
import Resources from './../components/Resources.js'
import AddResource from './../components/AddResource.js'

function ResourcePage() {
  const [showAddResource, setShowAddResource] = useState(false)
  const [resourceList, setResources] = useState(
    [
        {
            id:           Math.floor(Math.random()*10000)+1,
            name:         'First resource',
            type:         'room',
            equipments:   [],
            maxCapacity:  -1, // not selected by default (-1 by default)
            maxDuration:  -1,
            bufferTime:   -1, //not selected by default 
            status:       'available',  // available by default
            cancelTime:   -1, 
            approval:     'everyone', // selected by default
            approvalUsers: ['user1','user2']

        },
        {
            id:         Math.floor(Math.random()*10000)+1,
            name:       'Another resource',
            type:       'equipment',
            equipments: ['goggles','gloves'],
            maxCapacity: 22,   
            maxDuration: 480, // default is set to 8 hours (in minutes?)
            bufferTime:  15,  // default is 0
            status:      'unavailable',
            cancelTime:  60*24, // cancel 24 hours prior as default
            approval:    'noone', 
            approvalUsers: ['user1','user2'],
        },
        {
          id:         Math.floor(Math.random()*10000)+1,
          name:       'Third resource',
          type:       'equipment',
          equipments: ['goggles','gloves','mask'],
          maxCapacity: 5,   
          maxDuration: 150, // default is set to 8 hours (in minutes?)
          bufferTime:  0,  // default is 0
          status:      'hidden',
          cancelTime:  45,
          approval:    'exceptions',
          approvalUsers: ['user1','user2']
      },
    ]
)

  const addResource = (resource) => {
    const id = Math.floor(Math.random()*10000)+1
    const newResource = {id: id, ...resource}
    setResources([...resourceList, newResource])
  }
  
  const deleteResource = (id) => {
    setResources(resourceList.filter(r => r.id!==id))
  }


  /* --------- Resources page --------- */
  return (
    <div className="container">
      <Header
        title='Resources Page'
        notice='View and edit resources for reservations.'
        onAdd={()=>{setShowAddResource(!showAddResource)}}
        showAdd={showAddResource}
      />
      {showAddResource && <AddResource onAdd={addResource}/>}
      {
        resourceList.length > 0 
        ? <Resources 
            resources={resourceList}
            onDelete={deleteResource}
        />
        : <h3>There are no resources to view</h3>
      }
    </div>
  );
}

export default ResourcePage;