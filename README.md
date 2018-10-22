# Custom-elements
A library of css classes, supported by some javascript, that can be easily added to html elements.

## Get started
Add the library to your website by adding following code to your website's head.
```css
<script src="https://lennertderyck.github.io/custom-elements/elements.js"></script>
```
## Use
Now you added the javascript-file to your site you can start using it. The script also adds the css-file.

### Tags - First Part
A css-class has diffrent parts in it's name.
The first part of the css class decides wich characteristic we change of an html-element.

**no-select** It disables the selection of that html-element.

**no-save** It disables the saving of images or similar files by disabling of the 'Save as' in the context menu when right clicked on an image or other file. It also disables the selection of the html-element.

**no-display** It removes the element. The element won't take any space when removed.

**hidden** It hides the element but still takes space.

**no-margin** Removes any margin of an element.
You can add an second part-tag.

**no-padding** Removes any padding of an element.<br>
You can add an second part-tag.

**no-outline** Removes the outline of an element.

**no-border** Removes the border of an element.<br>
You can add an second part-tag.

**uppc** Set any text whitin an html-element in capital.

**lowc** Set any text whitin an html-element in lowercase.

### Tags - Second Part
When the css class can be used to define different parts of an html-element (like a top border or left margin) the following tags are used to define wich part we want to call of that element.

**[first part]-x**
Calls the left and right part of an element.

**[first part]-y**
Calls the top and bottom part of an element.

**[first part]-t**
Calls the top part of an element.

**[first part]-b**
Calls the bottom part of an element.

**[first part]-l**
Calls the left part of an element.

**[first part]-r**
Calls the right part of an element.

### Javascript enabled functions
Add the following code to enable collapse function
```html
class="collapse-area" onclick="collapse(this)"
```
This will change the class "collapse-area" to "collapse-area-active", so now you can use selectors to control the behavior.

## Add to a html-element
You can add a class by adding the 'class' attribute to a html-element.
```html
<p class="no-margin">hello world!</p>
```


Add extra classes by sesparating them with a space.
```html
<p class="no-margin uppc">hello world!</p>
```

## CSS options
You can tweak some css-settings by downloading the <a href="https://lennertderyck.github.io/custom-elements/custom-elements/custom-elements.zip" download>custom-elements.zip</a> file and adding the unzipt file it to the root of your site.
The options.css-file that you'll find in the folder works with css variables where you change the last part of the rule.

## Bugs
Found a bug? Let me know and I will try to solve it as quick as possible.

Mail: <a href="mailto:hello@lennertderyck.be?subject=Custom elements - Bug">hello@lennertderyck.be</a><br>
Website: <a href="https://lennertderyck.be/contact" rel="noopener" target="_blank">lennertderyck.be/contact</a>
