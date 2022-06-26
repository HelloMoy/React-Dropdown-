import React from 'react'
import { useDropdown } from './Dropdown'
import DropdownButton from './DropdownButton'

const dropdownItems = [
  { name: 'dropdownItem1' },
  { name: 'dropdownItem2' },
  { name: 'dropdownItem3' },
]

const MyDropdow = () => {

  const { onToggleIsDropdownAreaShowing } = useDropdown()

  const onDropdownItemClick = (dropdownItemName) => {
    console.log(dropdownItemName)
    onToggleIsDropdownAreaShowing()
  }

  const buttonContent = (
    <button>
      Dropdown Button
    </button>
  )

  return (
    <DropdownButton
      buttonContent={buttonContent}
    >
      <div>
        {
          dropdownItems.map((dropdownItem) => (
            <div
              key={dropdownItem.name}
              onClick={() => onDropdownItemClick(dropdownItem.name)}
            >
              {dropdownItem.name}
            </div>
          ))
        }
      </div>
    </DropdownButton>
  )
}

export default MyDropdow