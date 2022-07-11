import React from 'react'
import { FormInput } from '../components'

const BasicInfo = () => {
    return (
        <div className='container'>
            <FormInput label={"Address line 1"}
                placeholder={"Enter your address"}
                type={"text"}
                value={""}
                onChange={e => {}}
            />
        </div>
    )
}

export default BasicInfo