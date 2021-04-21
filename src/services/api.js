import axios from 'axios';

export const setTokenHeader = token => {
	token
		? (axios.defaults.headers.common[
				'Authorization'
			] = `Bearer ${token}`)
		: delete axios.defaults.headers.common[
				'Authorization'
			];
};

export const apiCall = (method, path, data) =>
	new Promise(async (resolve, reject) => {
		try {
			const res = await axios[method](path, data);
			return resolve(res.data);
		} catch (err) {
			return reject(err.response.data.error);
		}
	});
