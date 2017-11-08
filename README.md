# Accessibility demo

This is a demo of an accessible custom select input built with React

### Caveats

Currently there's a [bug in Chromium](https://bugs.chromium.org/p/chromium/issues/detail?id=666049) that stops screenreaders reading out the selected child element of a parent with `role="listbox"`. To test properly with a screenreader use Safari for now.