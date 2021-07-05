# Authorizing Laracube

Within your `app/Providers/LaracubeServiceProvider.php` file, there is a `gate` method. 
This authorization gate controls access to Laracube.

**By default, no user can access the platform in any environment.**


```php
    /**
     * Register the laracube gate.
     *
     * This gate determines who can access laracube.
     *
     * @return void
     */
    protected function gate()
    {
        Gate::define('viewLaracube', function ($user) {
            return in_array($user->email, [
                'demo@laracube.io',
            ]);
        });
    }
```

## Default Page

