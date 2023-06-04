function Message() {
  //* note! JSX: JavaScript XML

  const name = "Hosny";
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}
export default Message;
