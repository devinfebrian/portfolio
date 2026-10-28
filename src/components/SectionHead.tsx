type SectionHeadProps = {
  title: string
  note?: string
  id?: string
}

export function SectionHead({ title, note, id }: SectionHeadProps) {
  return (
    <div className="section-head">
      <h2 id={id}>{title}</h2>
      {note ? <p className="section-head__note">{note}</p> : null}
    </div>
  )
}
