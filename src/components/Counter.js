const Counter = (props) => {
  return (
    <div className="my-2">
      <button className="btn btn-success">{props.counter.value}</button>
    </div>
  );
}

export default Counter;