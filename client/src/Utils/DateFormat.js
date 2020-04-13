import moment from 'moment';

export const formatDateDayAndDate = x => moment(x).format('dddd, M/D/YYYY');
