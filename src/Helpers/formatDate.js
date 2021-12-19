import moment from 'moment';

const formatDate = (date) => {
	return moment(date).format("ll")
}

export default formatDate