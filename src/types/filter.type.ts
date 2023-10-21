export type FilterType = "multi-select" | "badget-reel-multi" | "badget-reel-single" | ""

export type FilterOption = {
  label: string;
  value: string;
  key: string;
}

export type Filter = {
  label: string;
  key: string;
  optionsToChose: FilterOption[];
  filterType?: FilterType;
  showFilterLabel?: boolean;
}