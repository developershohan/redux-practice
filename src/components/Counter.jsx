import { useSelector, useDispatch } from "react-redux"

const Counter = () => {

  const count = useSelector((state) => state)
  // const background = useSelector((state) =>state)

  const dispatch = useDispatch()
  return (
    <div style={{color:"red"}}>
      <h1>{count} </h1>
      <hr />
      <button onClick={() => dispatch({ type: "DEC" })}>--</button>
      <button onClick={() => dispatch({ type: "INC" })}>++</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
      <button onClick={() => dispatch({ type: "SET" })}>set</button>
    </div>
  )
}

export default Counter