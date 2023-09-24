import { useMemo, useState } from 'react'
import './App.css'
import Navbar from './components/nav-bar'
import SideFilters from './components/side-filters'
import MainContent from './components/main-content'
import SearchJobResults from './components/search-job-results'
import SearchCandidateResults from './components/search-candidate-results'
import SearchBar from './components/search-bar'
import { User } from './mock/user'

const USER_MOCK: User = {
  type: "candidate",
  name: "Enmanuel Balcacer",
  photo: "https://lh3.googleusercontent.com/a/ACg8ocJ1X1h-3HslGuWdHpArs0_WbROlzM40FoOp594KU_B-th3d=s120"
}

function App() {
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>("")

  const searchFilters = useMemo(() => {
    setIsSearching(searchTerm != "")

  }, [searchTerm])

  const handleSubmitSearch = () => {
    console.log(searchFilters);
  }

  const handleOnSearch = (value: string) => {
    setSearchTerm(value)
  }

  return (
    <main className='flex'>
      <SideFilters />
      <section className='flex flex-col'>
        <Navbar userData={USER_MOCK} />
        <SearchBar onSearch={handleOnSearch} onSubmit={handleSubmitSearch} />
        {isSearching ? (
          <>
            {USER_MOCK.type === "candidate" ? (
              <SearchJobResults />
            ) : (
              <SearchCandidateResults />
            )}
          </>
        ) : (
          <MainContent />
        )}
      </section>
      <SideFilters />
    </main>
  )
}

export default App
