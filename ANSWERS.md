- [ ] Why would you use class component over function components (removing hooks from the question)?
        - Class components allow us to add variables to state and take advantage of the lifecycle methods. With hooks (like useState and useEffect), class components aren't as necessary.
- [ ] Name three lifecycle methods and their purposes.
        1. componentDidMount - Gets called in the mounting phase, we've usually used it to load/get data from an api or add some event listeners.
        2. componentDidUpdate - Gets called after changes have been made to the DOM. We can compare the previous state and props to the current ones and change something in our app based on those changes.
        3. componentWillUnmount - Gets called just before the component unmounts. You can use this method to remove event listeners or cancel outgoing network requests.
- [ ] What is the purpose of a custom hook?
        - Your code becomes modular and can be reused in other projects and components. 
- [ ] Why is it important to test our apps?
        - If we test our apps, it is less likely bugs will find their way into the code of the final build the user sees.