# Configuration

In addition to the settings available in the CP Settings → Plugins → Social screen, the config items below can be placed into a social.php file in your craft/config directory:

## allowEmailMatch

Allow email matching.

Default: `false`

## autoFillProfile

Automatically fills user fields when a user registers, based on userMapping config variables.

## defaultGroup

User group users will be added to when registering with a social service.

## enableCpLogin

Enable Social Login buttons on the Control Panel's login screen.

## enableSocialLogin

When disabled, users are not be able to social login or register.

## enableSocialRegistration

When disabled, users will not able to register with a social service, but will still be able to social login to an existing account.

## lockDomains
Lock social registration to specific domains. The list of locked domains must be provided as as array.

Default: `[]`

## loginProviders

Defines the OAuth client ID, secret, scope, authorization options and user mapping for login providers.

    <?php
    
    return array(
        'loginProviders' => [
            'google' => [
                'clientId' => 'OAUTH_CLIENT_ID',
                'clientSecret' => 'OAUTH_CLIENT_SECRET',
                'scope' => ["CUSTOM_SCOPE"],
                'authorizationOptions' => ["CUSTOM_AUTHORIZATION_OPTION"]
            ],
            'facebook' => [
                'clientId' => 'OAUTH_CLIENT_ID',
                'clientSecret' => 'OAUTH_CLIENT_SECRET',
                'userMapping' => [
                    'firstName' => '{{ firstName }}',
                    'lastName' => '{{ lastName }}',
                    'location' => '{{ locationName }}',
                    'gender' => '{{ gender }}',
                    'profileUrl' => '{{ link }}',
                ],
            ],
            'twitter' => [
                'clientId' => 'OAUTH_CLIENT_ID',
                'clientSecret' => 'OAUTH_CLIENT_SECRET',
                'userMapping' => [
                    'location' => '{{ location }}',
                    'profileUrl' => '{{ nickname }}',
                ],
            ]
        ]
    );


## showCpSection

Toggles the visibility of the Social Login menu item in the Control Panel sidebar.
