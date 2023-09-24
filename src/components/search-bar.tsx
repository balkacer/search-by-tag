import Button from "./micro/button";

export type SearchBarProps = {
  onSearch?: (value: string) => void
  onSubmit?: () => void
}

export default function SearchBar({ onSearch, onSubmit }: SearchBarProps) {

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    onSearch?.(value)
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit?.()
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" className="" onChange={handleOnChange} />
      <Button type="submit" color="primary" label="Submit" />
    </form>
  )
}