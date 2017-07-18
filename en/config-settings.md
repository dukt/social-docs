# Config Settings

In addition to the settings available in the `CP > Settings > Social Login` screen, 
the config items below can be placed into a `social.php` file in your `craft/config` directory:


## User Profile Mapping

Maps user data from social accounts with Craft user fields to auto-fill the user profile on registration.
Auto-fill can be disabled in the plugin settings.

    /**
     * Twitter Configuration
     */
    'twitter' => [
        'userMapping' => [
            'location' => '{{ location }}',
            'profileUrl' => '{{ nickname }}',
        ],
    ],
	
    /**
     * Facebook Configuration
     */
    'facebook' => [
        'userMapping' => [
            'firstName' => '{{ firstName }}',
            'lastName' => '{{ lastName }}',
            'location' => '{{ locationName }}',
            'gender' => '{{ gender }}',
            'profileUrl' => '{{ link }}',
        ],
    ],

## Custom Provider Scope

The default scope can be changed to a custom one for each provider.
Remember that changing the scope can affect which attributes are available for user profile mapping.

	'facebook' => [
		'scope' => [
			'email'
		],
		'userMapping' => [
			...
		],
	],

## allowEmailMatch

    'allowEmailMatch' => false

Will connect a social user to an existing Craft if the email provided by the social provider matches the email of a Craft user.

**Be extra careful** with this config because it can make your site easily hackable.
If the service you use for social login doesn't check the email of their customers, anyone could easily change their address to use the same one as one of your Craft users and get in straightaway.

Double check and double test all of the possible scenarios to make sure your social login process is as secure as possible.

**If you are not sure what you're doing, keep that setting set to `false`.**

## lockDomains

Lock social registration to specific domain names.

    'lockDomains' => [
        'dukt.net'
    ],