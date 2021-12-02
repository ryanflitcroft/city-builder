# City Builder

## HTML setup

- x3 elements for dropdown, each with x3 options for user to select from, including x3 _label_ element for accessibility:

```html
<label for=""></label>
<select name="" id="">
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
</select>
```

- x9 elements to represent each possible option, will display on user event:

```html
<img src="" alt="" id="" />
```

or (*preferred*: CSS illustrated)

```html
<div id=""></div>
```

- x1 element for user text input:

```html
<input type="text" id="" />
```

- x1 element for user to submit text input:

```html
<button type="submit" id=""></button>
```

- x1 element to display textContent of user text input on button click:

- x3 elements to display textContent of number value, determined by number of events for each dropdown element:

```html
<section id=""></section>
```

_note_: will ```createElement('p')``` and ```section.append(p)```
in JSON.
