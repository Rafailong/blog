---
slug: dollar-sign-operator
title: haskell dollar-sign operator
authors: [ravila]
tags: [haskell]
---

The `($)` operator is a convenience for when you want to express
something with less pairs of parenths.

Type of `($)` is:

``` haskell
($) :: (a -> b) -> a -> b -- Defined in ‘GHC.Base’
infixr 0 $
```

Which means that:

1.  it is a infix operator
2.  it associates to the right
3.  and, it has the lowest possibile precedence

Usage example:

```haskell
_ =(2^) (2 + 2) -- 16
```

Above code we need all the parenths because we want to first evaluate
`(2 + 2)`. If we remove the parenths the result is different:

```haskell
_ = (2^) 2 + 2 -- 6
```

Here is where `($)` comes handy:

```haskell
_ = (2^) $ 2 + 2 -- 16
```

This happens because of how `($)` associates.
So, first `(2 + 2)` is evaluted and its results is used in `(2^)`.
