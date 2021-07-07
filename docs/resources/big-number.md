# Big Number Resource

The Big Numbers Resource is for displaying a number, nice and big. It supports the following different types
- Number
- Number with Trend `In Development`
- Number with Sparkline `In Development`
- Number with Trend & Sparkline `In Development`

## Defining Resource

All new resource should extend the 
[`Laracube\Laracube\Base\ResourceBigNumber`](https://github.com/laracube/laracube/blob/master/src/Base/ResourceBigNumber.php) 
abstract class.

Every resource needs to have the `output` method that return an array.

```php
<?php

namespace App\Laracube\Resources;

use App\Models\User;
use Laracube\Laracube\Base\ResourceBigNumber;

class NumberOfActiveUsers extends ResourceBigNumber
{
    /**
     * Get the output for the resource.
     *
     * @return array
     */
    public function output()
    {
        //
    }
}
```

## Number

Simple big number resource should return an array with `number` key set. 

```php
    return [
        'number' => '',
    ];
```

## Number with Trend

> This resource is still under development. It's not yet included in the latest release.

## Number with Sparkline

> This resource is still under development. It's not yet included in the latest release.

## Number with Trend & Sparkline

> This resource is still under development. It's not yet included in the latest release.

[Roadmap](https://github.com/laracube/laracube/projects/1)
