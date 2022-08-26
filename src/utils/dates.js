import moment from 'moment';

const getCurrentDate = () => moment(new Date()).format('DD-MM-YYYY');

export default getCurrentDate;
