function Result({ text, value }) {
  return (
    <p>
      <span className="text-purple mr-2">{value ?? "--"}</span>
      <span className="text-black">{text}</span>
    </p>
  );
}

export default Result;
