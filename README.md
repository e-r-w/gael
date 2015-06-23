# GAEL
Google Analytics Error Logging

Geddit?

## Usage

```js
require('gael')({
  action: 'some jerk made this error'
});
```

where the action will be the action logged to GA. Alternatively, without the options:

```js
require('gael')();
```

the event will simply be logged with the action 'Javascript error'
