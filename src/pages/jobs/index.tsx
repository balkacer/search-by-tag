import { useEffect, useMemo } from "react";
import SearchFilter from "../../components/search-filter";
import { Filter } from "../../types/filter.type"
import { useSearchParams } from "react-router-dom";
import JobBubble from "../../components/job-bubble";
import { JOBS } from "../../mock/jobs";

const taps = [
  {
    key: "new",
    label: "New",
    value: "new"
  },
  {
    key: "host",
    label: "Host",
    value: "host"
  },
  {
    key: "near",
    label: "Near",
    value: "near"
  }
]

function JobsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTap = searchParams.get("tap");
  const searchTerm = searchParams.get("search");
  const currentJobId = searchParams.get("job-id");

  useEffect(() => {
    console.log(currentTap);
  }, [currentTap])

  function handleOnFilterChange(filters: Filter[]) {
    console.log({ filters });
  }

  function handleParamsChange(key: string, value: string | null) {
    if (value !== null) {
      searchParams.set(key, value);
    }
    setSearchParams(searchParams);
  }

  const jobToView = useMemo(() => {
    if (currentJobId) {
      const fundJob = JOBS.find(item => item.id === currentJobId);
      return fundJob ?? JOBS[0];
    }

    return JOBS[0];
  }, [currentJobId])

  return (
    <>
      <aside className="flex flex-col gap-2 h-full w-full max-w-[300px] max-h-full">
        <SearchFilter
          onFilterChange={handleOnFilterChange}
          onSearch={(v) => handleParamsChange("search", v)}
          searchTerm={searchTerm}
          filters={[
            {
              label: "Post Category",
              key: "post-categories",
              showFilterLabel: false,
              filterType: "badget-reel-single",
              optionsToChose: []
            }
          ]}
        />
        <div className="flex gap-4 justify-center items-center">
          {taps.map(item => (
            <button key={item.key} onClick={() => handleParamsChange("tap", item.value)} className={currentTap === item.value ? "font-bold" : "font-normal"}>{item.label}</button>
          ))}
        </div>
        <div className="flex flex-col gap-4 max-h-full overflow-auto pr-4">
          {JOBS.map((item, index) =>
            <JobBubble
              {...item}
              isSelected={(index === 0 && currentJobId === null) || currentJobId === item.id}
              onClick={() => handleParamsChange("job-id", item.id)}
            />
          )}
        </div>
      </aside>
      <section>
        <h1>{jobToView.title}</h1>
      </section>
    </>
  )
}

export default JobsPage