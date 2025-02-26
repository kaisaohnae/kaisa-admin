import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  date: [Date | null, Date | null];
  format?: string;
  isAll?: boolean;
  isTerm?: boolean;
  term?: number;
  onSetStartDate: (date: Date | null) => void;
  onSetEndDate: (date: Date | null) => void;
}

const DatePickerComponent: React.FC<Props> = ({
                                                date,
                                                format = 'yyyy-MM-dd',
                                                isAll = true,
                                                isTerm = true,
                                                term = 0,
                                                onSetStartDate,
                                                onSetEndDate,
                                              }) => {
  const [allChecked, setAllChecked] = useState(isAll);
  const [selectedTerm, setSelectedTerm] = useState(term);
  const [startDate, setStartDate] = useState<Date | null>(date[0]);
  const [endDate, setEndDate] = useState<Date | null>(date[1]);

  const setTerm = (n: number) => {
    setSelectedTerm(n);
    const newStartDate = new Date();

    switch (n) {
      case 1: // 1주일
        newStartDate.setDate(newStartDate.getDate() - 7);
        break;
      case 2: // 3개월
        newStartDate.setMonth(newStartDate.getMonth() - 3);
        break;
      case 3: // 6개월
        newStartDate.setMonth(newStartDate.getMonth() - 6);
        break;
      default:
        return;
    }

    setAllChecked(false);
    setStartDate(newStartDate);
    setEndDate(new Date());
    onSetStartDate(newStartDate);
    onSetEndDate(new Date());
  };

  const handleAllChecked = () => {
    setSelectedTerm(0);
    setAllChecked(!allChecked);

    if (!allChecked) {
      setStartDate(null);
      setEndDate(null);
      onSetStartDate(null);
      onSetEndDate(null);
    } else {
      setTerm(1);
    }
  };

  useEffect(() => {
    onSetStartDate(startDate);
  }, [startDate]);

  useEffect(() => {
    onSetEndDate(endDate);
  }, [endDate]);

  return (
    <div>
      {isTerm && (
        <span className="all-wrap">
          {isAll && (
            <label>
              <input type="checkbox" checked={allChecked} onChange={handleAllChecked} /> 전체
            </label>
          )}
        </span>
      )}

      {isTerm && (
        <span className="term-wrap">
          <button className={`button small gray ${selectedTerm === 1 ? 'on' : ''}`} onClick={() => setTerm(1)}>1주일</button>
          <button className={`button small gray ${selectedTerm === 2 ? 'on' : ''}`} onClick={() => setTerm(2)}>3개월</button>
          <button className={`button small gray ${selectedTerm === 3 ? 'on' : ''}`} onClick={() => setTerm(3)}>6개월</button>
        </span>
      )}

      {!allChecked && (
        <span className="picker-wrap" style={{ paddingRight: '5px' }}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat={format === 'yyyy-MM-dd' ? 'yyyy-MM-dd' : 'yyyy-MM-dd HH:mm'}
            placeholderText={format === 'yyyy-MM-dd' ? '날짜 선택' : '날짜 및 시간 선택'}
            disabled={allChecked}
            // maxDate={endDate}
          />
        </span>
      )}

      {!allChecked && (
        <span className="picker-wrap">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat={format === 'yyyy-MM-dd' ? 'yyyy-MM-dd' : 'yyyy-MM-dd HH:mm'}
            placeholderText={format === 'yyyy-MM-dd' ? '날짜 선택' : '날짜 및 시간 선택'}
            disabled={allChecked}
            // minDate={startDate}
          />
        </span>
      )}
    </div>
  );
};

export default DatePickerComponent;
