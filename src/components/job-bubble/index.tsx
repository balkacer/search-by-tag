import { currencyFormater } from "../../utils/currency-formater";
import { generateRandomColor } from "../../utils/generate-random-color";
import Tag from "../tag";

export type JobBubbleProps = {
  title?: string;
  methodology?: "Remote" | "On Site" | "Hybrid";
  salaryRange: {
    min: number;
    max: number;
  };
  companyName: string;
  companyLogo: string;
  tags?: string[];
  isSelected?: boolean;
  id: string;
  onClick?: () => void;
}

function JobBubble({
  title,
  methodology = "On Site",
  salaryRange = {
    min: 0,
    max: 0
  },
  companyName,
  companyLogo,
  tags,
  isSelected = false,
  onClick
}: JobBubbleProps) { 
  return (
    <button className={`p-4 text-left flex justify-between rounded-3xl ${isSelected ? "bg-slate-300" : "bg-slate-200"}`} onClick={onClick}>
      <div className="flex flex-col gap-4 justify-start">
        <h1 className="text-lg font-bold text-black">{title}</h1>
        <span className="font-bold text-gray-500 text-xs">{companyName} | {methodology}</span>
        <span className="font-bold text-gray-500">${currencyFormater(salaryRange.min)} - ${currencyFormater(salaryRange.max)}</span>
        {tags?.length && (
          <div className="flex flex-row items-center justify-start max-w-full gap-2 flex-wrap">
            {tags.map(item => (
              <Tag color={generateRandomColor()}>{item}</Tag>
            ))}
          </div>
        )}
      </div>
      <div className="h-full">
        <div className="bg-white rounded-md aspect-square p-1">
          <img className="w-10 h-10 object-cover" src={companyLogo} alt={`${companyName.toLowerCase().replaceAll(" ", "-")}-logo`} />
        </div>
      </div>
    </button>
  )
}

export default JobBubble