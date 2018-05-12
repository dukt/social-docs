# Manage Login Accounts

To let users manage their login accounts, list all login providers and let them connect or disconnect their account:

```twig
<h2>Login Accounts</h2>

{% for provider in craft.social.getLoginProviders() %}

    {% set account = craft.social.getLoginAccountByLoginProvider(provider.handle) %}

    <h4>{{ provider.name }}</h4>

    <p>
        {% if account %}
            You can login using {{ provider.name }}.
        {% else %}
            {{ provider.name }} login is disabled for your account.
        {% endif %}
    </p>

    <p>
        {% if account %}
            <a href="{{ craft.social.getLoginAccountDisconnectUrl(loginProvider.handle) }}">Disable Social Login with {{ loginProvider.name }}</a>
        {% else %}
            <a href="{{ craft.social.getLoginAccountConnectUrl(loginProvider.handle) }}">Enable Social Login with {{ loginProvider.name }}</a>
        {% endif %}
    </p>

{% endfor %}
```