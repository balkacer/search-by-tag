import { Filter } from "../mock/filters"
import Button from "./micro/button"

export type SideFiltersProps = {
  onFilterSubmit?: (value: Record<string, string | number | (string | number)[] | boolean>) => void
  filters?: Filter[]
}

export default function SideFilters({ filters, onFilterSubmit }: SideFiltersProps) {
  const handleOnFilterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const inputs = e.currentTarget.getElementsByTagName("input")
    
    onFilterSubmit?.([...inputs].reduce((prev, curr) => ({ ...prev, [curr.name]: curr.value }), {}))
  }

  return (
    <aside className="flex">
      <form onSubmit={handleOnFilterSubmit}>
        <ul>
        {filters?.map((item) => (
          <li>
            <div>
              <span>
                {item.icon}
              </span>
              <h6>{item.label}</h6>
            </div>
            {typeof item.options === "boolean" ? (
            <div>
              <div>
                <label htmlFor={`filter-item-${item.key}-yes`}>Yes</label>
                <input type="radio" name={item.key} id={`filter-item-${item.key}-yes`} />
              </div>
              <div>
                <label htmlFor={`filter-item-${item.key}-no`}>No</label>
                <input type="radio" name={item.key} id={`filter-item-${item.key}-no`} />
              </div>
            </div>
            ) : (
              <div>
                {item.options.map((op) => (
                  <div>{op}</div>
                ))}
              </div>
            )}
          </li>
        ))}
        </ul>
        <div>
          <Button type="submit" color="primary" label="Submit" />
        </div>
      </form>
    </aside>
  )
}