# Resources Overview

Resources are visualizations that can be attached to one or many report.

## Defining Resources

By default, Laracube resources are stored in the `app/Laracube/Resources` directory of your application.

All new resources should extend one of the base resource.

For example, If you create a table resource called `NetRevenueByProduct`, it will look something like this

```php
<?php

namespace App\Laracube\Resources;

use Laracube\Laracube\Base\ResourceTable;

class NetRevenue extends ResourceTable
{
    // ...
}
```

## Registering Resources

Once you have defined a resource, you can then add them to the
[`resources`](/docs/1-x/reports-configuration#report-resources) method of a report.
