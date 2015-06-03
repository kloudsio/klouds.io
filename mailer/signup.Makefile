
# Template Name

NAME := signup

# From

EMAIL := from_email@example.com
FROM := Daniel Sont (Klouds.io Dev)

# Email
SUBJECT := Tidings of Awesome!!


# Email Body (html)

define HTML
To whom it may concern <i>(you)</i>: YOOOOOOOO!!! :)

Well, this is our chance to give you a good first impression!

<i>Monologue of unprecedented formality.</i>
<pre>
 klouds: Nice to meet you!
 klouds: Hello? :)
 klouds: you are pretty! *heartttts*  <i>(desperation)</i>
 <span style=\"color: #336677\">user:</span> ohai!!  lol. Whats up man?!
</pre>

... this is serious business.

We will do our best to give you a steady ride.

Wish us luck!

Sincerely, Daniel Sont <i>(klouds.io)</i>

p.s. Mr Jake, the renowned, will likely slap me with a cold trout for this email... >.> brb.

<div mc:edit=\"editable\">editable content</div>
endef

# Email Body (text)

define TEXT
Well, this is our chance to give you a good first impression!

klouds: Nice to meet you!
klouds: Hello? :)
klouds: you are pretty! <3 <3 <3  (desperation)
user: ohai!!  lol, how are you?!

... this is serious business.

We will do our best to give you a steady ride.

Wish us luck!

klouds.io

p.s. Mr Jake, the renowned, will likely slap me with a cold trout for this email... >.> brb.
endef

create:
	curl -A 'Mandrill-Curl/1.0' \
		-d key="grK_IQnwxNWJird9_Bz7Yg" \
		-d name="$(NAME)" \
		-d from_email="${EMAIL}" \
		-d from_name="$(FROM)" \
		-d subject="$(SUBJECT)" \
		-d code="$${HTML}" \
		-d text="$${TEXT}" \
		-d publish=true 'https://mandrillapp.com/api/1.0/messages/send.json'
