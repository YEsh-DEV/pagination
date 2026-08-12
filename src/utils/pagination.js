/**
 * Slices an array of items for the active pagination page.
 * 
 * @param {Array} items - Full list of items
 * @param {number} currentPage - Active page number (1-indexed)
 * @param {number} itemsPerPage - Number of items shown per page
 * @returns {Array} Sliced subset of items
 */
export const paginateArray = (items = [], currentPage = 1, itemsPerPage = 10) => {
  if (!Array.isArray(items) || items.length === 0) return [];
  const startIndex = (currentPage - 1) * itemsPerPage;
  return items.slice(startIndex, startIndex + itemsPerPage);
};

/**
 * Calculates total number of pages required.
 * 
 * @param {number} totalItems - Total count of items
 * @param {number} itemsPerPage - Items displayed per page
 * @returns {number} Calculated total pages
 */
export const getTotalPages = (totalItems = 0, itemsPerPage = 10) => {
  if (totalItems <= 0 || itemsPerPage <= 0) return 0;
  return Math.ceil(totalItems / itemsPerPage);
};

/**
 * Generates an array of page numbers to render in pagination controls.
 * 
 * @param {number} currentPage - Currently active page
 * @param {number} totalPages - Total available pages
 * @param {number} maxVisible - Maximum page buttons to display before using ellipses
 * @returns {Array<number|string>} Array of page numbers and '...' indicators
 */
export const getPageNumbers = (currentPage = 1, totalPages = 1, maxVisible = 5) => {
  if (totalPages <= 0) return [];
  if (totalPages <= maxVisible) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages = [];
  const half = Math.floor(maxVisible / 2);
  let start = Math.max(2, currentPage - half);
  let end = Math.min(totalPages - 1, currentPage + half);

  if (currentPage <= half + 1) {
    end = maxVisible - 1;
  } else if (currentPage >= totalPages - half) {
    start = totalPages - maxVisible + 2;
  }

  pages.push(1);

  if (start > 2) {
    pages.push('...');
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < totalPages - 1) {
    pages.push('...');
  }

  pages.push(totalPages);

  return pages;
};

/**
 * Filters user list by first name, last name, full name, email, or country.
 * 
 * @param {Array} users - List of user objects from Random User API
 * @param {string} query - Search term entered by user
 * @returns {Array} Filtered list of users
 */
export const filterUsers = (users = [], query = '') => {
  const searchTerm = query.trim().toLowerCase();
  if (!searchTerm) return users;

  return users.filter((user) => {
    const firstName = user.name?.first?.toLowerCase() || '';
    const lastName = user.name?.last?.toLowerCase() || '';
    const fullName = `${firstName} ${lastName}`;
    const email = user.email?.toLowerCase() || '';
    const country = user.location?.country?.toLowerCase() || '';

    return (
      firstName.includes(searchTerm) ||
      lastName.includes(searchTerm) ||
      fullName.includes(searchTerm) ||
      email.includes(searchTerm) ||
      country.includes(searchTerm)
    );
  });
};
