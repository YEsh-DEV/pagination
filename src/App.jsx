import React, { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import { paginateArray, getTotalPages, filterUsers } from './utils/pagination';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import PageSizeSelect from './components/PageSizeSelect/PageSizeSelect';
import UserGrid from './components/UserGrid/UserGrid';
import Pagination from './components/Pagination/Pagination';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';
import EmptyState from './components/EmptyState/EmptyState';
import UserModal from './components/UserModal/UserModal';
import Footer from './components/Footer/Footer';

import './App.css';

const API_URL = 'https://randomuser.me/api/?results=100';

function App() {
  const { data: users, loading, error, refetch } = useFetch(API_URL);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "warm";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Compute filtered users array based on search query
  const filteredUsers = filterUsers(users, searchQuery);

  // Compute total pages for current subset and page size
  const totalPages = getTotalPages(filteredUsers.length, pageSize);

  // Slice users for active page
  const currentUsers = paginateArray(filteredUsers, currentPage, pageSize);

  // Reset to Page 1 whenever search query or page size changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, pageSize]);

  // Ensure currentPage does not exceed totalPages if dataset shrinks
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  // Smooth scroll to top whenever page changes
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="app-layout">
      <Header 
        totalUsers={users.length} 
        filteredCount={filteredUsers.length} 
        activePage={currentPage}
        totalPages={totalPages}
        theme={theme}
        setTheme={setTheme}
      />

      <main className="app-main-container">
        {/* Controls Section: Search Bar & Page Size Dropdown */}
        <section className="controls-bar">
          <div className="search-flex">
            <SearchBar 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
              matchCount={filteredUsers.length} 
            />
          </div>
          <div className="select-flex">
            <PageSizeSelect 
              pageSize={pageSize} 
              setPageSize={setPageSize} 
            />
          </div>
        </section>

        {/* Content Section: Loading, Error, Empty State, or User Grid */}
        <section className="content-section">
          {loading ? (
            <Loading />
          ) : error ? (
            <Error message={error} onRetry={refetch} />
          ) : filteredUsers.length === 0 ? (
            <EmptyState searchQuery={searchQuery} onReset={handleResetSearch} />
          ) : (
            <>
              <UserGrid 
                users={currentUsers} 
                onSelectUser={(user) => setSelectedUser(user)} 
              />
              
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange} 
              />
            </>
          )}
        </section>
      </main>

      <Footer />

      {/* User Details Modal */}
      {selectedUser && (
        <UserModal 
          user={selectedUser} 
          onClose={() => setSelectedUser(null)} 
        />
      )}
    </div>
  );
}

export default App;
