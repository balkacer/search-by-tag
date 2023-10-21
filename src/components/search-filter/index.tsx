import { useEffect, useState } from "react";
import { Filter } from "../../types/filter.type"
import useDebounce from "../../hooks/useDebounce";
import Modal from "../modal";
import { ListBulletIcon } from '@heroicons/react/24/outline';

export type SearchFilterProps = {
  filters: Filter[];
  onFilterChange?: (filters: Filter[]) => void;
  onSearch?: (term: string | null) => void;
  searchTerm: string | null;
}

function SearchFilter({ filters, onFilterChange, onSearch, searchTerm: _searchTerm }: SearchFilterProps) {
  const [filterState, setFilterState] = useState<Filter[]>(filters);
  const [searchTerm, setSearchTerm] = useState<string | null>(_searchTerm);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setFilterState(filters);
  }, [filters]);

  useEffect(() => {
    onFilterChange?.(filterState);
  }, [filterState]);

  useEffect(() => {
    onSearch?.(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  };

  function handleOpenFilterModalButton() {
    setShowModal(prev => !prev);
  }

  return (
    <>
      <div className="flex flex-row gap-2 items-center">
        <input placeholder={"\"javascript\""} className="bg-gray-200 h-9 px-2 flex items-center rounded-md w-full" type="text" onChange={handleChange} value={searchTerm ?? ""} />
        <button className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={handleOpenFilterModalButton}>
          <ListBulletIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Modal title="Filters" show={showModal} onClose={() => setShowModal(false)}>
        {filterState.map((item) => (
          <div key={item.key}>
            <div>
              {item.label}
            </div>
            <div>
              {item.optionsToChose.map((op) => (
                <span key={op.key}>{op.label}</span>
              ))}
            </div>
          </div>
        ))}
      </Modal>
    </>

  )
}

export default SearchFilter