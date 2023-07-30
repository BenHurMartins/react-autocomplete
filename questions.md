## Questions

### What is the difference between Component and PureComponent? Give an example where it might break my app.

- The difference is not too relevant today when using functional components, but basically is that class components which extends Component will re-render in all cases where props or state changes. While pure components will automatically evaluate the shouldComponentUpdate, and if a primitive type from props/state changed such as string or number for example, it will re-render, but in case it is an array or object it will check by reference if it changed. The problem is when you keep the same reference from an array/object by not creating a new one when updating the state/props, which will cause the component to not update as well, this behavior is the same for functional components.

### Context + ShouldComponentUpdate might be dangerous. Why is that?

- I don't use class components for so many years that I don't know the answer.

### Describe 3 ways to pass information from a component to its PARENT.

- through callback props
- through a ContextAPI or State management tools (like redux)
- through reference

### Give 2 ways to prevent components from re-rendering.

- first, most common is memoizing, we can use `useMemo` for values in general, `useCallback` for functions and `React.memo` for components, and through the dependency array in the hooks we can control the re-rendering, on React.memo we control through props comparison.
- second we can use in forms, is using `useRef` for the input fields, we control the values through the reference and avoid re-renders

### What is a fragment and why do we need it? Give an example where it might break my app.

In order to get more than one react node in the same level we may use a fragment, which works like an empty div/view, it gets the code cleaner and more readable. It may break the app case it breaks/changes the layout because it contains no style by it-self

### Give 3 examples of the HOC pattern.

- State Management, allow any child component to access the same state and/or update it through the use of hooks.
- Styles provider, we can use some HOC to provide base styles for our application and/or breakpoints for responsiveness, not limited to it.
- ErrorBoundaries, we can create error boundaries class components with fallback for when some unexpected error occurs and avoid the app to crash without showing an formatted error message.

### What's the difference in handling exceptions in promises, callbacks and async...await?

- For promises we can use the `.catch` option after which will receive a callback passing the error,
- async/await have the same concept, but for it we will use a `try/catch` block in order to catch the exceptions.
- for callbacks usually we pass two of them, the first in case of success and the second to handle the error.

### How many arguments does setState take and why is it async.

The old setState on class components style used to accept 2 arguments, the first is the new state, the new value basically, and the second is a callback to be performed after the state update. The new state setter provided by useState hooks only accepts one arg, the new value or a callback the have the previous state as argument.

React execute the set states by batching them, it happens because of performance.

### List the steps needed to migrate a Class to Function Component.

- remove class declaration and replace for a function
- check the lifecycle options such as `componentDidMount` and replace them by a sort of useEffect, depending on each case.
- remove constructor
- update the setState to use `useState` hook, each state individually or in case of many of them, we can group it to get a better performance.
- remove render method and leave just the return statement, with the JSX content of course.
- remove any `this` statement for the actual state or function
- functions on class components are declared without the use of `function` or `const`for arrow functions, they should be updated.

### List a few ways styles can be used with components.

- inline styles, declared inside props `style`
- we can make use of css files and add the classes inside `className`props, instead of the usual `class` - React Only
- we can use styled components which basically will apply the styles on the component creation.

### How to render an HTML string coming from the server.

- first and most common approach using a third party library, there are a few of them for react and react native.
- there is a prop from div tag that allow us to pass html content, `dangerouslySetInnerHTML`
