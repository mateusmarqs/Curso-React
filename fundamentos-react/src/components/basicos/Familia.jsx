import React, {cloneElement} from 'react'
// import FamiliaMembro from './MembroFamilia'

export default props => {
    return (
    <div>
        {
            React.Children.map(props.children, child => {
                return cloneElement(child, props)
            })
        }
        {/* {cloneElement(props.children, {...props})} */}
    </div>
    )
}