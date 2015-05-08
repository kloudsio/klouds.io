



### Interesting Ideas

**https://github.com/simov/grant**

87 Supported Providers / OAuth Playground

500px | amazon | angellist | appnet | asana | assembla | basecamp | bitbucket | bitly | box | buffer | cheddar | coinbase | dailymile | dailymotion | deezer | deviantart | digitalocean | disqus | dropbox | edmodo | elance | eventbrite | evernote | everyplay | eyeem | facebook | feedly | fitbit | flattr | flickr | flowdock | foursquare | freshbooks | geeklist | getpocket | github | gitter | goodreads | google | harvest | heroku | imgur | instagram | jawbone | linkedin | live | mailchimp | meetup | mixcloud | moves | odesk | openstreetmap | paypal | podio | rdio | redbooth | reddit | runkeeper | salesforce | shopify | skyrock | slack | slice | soundcloud | spotify | stackexchange | stocktwits | stormz | strava | stripe | traxo | trello | tripit | tumblr | twitch | twitter | uber | vimeo | vk | withings | wordpress | xing | yahoo | yammer | yandex | zendesk

https://github.com/simov/purest

Purest is built on top of request, adding just as needed configuration to ensure seamless communication with any REST API provider in a consistent and straightforward way


grant: {
	server: {
		protocol: "http",
		host: "localhost"
	},
	facebook: {
		key: "[APP_ID]",
		secret: "[APP_SECRET]",
		callback: "/handle_facebook_response"
	},
	twitter: {
		key: "[CONSUMER_KEY]",
		secret: "[CONSUMER_SECRET]",
		callback: "/handle_twitter_response"
	}
},
