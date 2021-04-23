const setCookie = (name, value) => {
	document.cookie = `${name}=${value}; expires=Sun, 1 Jan 2023 00:00:00 UTC; domain=;path=/`
	// document.cookie = `${name}=${value}; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/`
}

function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}


function isEmpty(obj) {
	if (obj && Object.keys(obj).length == 0) {
		return true;
	}
}

const states_cookie_name = 'states';

class States {

	constructor() { }

	startCookie() {
		setCookie(states_cookie_name, JSON.stringify(this));
	}

	updateStatesCookie() {
		if (getCookie(states_cookie_name)) {
		}
		else {
			setCookie(states_cookie_name, JSON.stringify(this))
		}
	}

	updateEverything() {
		this.updateStatesCookie();
		renderStates();
	}

	addStateToCookie(state) {
		if (this[state.state]) {
			delete this[state.state]
			// setCookie(states_cookie_name, JSON.stringify(this))
			this.updateEverything()
		}
		else {
			this[state.state] = state
			setCookie(states_cookie_name, JSON.stringify(this))
			this.updateEverything()
		}
	}

	removeStateFromCookie(state) {
		delete this[state.state]
	}

	getAllStatesFromCookie() {
		if (getCookie(states_cookie_name)) {
			// console.log(this)
			// return JSON.parse(this)
			return this
		}
		// return {}
	}

	uploadCookieData() {
		const statesCookie = getCookie(states_cookie_name)
		if (statesCookie) {
			if (statesCookie === '{}') {
				console.log('CART DETAILS ', 'EMPTY')
			}
			else {
				const statesJSON = JSON.parse(statesCookie);
				const statesInCookie = Object.keys(statesJSON);
				statesInCookie.forEach((key, index) => {
					if (isEmpty(statesJSON[key])) {
						// return ;
					}
					else {
						const state = {
							'state': statesJSON[key].state,
							'abbreviation': statesJSON[key].abbreviation,
							'capital': statesJSON[key].capital,
							'nickname': statesJSON[key].nickname
						}
						this[statesJSON[key].state] = state
						// console.log(this)
					}
				});
			}
		}

		// else{
		// 	this.updateCartCookie()
		// }
		this.updateEverything();
	}




}

