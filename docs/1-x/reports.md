# Reports Overview

Reports are the building blocks for Laracube analytics platform.
Each reports get added to the left navigation.

## Defining Reports

By default, Laracube reports are stored in the `app/Laracube/Reports` directory of your application.

All new reports should extend the [`Laracube\Laracube\Base\Report`](https://github.com/laracube/laracube/blob/master/src/Base/Report.php) abstract class.

For example, If you create a new report called NetRevenueReport, it will look something like this

```php
<?php

namespace App\Laracube\Reports;

use Laracube\Laracube\Base\Report;

class NetRevenueReport extends Report
{
    // ...
}
```

All new reports get registered automatically.
