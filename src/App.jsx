import { useGlobalContext } from './components/Context/context'
import { Modal } from './components/Modal/Modal'
import { Navbar } from './components/Navbar/Navbar'
import { ProjectsContainer } from './components/ProjectsContainer/ProjectsContainer'



function App() {
  const { isModalOpen } = useGlobalContext()
  return (
    <>
      <Navbar />
      <ProjectsContainer />
      {isModalOpen && <Modal />}
    </>
  )
}

export default App
