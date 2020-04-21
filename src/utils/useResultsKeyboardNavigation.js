import { useState } from "react";
// TODO: Outside click
// TODO: Add docs anotations
/**
 *
 * @param numberOfResults
 * @param triggerElementRef
 * @param onOutsideClick
 * @param onEnterCallback
 * @param onFocusCallback
 * @param onEscapeCallback
 * @returns {{onKeyDown: onKeyDown, focusedItemIndex: number, onFocus: onFocus}}
 */
const useResultsKeyboardNavigation = (
  numberOfResults = 0,
  triggerElementRef,
  onOutsideClick,
  onEnterCallback,
  onFocusCallback,
  onEscapeCallback
) => {
  const [focusedItemIndex, setFocusedItemIndex] = useState(0);
  const getCircularArrayIndex = (index, arrayLength) =>
    ((index % arrayLength) + arrayLength) % arrayLength;

  const onKeyDown = (event) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setFocusedItemIndex(
          getCircularArrayIndex(focusedItemIndex + 1, numberOfResults)
        );
        break;
      case "ArrowUp":
        event.preventDefault();
        setFocusedItemIndex(
          getCircularArrayIndex(focusedItemIndex - 1, numberOfResults)
        );
        break;
      case "Enter":
        event.preventDefault();
        setFocusedItemIndex(0);
        if (onEnterCallback) {
          onEnterCallback();
        }
        break;
      case "Escape":
        event.preventDefault();
        setFocusedItemIndex(0);
        if (onEscapeCallback) {
          onEscapeCallback();
        }
        break;
      default:
        break;
    }
  };

  // Intercept focus change to reset the focused item to 0
  const onFocus = (event) => {
    setFocusedItemIndex(0);
    if (onFocusCallback) {
      onFocusCallback(event);
    }
  };

  return { focusedItemIndex, onKeyDown, onFocus };
};

export { useResultsKeyboardNavigation };
