import Sidebar from './components/sidebar'
import MainContent from './components/maincontent'
import './assets/css/components/app.sass'

export default function App() {
  return (
    <div id="portfolio">
      <h1>Inocêncio José</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}