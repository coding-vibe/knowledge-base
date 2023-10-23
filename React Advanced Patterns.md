# React Advances Patterns

## Patterns of functional programming(FP)

1. Decorators are functions that take another function and extend its functionality by adding additional code to it.
2. Currying is a technique where a function that takes multiple arguments can be decomposed into a sequence of functions that take only one argument each.
3. Chaining is a technique that enables the sequential invocation of different methods or functions on an object or data.

## Patterns in React

1. Higher-Order Components - a higher-order component is a function that takes a component and returns a new component.
   [HOC](https://legacy.reactjs.org/docs/higher-order-components.html)

2. Children API:

- props.children is a special prop that allows to pass and render child elements within a component. It is used to pass content between the opening and closing tags of a component.
  [props.children](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)

- Children allows to manipulate and transform the JSX you received as the children prop.
  [Children](https://react.dev/reference/react/Children)

3. Render Props is a function prop that a component uses to know what to render.
   [render_props](https://legacy.reactjs.org/docs/render-props.html)
