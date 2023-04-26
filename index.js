const Box = (props) => {
  //  Write your code here.
  const { text, style } = props;
  return (
    <div className={style}>
      <p className="para">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box text="Small" style="small-box" />
      <Box text="Medium" style="medium-box" />
      <Box text="Large" style="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
