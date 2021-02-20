// console.log('App is running');

// JSX
const appRoot = document.getElementById('app');
// const template = < p > This is from JSX < /p>;
const template = /*#__PURE__*/ React.createElement("p", null, " This is from JSX ");




ReactDOM.render(template, appRoot);