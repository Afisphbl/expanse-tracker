export default function Input({ className, label, type, value, onChange }) {
  return (
    <input
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={label}
    />
  );
}
