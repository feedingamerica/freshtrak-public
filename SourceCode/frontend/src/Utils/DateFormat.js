import moment from 'moment';

export const formateDateDayAndDate = x => moment(x).format('dddd, M/D/YYYY');
