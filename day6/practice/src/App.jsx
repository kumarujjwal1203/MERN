import Hello from "./component/Hello";
import State from "./component/state";
import Change from "./component/change";
function APP() {
  return (
    <>
      {/* <h1>Hello</h1>
      <p>This is a parent response</p>
      <Hello name="Ujjwal" /> */}

      <h1>Count</h1>
      <State />
      <Change />
    </>
  );
}

// function Hello({ name }) {
//   return (
//     <>
//       <h1>Hello World! {name}</h1>
//       <p>This is a child response</p>
//     </>
//   );
// }
export default APP;
