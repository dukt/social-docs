## Usage

    <a href="{{ craft.social.loginUrl('google') }}">Login with Google</a>

## Custom redirect

    {% set redirect = 'account' %}

    <a href="{{ craft.social.loginUrl('google', { redirect: redirect }) }}">Login with Google</a>

## Multiple providers

    {% for provider in craft.social.getLoginProviders() %}
        <p>
            <a href="{{ craft.social.loginUrl(provider.handle) }}">
                Login with {{ provider.name }}
            </a>
        </p>
    {% endfor %}