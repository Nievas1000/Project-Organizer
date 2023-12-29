export const NavbarProject = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className='d-flex mt-5 project-navbar'>
      <span
        className={selectedTab === 'summary' ? 'active' : ''}
        onClick={() => setSelectedTab('summary')}
      >
        Summary
      </span>
      <span
        className={selectedTab === 'people' ? 'active' : ''}
        onClick={() => setSelectedTab('people')}
      >
        People
      </span>
      <span
        className={selectedTab === 'actions' ? 'active' : ''}
        onClick={() => setSelectedTab('actions')}
      >
        Actions
      </span>
    </div>
  )
}
