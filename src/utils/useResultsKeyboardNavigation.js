const useResultsKeyboardNavigation = (
  numberOfResults = 0,
  focusedItemIndex = 0,
  onKeyDownCallback,
  setFocusedItemIndexCallback
) => {
  const getCircularArrayIndex = (index, arrayLength) =>
    ((index % arrayLength) + arrayLength) % arrayLength;

  const onKeyDown = (event) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setFocusedItemIndexCallback &&
          setFocusedItemIndexCallback(
            getCircularArrayIndex(focusedItemIndex + 1, numberOfResults)
          );
        break;
      case "ArrowUp":
        event.preventDefault();
        setFocusedItemIndexCallback &&
          setFocusedItemIndexCallback(
            getCircularArrayIndex(focusedItemIndex - 1, numberOfResults)
          );
        break;
      default:
        onKeyDownCallback && onKeyDownCallback();
        break;
    }
  };
  return [onKeyDown];
};

export { useResultsKeyboardNavigation };
