# Select Filter

The most common type of filter is the "select" filter, which allows the user to select a filter option from a drop-down selection menu. 

Select filter can be 
- Single Select
- Multiple Select

## Single Select Filter

Every Select filter needs to have the `options` method that return a value and text.
It also needs a type property `$type` which needs to be set as `single-select`.

```php
<?php

namespace App\Laracube\Filters;

use App\Models\User;
use Laracube\Laracube\Base\Filter;

class UserFilter extends Filter
{
    /**
     * The single value that will be displayed as heading.
     *
     * @var string
     */
    public $heading = 'Select User';

    /**
     * The single value that will be used as request key.
     *
     * @var string
     */
    public $key = 'user_id';

    /**
     * The type of the filter.
     *
     * @var string
     */
    public static $type = 'single-select';

    /**
     * Get the options for the filter.
     *
     * @return mixed
     */
    public function options()
    {
        return User::orderBy('name')
            ->selectRaw('id AS value, name AS text')
            ->get();
    }
}
```

## Multiple Select Filter

Every Select filter needs to have the `options` method that return a value and text.
It also needs a type property `$type` which needs to be set as `multiple-select`.

```php
<?php

namespace App\Laracube\Filters;

use App\Models\User;
use Laracube\Laracube\Base\Filter;

class UsersFilter extends Filter
{
    /**
     * The single value that will be displayed as heading.
     *
     * @var string
     */
    public $heading = 'Select Users';

    /**
     * The single value that will be used as request key.
     *
     * @var string
     */
    public $key = 'user_ids';

    /**
     * The type of the filter.
     *
     * @var string
     */
    public static $type = 'multiple-select';

    /**
     * Get the options for the filter.
     *
     * @return mixed
     */
    public function options()
    {
        return User::orderBy('name')
            ->selectRaw('id AS value, name AS text')
            ->get();
    }
}
```
