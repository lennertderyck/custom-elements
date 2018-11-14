# Custom-elements
A library of css classes, supported by some javascript, that can be easily added to html elements.

<div style="backround-color: #D7ECC6; border: 2px solid #8DB96C;">
  <h2>What's new</h2>
  <strong>Toggle-function</strong><br>
  <strong>img-fit</strong>
</div>

## Get started
Add the library to your website by adding following code to your website's head.
```css
<script src="https://ce.lennertderyck.be/elements.js"></script>
```

All the necessary code for linking the css- and javascript-library, including the options.css-file is added by the script.

## Use
Now you added the javascript-file to your site you can start using it.

### Tags - First Part
Most css-classes have diffrent parts in it's name.
The first part defines the characteristics that need to change of a html-element.

**no-select** Disables the selection of a html-element.

**no-save** Disables the saving of images or similar files by disabling the 'Save as'-option in the context menu when right clicked on an image or other file. It also disables the selection of the html-element.

**no-display** Removes the element. The element won't take any space when removed.

**hidden** Hides the element but still takes space.

**no-margin** Removes any margin of an element.<br>
You can add an second part-tag.

**no-padding** Removes any padding of an element.<br>
You can add an second part-tag.

**no-outline** Removes the outline of an element.

**no-border** Removes the border of an element.<br>
You can add an second part-tag.

**uppc** Set any text whitin an html-element in capital.

**lowc** Set any text whitin an html-element in lowercase.

**img-fit** This class can be added to the img-element. With this class you can set any ratio for an image without stretching the image, the image wil be contained within its frame and behave a bit like a background-iamge. So you won't have to use a div with a background-image, a container or manually crop the image in a photo-editor.

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
**Collapse**<br>
Add the following code to enable the collapse function
```html
class="collapse-area" onclick="collapse(this)"
```
This will change the class "collapse-area" to "collapse-area-active", so now you can use selectors to control the behavior.
<br>Attention! The "collapse"-function will remove any other class from an element and replace it with the "collapse-area-active"-class.

**Toggle**<br>
Add the following code to enable the toggle function
```html
onclick="toggle(this)"
```
This will add or remove the "toggle-active"-class to/from an element. You can also add the class in advance.
After that you can control the behavior of that element with the help of some css and css-selectors.

```css
.an-element:not(.toggle-active) {
  height: 0%
}

.an-element.toggle-active {
  height: 100%
}
```

### Other tags
**disabled** Disables interaction with an element by adding various css-classes. This element will be faded and won't be clickable.

## Add to a html-element
You can add a class by adding the 'class' attribute to a html-element.
```html
<p class="no-margin">hello world!</p>
```


Add extra classes by separating them with a space.
```html
<p class="no-margin uppc">hello world!</p>
```


## CSS options
You can tweak some css-settings by downloading the <a href="https://lennertderyck.github.io/custom-elements/custom-elements/custom-elements.zip" download>custom-elements.zip</a> file and adding the unzipt folder to the root of your site.
The options.css-file that you'll find in the folder works with css variables where you change the last part of the rule.

You don't need to link the options.css-file in in your websites head, that's already done by the script.

## Bugs
Found a bug? Let me know and I will try to solve it as quick as possible.

Mail: <a href="mailto:hello@lennertderyck.be?subject=Custom elements - Bug">hello@lennertderyck.be</a><br>
Website: <a href="https://lennertderyck.be/contact" rel="noopener" target="_blank">lennertderyck.be/contact</a>
