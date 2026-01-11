import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";

const EdwDropdown = forwardRef(({ toggle, menu, direction = "left", disabled = false }, ref) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    close: () => setIsOpen(false),
    open: () => setIsOpen(true),
    toggle: () => setIsOpen(!isOpen),
    isOpen: () => isOpen,
  }));

  const handleToggle = () => {
    if (disabled || !menu || menu.length === 0) return;
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (onClick) => {
    if (onClick) {
      setIsOpen(false);
      onClick();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="edw-dropdown">
      <div
        className={`edw-dropdown-toggle ${disabled || !menu || menu.length === 0 ? "disabled" : ""}`}
        onClick={() => handleToggle()}
      >
        {toggle}
      </div>
      {isOpen && (
        <div className={`edw-dropdown-menu direction-${direction}`}>
          {menu.map((item, index) => (
            <div key={index} className="edw-dropdown-item">
              {item.divider ? (
                <div className="edw-dropdown-item-divider" />
              ) : item.element ? (
                item.element
              ) : (
                <button
                  className="edw-dropdown-item-btn"
                  onClick={() => handleMenuClick(item.onClick)}
                  disabled={item.disabled}
                  style={
                    item.color ? { color: item.color.startsWith("#") ? item.color : `var(--edw-c-${item.color})` } : {}
                  }
                >
                  {item.icon && <span className="icon">{item.icon}</span>}
                  <span className="label">{item.label}</span>
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

EdwDropdown.displayName = "EdwDropdown";

export default EdwDropdown;