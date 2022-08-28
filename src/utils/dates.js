import moment from 'moment';

export const getCurrentDate = () => moment(new Date()).format('DD-MM-YYYY');

export const formatDate = date => date.split('-').reverse().join('-');

export const createTime = date => {
  const baseDate = new Date(date);
  const hours = String(baseDate.getHours()).padStart(2, '0');
  const minutes = String(baseDate.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`;
};

export const compareTime = (a, b) => {
  const [firstHours, firstMinutes] = a.localTime.split(':');

  const [secondHours, secondMinutes] = b.localTime.split(':');

  [firstHours, firstMinutes, secondMinutes, secondHours].forEach(el => Number(el));

  if (firstHours === secondHours) {
    return firstMinutes - secondMinutes;
  }

  return firstHours - secondHours;
};
