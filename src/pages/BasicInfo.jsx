import React from 'react'
import { FormInput } from '../components'

const BasicInfo = () => {
    const [firstName, setFirstName] = React.useState('')
    return (
        <div className='grid grid-cols-2 gap-3 w-3/2 m-3 p-5 shadow-2xl rounded-md bg-white'>
           <FormInput label={"organisation type"}
                placeholder={"Enter your address"}
                type={"text"}
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
           <FormInput label={"organisation name"}
                type={"text"}
                value={""}
                onChange={e => {}}
            />
           <FormInput label={"Industry"}
                type={"text"}
                value={""}
                onChange={e => {}}
            />
           <FormInput label={"bussiness industry"}
                placeholder={"Enter your address"}
                type={"text"}
                value={""}
                onChange={e => {}}
            />    
        </div>
    )
}

export default BasicInfo