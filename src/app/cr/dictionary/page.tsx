'use client';

import { useState, useEffect, useRef } from 'react';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css';
import gridUtil from '@/utils/grid-util';
import excelUtil from '@/utils/excel-util';
import DictionaryService from '@/service/common/dictionary-service';
import SelectDate from '@/components/select-date';
import SelectGroupDate from '@/components/select-group-date';
import Pagination from '@/components/pagination';

export default function DictionaryPage() {
  const [search, setSearch] = useState({
    abb: '',
    updater: '',
    creator: '',
    startUpdateDt: null,
    endUpdateDt: null,
    createDt: null,
  });
  const [data, setData] = useState({
    list: [],
    audit: false,
    totalCount: 0,
    currentPage: 1,
    lastPage: 1,
  });
  const gridRef = useRef(null);
  const selectedRow = useRef(null as any);

  useEffect(() => {
    if (gridRef.current) {
      const hot = new Handsontable(gridRef.current as any, {
        data: data.list,
        colHeaders: [
          ...gridUtil.commonColumnNames,
          '약어',
          '한국어',
          '영어',
          '설명',
          ...gridUtil.auditColumnNames
        ],
        hiddenColumns: gridUtil.hiddenColumns([]), // 0 mode 는 감추기
        columns: [
          ...gridUtil.commonColumns,
          {data: 'abb', type: 'text', readOnly: true},
          {data: 'korean', type: 'text', width: 150},
          {data: 'english', type: 'text', width: 150},
          {data: 'memo', type: 'text', width: 200},
          ...gridUtil.auditColumns,
        ],
        /*cells: function (row, col) {
          return gridUtil.cellsEvent({row, col, grid: data.grid, self: this, pk: [1]});
        },
        afterChange(changes, source) {
          gridUtil.afterChangeEvent({changes, source, gridProps, grid: data.grid, self: this});
        },*/
        afterSelectionEnd: function (row, col, row2, col2) {
          selectedRow.current = row;
        },
        ...gridUtil.defaultProps,
      });
      return () => hot.destroy();
    }
  }, []);

  const getList = async () => {
    try {
      const res = await DictionaryService.getDictionaryList({ ...search, page: data.currentPage });
      setData((prev) => ({ ...prev, ...res.data }));
    } catch (err) {
      console.error(err);
    }
  };

  const handlePageChange = (page) => {
    setData((prev) => ({ ...prev, currentPage: page }));
    getList();
  };

  return (
    <div>
      <form
        className="search"
        onSubmit={(e) => {
          e.preventDefault();
          getList();
        }}
      >
        <fieldset>
          <legend>검색</legend>
          <input
            type="text"
            value={search.abb}
            onChange={(e) => setSearch({ ...search, abb: e.target.value })}
          />
        </fieldset>
        <button type="submit">검색</button>
      </form>
      <div ref={gridRef} className="grid-container"></div>
      {data.list.length === 0 && <div className="no-list">조회 내역이 없습니다.</div>}
      <Pagination currentPage={data.currentPage} lastPage={data.lastPage} onPageChange={handlePageChange} />
    </div>
  );
}
