type IconProps = {
  className?: string
}

export function ArrowDown({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M8 2v11M3.4 8.7 8 13.3l4.6-4.6" />
    </svg>
  )
}

export function ArrowUp({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M8 14V3M3.4 7.3 8 2.7l4.6 4.6" />
    </svg>
  )
}

export function ArrowOut({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M4 12 12.5 3.5M5.5 3.5h7v7" />
    </svg>
  )
}
