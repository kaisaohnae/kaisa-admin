import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  format?: string;
  isAll?: boolean;
  onSetStartDate: (date: Date | null) => void;
}

const DatePickerComponent: React.FC<Props> = ({
                                                format = 'yyyy-MM-dd',
                                                isAll = true,
                                                onSetStartDate,
                                              }) => {
  const [allChecked, setAllChecked] = useState(isAll);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const handleAllChecked = () => {
    setAllChecked(!allChecked);
    if (!allChecked) {
      setStartDate(null);
      onSetStartDate(null);
    } else {
      const defaultDate = new Date();
      setStartDate(defaultDate);
      onSetStartDate(defaultDate);
    }
  };

  return (
    <div>
      {isAll && (
        <label>
          <input type="checkbox" checked={allChecked} onChange={handleAllChecked}/> 전체
        </label>
      )}
      {!allChecked && (
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            onSetStartDate(date);
          }}
          dateFormat={format === 'yyyy-MM-dd' ? 'yyyy-MM-dd' : 'yyyy-MM-dd HH:mm'}
          placeholderText={format === 'yyyy-MM-dd' ? '날짜 선택' : '날짜 및 시간 선택'}
        />
      )}
    </div>
  );
};

export default DatePickerComponent;
