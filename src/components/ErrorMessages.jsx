export default function ErrorMessages({ errors }) {
  return (
    <div className="alert">
      {Object.keys(errors).map((key) => {
        return (
          <span className="label" key={key}>
            {errors[key]}
          </span>
        );
      })}
    </div>
  );
}
