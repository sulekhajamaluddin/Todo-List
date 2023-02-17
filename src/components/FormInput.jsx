export default function FormInput({ text, placeholder, setItem }) {
  function handleInput(e) {
    setItem(e.target.value.trim());
  }

  return (
    <label className="label">
      {text}
      <input
        type={"text"}
        placeholder={placeholder}
        onChange={(e) => {
          handleInput(e);
        }}
      />
    </label>
  );
}
