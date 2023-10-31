# Ignite Timer

## Insights

- Libs: immer, date-fns
- Reducer: use it when need to use complex calculations that will be used in other places
- Don't rely too much on external libs, so contexts should be made in such a way that they can work without using libs
- Local storage: it just save strings, booleans or numbers, so if you need to save a date, remember to modify it.