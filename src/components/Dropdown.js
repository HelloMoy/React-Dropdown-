import React, { createContext, useContext, useState } from 'react'
import ClickOutside from './ClickOutside';

const DropdownContext = createContext();
DropdownContext.displayName = 'DropdownContext';

export const useDropdown = () => {
  const context = useContext(DropdownContext)
  return context;
}

const Dropdown = ({ children }) => {

  const [isDropdownAreaShowing, setIsDropdownAreaShowing] = useState(false);

  const onClickOutsideDropdown = () => {
    setIsDropdownAreaShowing(false)
  }

  const onToggleIsDropdownAreaShowing = () => {
    setIsDropdownAreaShowing((previousSate) => !previousSate)
  }

  return (
    <DropdownContext.Provider
      value={{
        isDropdownAreaShowing,
        onToggleIsDropdownAreaShowing
      }}
    >
      <ClickOutside
        onClickOutside={onClickOutsideDropdown}
      >
        {children}
      </ClickOutside>
    </DropdownContext.Provider>
  )
}

export default Dropdown
