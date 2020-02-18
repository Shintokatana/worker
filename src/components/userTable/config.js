export default {
	employees: 1,
	employers: 2,
	admin: 3
}

export const tableOptions = {
	resizableColumns: false,
	perPage: 10,
	perPageValues: [],
	filterable: false,
	highlightMatches: false,
	filterByColumn: false,
	sortable: [],
	skin: '',
	hiddenColumns: ['id'],
	headings: {
		delete: false
	},
	pagination: {
		chunk: 5
	}
};

export const columns = {
	1: ['id', 'name', 'category', 'email', 'delete'],
	2: ['id', 'name', 'business', 'email', 'delete']
};
//redo to actual values
