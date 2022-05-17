## This is the testjob for Lumav. Started at 12:50 11/05/2022

###### Initial commit: Cleared react boiletplate

---

###### 13:59 11/05/2022

###### basic structure set up

- components folder
  - first main components
- installed react router dom for page navigation

---

###### 14:34 11/05/2022

###### styled components / global css / Header / Error.js

- installed styled components
  - created Global.js with CSS reset parameters
  - created Container.js containing general page parameters (CSS)
- setting up header CSS using classnames as requested in combination with styled components
- setting up Error.js for routing to error page in case of invalid URL attempt

---

###### 15:10 11/05/2022

###### navbar / linking routes

- created navbar
  - linked navbar buttons to corresponding routing destinations

---

###### 19:59 11/05/2022

###### form / context api / addProduct

- created form and styled it
- changed UseNavigate to Link from React router - looks simpler and cleaner code
- created context for sharing states between components residing various hierarchical levels
- created states for form inputs and addProduct function to save the input data to the products array

---

###### 11:12 12/05/2022

###### css styling / image / forms entry restriction

- added styling to card, heading, error page, etc
- added shopping cart icon from Ant Icons

---

###### 10:55 13/05/2022

###### improved css / reset filename in form

- shrunk card width
- created function for resetting the filename after submitting

---

###### 23:16 13/05/2022

###### added styling to card

- added transition effect for card background color and shadow

---

###### 16:53 15/05/2022

###### improved form entry restr. + added extra features

- styling form according to input
  - empty box => border red,
  - too long string => text appears,
  - wrong number format => text appears,
  - after picking file => shows file size
- added enter key as form submission

---

###### 22:39 15/05/2022

###### add to cart, delete product functinality and context fns, more styling

- Created the following functionalities
  - product adding to the cart
  - product deleteion from the Products page (from products array)
  - cart item count (cartItems.length)
- CSS

  - used Ant Icons for add to cart symbol and product deletion symbol

- further potential development:
  - check if an item already exists in the cart (matched by id)
  - cart page for removing items or changing quantities
  - product edit option

---

###### 20:18 16/05/2022

###### fixed product image displaying

- fixed product image displaying to fit without stretch
  - used object-fit: contain; for that

---

###### 07:18 17/05/2022

###### renamed variables and functions / fixed syntax usage and logic

- changed the names of variables and functions to make code look more readable and self-explanatory
  - longer names using camel-case type of naming
- fixed syntax usage and logic in Form.js
  - used ternary instead of if statement
  - fixed logic in the className attribute for displaying css classes correctly
