import React, { useMemo } from 'react';

const Pagination = ({ currentPage, lastPage, onPageChange }) => {
  const pageSize = 10;

  const visiblePages = useMemo(() => {
    const startPage = Math.floor((currentPage - 1) / pageSize) * pageSize + 1;
    const endPage = Math.min(startPage + pageSize - 1, lastPage);
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }, [currentPage, lastPage]);

  const changePage = (page) => {
    if (page < 1 || page > lastPage) return;
    onPageChange(page);
  };

  return (
    <div className="pagination">
      <span className="icon first" onClick={() => currentPage !== 1 && changePage(1)}>
        &#xf100;
      </span>
      <span className="icon pre" onClick={() => currentPage !== 1 && changePage(currentPage - 1)}>
        &#xf104;
      </span>
      {visiblePages.map((page) => (
        <span key={page} className={`page ${page === currentPage ? 'active' : ''}`} onClick={() => changePage(page)}>
          {page}
        </span>
      ))}
      <span className="icon next" onClick={() => currentPage !== lastPage && changePage(currentPage + 1)}>
        &#xf105;
      </span>
      <span className="icon last" onClick={() => currentPage !== lastPage && changePage(lastPage)}>
        &#xf101;
      </span>
    </div>
  );
};

export default Pagination;
