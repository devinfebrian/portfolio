import { SectionHead } from '../components/SectionHead'

const rows = [
  {
    capability: 'Frontend',
    workingSet: 'React 19 · Next.js 16 · TypeScript · Tailwind v4',
    evidence: 'Sentinel / GameForge',
  },
  {
    capability: 'Backend',
    workingSet: 'Node.js · Express · REST · PostgreSQL · Drizzle',
    evidence: 'Sentinel',
  },
  {
    capability: 'AI / data',
    workingSet: 'Python · FastAPI · Gemini · multi-agent pipelines · LLM Q&A',
    evidence: 'Sentinel / GameForge',
  },
  {
    capability: 'Runtime / tools',
    workingSet: 'Bun · Git · Vercel · Supabase · Playwright',
    evidence: 'GameForge / Sentinel',
  },
  {
    capability: 'Automation',
    workingSet: 'Python utilities · PyInstaller · cross-platform file handling',
    evidence: 'Download Sorter',
  },
]

export function FieldKit() {
  return (
    <section
      className="chapter chapter--workshop"
      id="field-kit"
      aria-labelledby="field-kit-heading"
    >
      <SectionHead
        id="field-kit-heading"
        title="The workshop"
        note="Section C · Working set"
      />

      <div className="workshop">
        <table className="workshop__table">
          <caption className="sr-only">
            Capabilities evidenced by the projects in this edition
          </caption>
          <thead>
            <tr>
              <th scope="col">Capability</th>
              <th scope="col">Working set</th>
              <th scope="col">Evidence</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.capability}>
                <th scope="row">{row.capability}</th>
                <td>{row.workingSet}</td>
                <td>{row.evidence}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="workshop__foot">
          <p>
            Every line is drawn from a report above and its repository record. No percentage
            claims, no skill sliders.
          </p>
          <p>This edition is built with Bun, React 19, Three.js, and React Three Fiber.</p>
        </div>
      </div>

      <p className="folio">C1 · The Febrian Prophet · The workshop</p>
    </section>
  )
}
