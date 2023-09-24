export type ButtonProps = {
  label: string,
  type?: "submit" | "reset" | "button",
  onClick?: () => void,
  color?: "primary" | "secondary" | "info" | "error" | "warning"
  disabled?: boolean
}

export default function Button({ label, onClick, disabled = false, type = "button", color = "primary" }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`${color === "primary" ? "bg-purple-800 text-white" :
          color === "secondary" ? "bg-purple-500 text-white" :
            color === "info" ? "bg-blue-500 text-white" :
              color === "error" ? "bg-red-600 text-white" :
                color === "warning" ? "bg-yellow-500 text-black" :
                  "bg-slate-500 text-white"
        } py-2 px-4 border-0 rounded-md`}
      onClick={onClick}
      type={type}>
      {label}
    </button>
  )
}