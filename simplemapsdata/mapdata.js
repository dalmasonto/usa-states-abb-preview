var simplemaps_usmap_mapdata = {

	main_settings: {
		//General settings
		width: 'responsive', //or 'responsive'
		background_color: '#FFFFFF',
		background_transparent: 'yes',
		border_color: '#ffffff',
		popups: 'detect', //on_click, on_hover, or detect

		//State defaults
		state_description: 'State Description',
		state_color: '#88A4BC',
		state_hover_color: '#3B729F',
		state_url: '',
		border_size: 1.5,
		all_states_inactive: 'no',
		all_states_zoomable: 'yes',

		//Location defaults
		location_description: 'Add location markers using latitude and longitude!',
		location_color: '#2041D4',
		location_opacity: .8,
		location_hover_opacity: 1,
		location_url: '',
		location_size: 25,
		location_type: 'square', // circle, square, image
		location_image_source: 'frog.png', //name of image in the map_images folder		
		location_border_color: '#FFFFFF',
		location_border: 2,
		location_hover_border: 2.5,
		all_locations_inactive: 'no',
		all_locations_hidden: 'no',

		//Labels
		label_color: '#d5ddec',
		label_hover_color: '#d5ddec',
		label_size: 22,
		label_font: 'Arial',
		hide_labels: 'no',
		hide_eastern_labels: 'no',

		//Zoom settings
		manual_zoom: 'no', //use manual zoom controls
		back_image: 'no',   //Use image instead of arrow for back zoom				
		initial_back: 'no', //Show back button when zoomed out and do this JavaScript upon click		
		initial_zoom: -1,  //-1 is zoomed out, 0 is for the first continent etc	
		initial_zoom_solo: 'no', //hide adjacent states when starting map zoomed in
		region_opacity: 1,
		region_hover_opacity: .6,
		zoom_out_incrementally: 'yes',  // if no, map will zoom all the way out on click
		zoom_percentage: .99,
		zoom_time: .5, //time to zoom between regions in seconds

		//Popup settings
		popup_color: 'white',
		popup_opacity: .9,
		popup_shadow: 1,
		popup_corners: 5,
		popup_font: '12px/1.5 Verdana, Arial, Helvetica, sans-serif',
		popup_nocss: 'no', //use your own css	

		//Advanced settings
		div: 'map',
		auto_load: 'yes',
		url_new_tab: 'yes',
		images_directory: '/static/lib/simplemaps/map_images/', //e.g. 'map_images/'
		fade_time: .1, //time to fade out		
		import_labels: 'no',
		link_text: 'View Website'  //Text mobile browsers will see for links	

	},


	state_specific: {
		"HI": {
			name: 'Hawaii',
			description: 'Capital: Honolulu, Nickname: Aloha state',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"AK": {
			name: 'Alaska',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"FL": {
			name: 'Florida',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"NH": {
			name: 'New Hampshire',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"VT": {
			name: 'Vermont',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"ME": {
			name: 'Maine',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"RI": {
			name: 'Rhode Island',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"NY": {
			name: 'New York',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"PA": {
			name: 'Pennsylvania',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"NJ": {
			name: 'New Jersey',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"DE": {
			name: 'Delaware',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"MD": {
			name: 'Maryland',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"VA": {
			name: 'Virginia',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"WV": {
			name: 'West Virginia',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"OH": {
			name: 'Ohio',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"IN": {
			name: 'Indiana',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"IL": {
			name: 'Illinois',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"CT": {
			name: 'Connecticut',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"WI": {
			name: 'Wisconsin',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"NC": {
			name: 'North Carolina',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"DC": {
			name: 'District of Columbia',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"MA": {
			name: 'Massachusetts',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"TN": {
			name: 'Tennessee',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"AR": {
			name: 'Arkansas',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"MO": {
			name: 'Missouri',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"GA": {
			name: 'Georgia',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"SC": {
			name: 'South Carolina',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"KY": {
			name: 'Kentucky',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"AL": {
			name: 'Alabama',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"LA": {
			name: 'Louisiana',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"MS": {
			name: 'Mississippi',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"IA": {
			name: 'Iowa',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"MN": {
			name: 'Minnesota',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"OK": {
			name: 'Oklahoma',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"TX": {
			name: 'Texas',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"NM": {
			name: 'New Mexico',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"KS": {
			name: 'Kansas',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"NE": {
			name: 'Nebraska',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"SD": {
			name: 'South Dakota',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"ND": {
			name: 'North Dakota',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"WY": {
			name: 'Wyoming',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"MT": {
			name: 'Montana',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"CO": {
			name: 'Colorado',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"UT": {
			name: 'Utah',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"AZ": {
			name: 'Arizona',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"NV": {
			name: 'Nevada',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"OR": {
			name: 'Oregon',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"WA": {
			name: 'Washington',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"CA": {
			name: 'California',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"MI": {
			name: 'Michigan',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"ID": {
			name: 'Idaho',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		// Territories - Hidden unless hide is set to "no"
		"GU": {
			name: 'Guam',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			hide: 'yes'
		},
		"VI": {
			name: 'Virgin Islands',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			hide: 'yes'
		},
		"PR": {
			name: 'Puerto Rico',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			hide: 'yes'
		},
		"MP": {
			name: 'Northern Mariana Islands',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			hide: 'yes'
		},
		"AS": {
			name: 'American Samoa',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			hide: 'yes'
		}
	},

	locations: {
		0: {
			name: 'New York City',
			lat: 40.7143528,
			lng: -74.0059731
		},

		1: {
			name: 'Anchorage',
			lat: 61.2180556,
			lng: -149.9002778,
			color: 'default'
		}
	},

	labels: {
		'NH': { parent_id: 'NH', x: '932', y: '183', pill: 'yes', width: 45, display: 'all' },
		'VT': { parent_id: 'VT', x: '883', y: '243', pill: 'yes', width: 45, display: 'all' },
		'RI': { parent_id: 'RI', x: '932', y: '273', pill: 'yes', width: 45, display: 'all' },
		'NJ': { parent_id: 'NJ', x: '883', y: '273', pill: 'yes', width: 45, display: 'all' },
		'DE': { parent_id: 'DE', x: '883', y: '303', pill: 'yes', width: 45, display: 'all' },
		'MD': { parent_id: 'MD', x: '932', y: '303', pill: 'yes', width: 45, display: 'all' },
		'DC': { parent_id: 'DC', x: '884', y: '332', pill: 'yes', width: 45, display: 'all' },
		'MA': { parent_id: 'MA', x: '932', y: '213', pill: 'yes', width: 45, display: 'all' },
		'CT': { parent_id: 'CT', x: '932', y: '243', pill: 'yes', width: 45, display: 'all' },
		'HI': { parent_id: 'HI', x: 305, y: 565, pill: 'yes' },
		'AK': { parent_id: 'AK', x: '113', y: '495' },
		'FL': { parent_id: 'FL', x: '773', y: '510' },
		'ME': { parent_id: 'ME', x: '893', y: '85' },
		'NY': { parent_id: 'NY', x: '815', y: '158' },
		'PA': { parent_id: 'PA', x: '786', y: '210' },
		'VA': { parent_id: 'VA', x: '790', y: '282' },
		'WV': { parent_id: 'WV', x: '744', y: '270' },
		'OH': { parent_id: 'OH', x: '700', y: '240' },
		'IN': { parent_id: 'IN', x: '650', y: '250' },
		'IL': { parent_id: 'IL', x: '600', y: '250' },
		'WI': { parent_id: 'WI', x: '575', y: '155' },
		'NC': { parent_id: 'NC', x: '784', y: '326' },
		'TN': { parent_id: 'TN', x: '655', y: '340' },
		'AR': { parent_id: 'AR', x: '548', y: '368' },
		'MO': { parent_id: 'MO', x: '548', y: '293' },
		'GA': { parent_id: 'GA', x: '718', y: '405' },
		'SC': { parent_id: 'SC', x: '760', y: '371' },
		'KY': { parent_id: 'KY', x: '680', y: '300' },
		'AL': { parent_id: 'AL', x: '655', y: '405' },
		'LA': { parent_id: 'LA', x: '550', y: '435' },
		'MS': { parent_id: 'MS', x: '600', y: '405' },
		'IA': { parent_id: 'IA', x: '525', y: '210' },
		'MN': { parent_id: 'MN', x: '506', y: '124' },
		'OK': { parent_id: 'OK', x: '460', y: '360' },
		'TX': { parent_id: 'TX', x: '425', y: '435' },
		'NM': { parent_id: 'NM', x: '305', y: '365' },
		'KS': { parent_id: 'KS', x: '445', y: '290' },
		'NE': { parent_id: 'NE', x: '420', y: '225' },
		'SD': { parent_id: 'SD', x: '413', y: '160' },
		'ND': { parent_id: 'ND', x: '416', y: '96' },
		'WY': { parent_id: 'WY', x: '300', y: '180' },
		'MT': { parent_id: 'MT', x: '280', y: '95' },
		'CO': { parent_id: 'CO', x: '320', y: '275' },
		'UT': { parent_id: 'UT', x: '223', y: '260' },
		'AZ': { parent_id: 'AZ', x: '205', y: '360' },
		'NV': { parent_id: 'NV', x: '140', y: '235' },
		'OR': { parent_id: 'OR', x: '100', y: '120' },
		'WA': { parent_id: 'WA', x: '130', y: '55' },
		'ID': { parent_id: 'ID', x: '200', y: '150' },
		'CA': { parent_id: 'CA', x: '79', y: '285' },
		'MI': { parent_id: 'MI', x: '663', y: '185' },
		'PR': { parent_id: 'PR', x: '620', y: '545' },
		'GU': { parent_id: 'GU', x: '550', y: '540' },
		'VI': { parent_id: 'VI', x: '680', y: '519' },
		'MP': { parent_id: 'MP', x: '570', y: '575' },
		'AS': { parent_id: 'AS', x: '665', y: '580' }
	}

}




