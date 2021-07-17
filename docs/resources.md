# Resources Overview

Resources are visualizations that can be attached to one or many report. 

## Defining Resources

By default, Laracube resources are stored in the `app/Laracube/Resources` directory of your application.

All new resources should extend one of the base resource.

For example, If you create a new big number resource called `NetRevenue`, it will look something like this

```php
<?php

namespace App\Laracube\Resources;

use Laracube\Laracube\Base\ResourceBigNumber;

class NetRevenue extends ResourceBigNumber
{
    // ...
}
```

## Registering Resources

Once you have defined a resource, you can then add them to the 
[`resources`](/docs/reports-configuration#report-resources) method of a report.
