# Configuration

In addition to the settings available in the CP Settings > Plugins > Social screen, the config items below can be placed into a social.php file in your craft/config directory:

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

Defines the OAuth Client ID & secret for login providers.

    <?php
    
    return array(
        'loginProviders' => [
            'google' => [
                'oauthProviderOptions' => [
                    'clientId' => 'xxxxxxxxxx',
                    'clientSecret' => 'xxxxxxxxxxxxxxxxxxxx'
                ],
            ],
            'facebook' => [
                'oauthProviderOptions' => [
                    'clientId' => 'xxxxxxxxxx',
                    'clientSecret' => 'xxxxxxxxxxxxxxxxxxxx'
                ],
            ],
            'twitter' => [
                'oauthProviderOptions' => [
                    'clientId' => 'xxxxxxxxxx',
                    'clientSecret' => 'xxxxxxxxxxxxxxxxxxxx'
                ],
            ]
        ]
    );


## showCpSection

Toggles the visibility of the Social Login menu item in the Control Panel sidebar.

## userMapping

User profile field mapping.