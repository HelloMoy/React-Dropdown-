import React, { useEffect, useRef } from "react";

const ClickOutside = ({
  children,
  onClickOutside = undefined,
  onClickInside = undefined
}) => {

  const wrapperRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])

  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      if (typeof onClickOutside === 'function') {
        onClickOutside(event);
      }
    } else {
      if (typeof onClickInside === 'function') {
        onClickInside(event);
      }
    }
  }

  return (
    <div ref={wrapperRef}>
      {children}
    </div>
  );
}

export default ClickOutside
