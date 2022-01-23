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

## Accessing Laracube

Once the authorization is set, and the user is logged in, you can visit Laracube at `/laracube`.
It should load the starter User report.

The path can be updated from `\laracube` to a different path by adding a new env variable `LARACUBE_PATH`.

You can also run Laracube on a sub-domain by setting the env variable `LARACUBE_DOMAIN_NAME`.
If you are using Laracube on a sub-domain make sure that the auth session is setup correctly.

## Authorizing Reports, Resources, and Filters

Laracube allows fine-grained authorization support to determine the user\`s ability to view any report, resource, filters etc using the `canSee()` method.

For example, you can add `canSee()` method to a report called `NetRevenueReport`

```php
<?php

namespace App\Laracube\Reports;

use Laracube\Laracube\Base\Report;

class NetRevenueReport extends Report
{
   /**
    * Determine if the report or resource should be available for the given request.
    *
    * @return bool
    */
    public function canSee()
    {
        // authorization logic here
    }

    // ...
}
```
