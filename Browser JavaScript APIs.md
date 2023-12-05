# Events in JS

Useful links:

- [Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

## [Bubbling and capturing phase](https://uk.javascript.info/bubbling-and-capturing)

- The standard DOM Events describes 3 phases of event propagation:

  1. Capturing phase - the event goes down to the element
  2. Target phase - the event reached the target element
  3. Bubbling phase - the event bubbles up from the element

## [Firing event programmatically](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events)

- Events can be created:

  1. with the Event constructor

  ```js
  const event = new Event("build");
  // Listen for the event.
  elem.addEventListener(
    "build",
    (e) => {
      /_ … _/;
    },
    false
  );
  // Dispatch the event.
  elem.dispatchEvent(event);
  ```

  2. with CustomEvent constructor

  ```js
  const event = new CustomEvent("build", { detail: elem.dataset.time });

  function eventHandler(e) {
    console.log(`The time is: ${e.detail}`);
  }
  ```

  3. with document.createEvent()

  ```js
  // Create the event.
  const event = document.createEvent("Event");

  // Define that the event name is 'build'.
  event.initEvent("build", true, true);

  // Listen for the event.
  elem.addEventListener(
    "build",
    (e) => {
      // e.target matches elem
    },
    false
  );
  // target can be any Element or other EventTarget.
  elem.dispatchEvent(event);
  ```

## Synthetic events in react vs. browser events

- Event Consistency: Synthetic events ensure consistent event handling across browsers
- Syntax: Handling synthetic events has a distinct syntax compared to browser events
- Preventing Event Sticking: React automates event handling and mitigates event sticking issues
- Component-based and Virtual DOM: React utilizes a component-based and virtual DOM model for event management
- Delegation: Synthetic events can be readily delegated from parent to child components

# UIs for manipulation with DOM

## Methods for element selection

- getElementById()
- getElementsByTagName()
- getElementsByName()
- getElementsByClassName()
- querySelector()
- querySelectorAll()

- document.getElementById() and other methods that return one element - returns null or DOM element that corresponds to a piece of HTML markup
- document.querySelectorAll and other methods that return multiple elements - always returns a collection of Node elements - `NodeList`

## Focusable elements

- HTMLInputElement
- HTMLSelectElement
- HTMLTextAreaElement
- HTMLAnchorElement
- HTMLButtonElement
- HTMLAreaElement

- :focus selector is used to select the element that has focus
- document.activeElement - returns currently focused element

- [tabIndex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) - global attribute allows developers to make HTML elements focusable, allow or prevent them from being sequentially focusable and determine their relative ordering for sequential focus navigation
  - 0 - enables focus for the elements that aren't focusable by default
  - -1 - disables focus
  - '>0' - will be focused in reverse order (i.e. from the lowest to the highest tabIndex)

## Additional information

- Difference between `e.target` and `e.currentTarget`

  - `e.target` - the target element that was clicked or interacted with
  - `e.currentTarget` - the element on which the event listener is set or the element currently handling the event during its propagation

- [`e.stopPropagation`](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) is bad, because blocks:
  - the trackers like Google Analytics
  - the parent element from listening to the same event (example - close on nested menu on click)
