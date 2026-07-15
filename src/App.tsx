import { Link, Route, Routes } from 'react-router-dom'
import DisenoUno from './pages/DisenoUno'
import DisenoDos from './pages/DisenoDos'
import DisenoTres from './pages/DisenoTres'
import PathIntlHome from './path-intl/PathIntlHome'

const proposals = [
  { path: '/diseno-1', label: 'Propuesta 1 — Premium', description: 'Minimalista · tonos hueso y arena' },
  { path: '/diseno-2', label: 'Propuesta 2 — Corporativo', description: 'Azules profundos · grids y credibilidad' },
  { path: '/diseno-3', label: 'Propuesta 3 — Audaz', description: 'Modo oscuro · layout asimétrico' },
  {
    path: '/path-intl',
    label: 'Nutrición & Coherencia — Landing',
    description: 'Estructura institucional adaptada · contenido en español',
  },
] as const

function Home() {
  return (
    <div className="min-h-screen bg-stone-100 px-6 py-16 font-sans text-stone-800">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
          Presentación de diseño
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-stone-900 md:text-5xl">
          Fran Pino Vielma
        </h1>
        <p className="mt-4 text-lg text-stone-600">
          Selecciona una propuesta para previsualizar la landing. Los tres diseños comparten el mismo
          contenido desde <code className="rounded bg-stone-200 px-1.5 py-0.5 text-sm">src/data/content.ts</code>.
        </p>
        <ul className="mt-10 space-y-4">
          {proposals.map((proposal) => (
            <li key={proposal.path}>
              <Link
                to={proposal.path}
                className="block rounded-2xl border border-stone-200 bg-white px-6 py-5 shadow-sm transition hover:border-stone-300 hover:shadow-md"
              >
                <span className="text-lg font-semibold text-stone-900">{proposal.label}</span>
                <span className="mt-1 block text-stone-500">{proposal.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diseno-1" element={<DisenoUno />} />
      <Route path="/diseno-2" element={<DisenoDos />} />
      <Route path="/diseno-3" element={<DisenoTres />} />
      <Route path="/path-intl" element={<PathIntlHome />} />
    </Routes>
  )
}
