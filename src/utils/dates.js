import moment from 'moment';

export const getCurrentDate = () => moment(new Date()).format('DD-MM-YYYY');

export const formatDate = date => date.split('-').reverse().join('-');
