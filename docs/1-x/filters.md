# Filters Overview

Filters can be attached to one or many report.

## Defining Filters

By default, Laracube filters are stored in the `app/Laracube/Filters` directory of your application.

All new filters should extends the `Laracube\Laracube\Base\Filter` class.

```php
<?php

namespace App\Laracube\Filters;

use Laracube\Laracube\Base\Filter;

class UserFiter extends Filter
{
    // ...
}
```

## Registering Filters

Once you have defined a filter, you can then add them to the
[`filters`](/docs/1-x/reports-configuration#report-filters) method of a report.
