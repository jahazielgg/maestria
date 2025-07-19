import './App.css'
import AppRouter from './routes/AppRouter'

export default function App() {

  return (
    <div className="min-h-screen bg-gray-50 text-black-900">
      <main className="p-6">
        <AppRouter />
      </main>
    </div>
  )
}

