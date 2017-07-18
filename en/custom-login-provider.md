# Creating a Custom Login Provider

Social Login is extensible and supports third-party login providers.

You can take [Craft GitHub](https://github.com/dukt/craft-github) as a starting point for create your own login provider.

## Social Login Provider

Here is an example of a social login provider class:

    <?php
    namespace Dukt\Social\LoginProviders;

    use Craft\Craft;

    class Github extends BaseProvider
    {
        public function getName()
        {
            return 'GitHub';
        }
        public function getOauthProviderHandle()
        {
            return 'github';
        }
    }