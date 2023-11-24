# Class lifecycle methods

## componentDidMount()

- is invoked immediately after a component is mounted (inserted into the tree)

## componentDidUpdate(prevProps, prevState, snapshot)

- is invoked immediately after updating occurs. This method is not called for the initial render

## componentWillUnmount()

- is invoked immediately before a component is unmounted and destroyed

## componentDidCatch(error, info)

- is invoked after an error has been thrown by a descendant component
