interface EditProfileInputProps {
  label: string;
  id: string;
  type: "text" | "url" | "email";
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export default function EditProfileInput({
  label,
  id,
  type,
  value,
  onChange,
  required = true,
}: EditProfileInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="h-12 p-2 border border-dark-gray rounded"
      />
    </div>
  );
}
