import React from 'react'
import { useState } from 'react'

const AddResource = ({ onAdd }) => {
    const [name, setName] = useState('')
    
    // optional fields
    var [maxCapacity, setMaxCapacity] = useState('')
    var [maxDuration, setMaxDuration] = useState('')
    var [bufferTime, setBufferTime] = useState('')
    var [cancelTime, setCancelTime] = useState('')
    
    var [type, setType] = useState('')
    const isRadioSelected = (value) => type===value;
    const handleRadioClick = (e) => setType(e.currentTarget.value);


    // non-optional, selected by default fields
    const status='available'
    const approval='everyone'
    
    // TODO: be able to set equipments if 'room' is selected for type
    var equipments = ['equipment list']
    // var [equipments, setEquipments] = useState('')

    // TODO: be able to change the list of users who can see a certain 'hidden' resource
    // var [approvalUsers, setApprovalUsers] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name){
            alert('please enter a name for the resource')
            return
        }
        if(!type){
            alert('please select a type of resource')
            return
        }
        
        // handle optional fields
        maxCapacity = !maxCapacity ? -1 : maxCapacity
        maxDuration = !maxDuration ? 8*60 : maxDuration
        bufferTime = !bufferTime ? -1 : bufferTime
        cancelTime = !cancelTime ? 24*60 : cancelTime

        onAdd({ name,maxCapacity,maxDuration,bufferTime,cancelTime,status,approval,type,equipments })
        
        // clear the input fields
        setName('')
        setMaxCapacity('')
        setMaxDuration('')
        setBufferTime('')
        setCancelTime('')
        setType('')
    }
    

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                
                <div className='form-control'>
                    <label>Resource Name</label>
                    <input 
                        type='text' 
                        placeholder='Enter resource name (required)'
                        value={name}
                        onChange={(e)=>(setName(e.target.value))}
                    />
                </div>
                <div>
                    <label>Resource Type</label>
                    <div className='form-control form-control-check'>
                        <p>Room</p>
                        <input  
                        type="radio" 
                        name="type" 
                        value="room" 
                        checked={isRadioSelected("room")}
                        onChange={handleRadioClick}
                        ></input>
                        
                        <input  
                        type="radio" 
                        name="type" 
                        value="equipment" 
                        checked={isRadioSelected("equipment")}
                        onChange={handleRadioClick}
                        ></input>
                        <p>Equipment</p>
                    </div>   
                </div> 
                <div className='form-control'>
                    <label>Maximum Capacity</label>
                    <input 
                        type='number' 
                        placeholder='Enter maximum number of participants (optional)'
                        value={maxCapacity}
                        onChange={(e)=>(setMaxCapacity(e.target.value))}
                    />
                </div>
                <div className='form-control'>
                    <label>Maximum Duration</label>
                    <input 
                        type='number' 
                        placeholder='Enter duration (optional, 8 hours if no input)'
                        value={maxDuration}
                        onChange={(e)=>(setMaxDuration(e.target.value))}
                    />
                </div>
                <div className='form-control'>
                    <label>Buffer Time</label>
                    <input 
                        type='number' 
                        placeholder='Enter Buffer time between reservations (optional)'
                        value={bufferTime}
                        onChange={(e)=>(setBufferTime(e.target.value))}
                    />
                </div>
                <div className='form-control'>
                    <label>Prior Cancellation Time</label>
                    <input 
                        type='text' 
                        placeholder='Deadline to cancel (optional, 24 hours before if no input)'
                        value={cancelTime}
                        onChange={(e)=>(setCancelTime(e.target.value))}
                    />
                </div>
                <input 
                    className='btn btn-block' 
                    type='submit' 
                    value='Save Resource'>
                </input>
            </div>
        </form>
    )
}

export default AddResource
