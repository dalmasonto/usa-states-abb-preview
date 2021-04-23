const all_options = document.querySelectorAll('option');
const count = document.getElementById('all_count');

const my_tabs = document.getElementById('my-tabs');
const my_tabs_body = document.getElementById('my-tabs-body');

const my_tabs_right = document.getElementById('my-tabs_right');
const my_tabs_body_right = document.getElementById('my-tabs-body_right');

const states_list_tab1 = document.getElementById('tab1');
const states_list_tab_fav = document.getElementById('tab2');

const datalist = document.getElementById('all_states');
const datalistArray = [];


const stateComponent = (state) => {

	const el = `<div class="single-state">
					<div class="single-state-avatar">
						${state.abbreviation}
					</div>
					<div class="single-state-details">
						<h3>${state.state}</h3>
						<h2>${state.abbreviation}</h2>
						<!-- <h4>${state.capital}</h4> -->
						<p>${state.nickname}</p>
					</div>
					<div class="single-state-fav" onClick = "addToFav({state: '${state.state}', abbreviation: '${state.abbreviation}', capital: '${state.capital}', nickname: '${state.nickname}'})">
${states_in_cookie[state.state] ? '<i class="fa fa-heart fav"></i>' : '<i class="fa fa-heart-o fav-o"></i>'}
					</div >
	<div class="single-state-read" onclick="speak('${state.state}')">
		<i class="fa fa-play play"></i>
	</div>
				</div > `;
	return el
}

// onClick = "addToFav({state: '${state.state}', abbreviation: '${state.abbreviation}', capital: '${state.capital}', nickname: '${state.nickname}'})"

const renderStates = () => {

	let statesTorender_datalist_options = '';
	let statesTorender_all = '';
	let statesTorender_fav = '';
	all_states.forEach(state => {
		const option = `<option value = "${state.abbreviation} - ${state.state}" /> `;
		statesTorender_datalist_options += option
		// datalist.insertAdjacentHTML('beforeEnd', option)
		// states_list_tab1.insertAdjacentHTML('beforeEnd', stateComponent(state))
		statesTorender_all += stateComponent(state)
	})
	console.log('STATES IN COOKIE ', states_in_cookie)
	// for (let index = 0; index < states_in_cookie.length; index++) {
	// 	console.log('coookie', states_in_cookie[i])
	// 	statesTorender_fav += stateComponent(states_in_cookie[index])
	// }

	for (const [key, value] of Object.entries(states_in_cookie)) {
		console.log(`${key}: ${value}`);
		statesTorender_fav += stateComponent(states_in_cookie[key])
	}

	datalist.innerHTML = statesTorender_datalist_options;
	states_list_tab1.innerHTML = statesTorender_all;
	states_list_tab_fav.innerHTML = statesTorender_fav;
}

// renderStates()

const states_in_cookie = new States();
// states_in_cookie.startCookie();
states_in_cookie.uploadCookieData();
states_in_cookie.updateEverything();


function addToFav(some) {
	// console.log(some)
	states_in_cookie.addStateToCookie(some)
}

function renderTabs(tabsId, tabsBody) {
	tabsId.addEventListener('click', e => {
		const my_tabs_children = tabsId.children;
		const my_tabs_body_children = tabsBody.children;
		console.log('CLICKED')

		const active_id = e.target.closest('.tab').dataset.target;

		for (var i = 0; i < my_tabs_children.length; i++) {
			my_tabs_children[i].classList.remove('active');
			my_tabs_body_children[i].classList.remove('active-tab');
		}
		e.target.closest('.tab').classList.add('active');
		setTimeout(() => {
			document.getElementById(active_id).classList.add('active-tab')
		}, 400)
	})
}

renderTabs(my_tabs, my_tabs_body)

renderTabs(my_tabs_right, my_tabs_body_right)

function speak(message) {
	var msg = new SpeechSynthesisUtterance(message)
	// var voices = window.speechSynthesis.getVoices()
	// msg.voice = voices[0]
	window.speechSynthesis.speak(msg)
}

function showname(m) {
	console.log(m)
}
