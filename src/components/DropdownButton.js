import React from 'react'
import { useDropdown } from './Dropdown'

const DropdownButton = ({ children, buttonContent }) => {

  const { isDropdownAreaShowing, onToggleIsDropdownAreaShowing } = useDropdown()

  const onClickDropdownButton = () => {
    onToggleIsDropdownAreaShowing()
  }

  return (
    <div style={{ position: 'relative' }}>
      <div onClick={onClickDropdownButton} >
        {buttonContent}
      </div>
      {
        isDropdownAreaShowing
        &&
        children
      }
    </div>
  )
}

export default DropdownButton
