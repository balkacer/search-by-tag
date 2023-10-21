
export type TagProps = {
  children: React.ReactNode;
  color?: string;
}

function Tag({ color, children }: TagProps) {
  return (
    <div className="px-2 py-1 text-xs font-bold truncate max-w-full rounded-full text-black" style={{ backgroundColor: color }}>{children}</div>
  )
}

export default Tag