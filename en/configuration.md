# Configuration

In addition to the settings available in the CP Settings > Plugins > Social screen, the config items below can be placed into a social.php file in your craft/config directory:

## allowEmailMatch
Allow email matching.

Default: `false`

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
