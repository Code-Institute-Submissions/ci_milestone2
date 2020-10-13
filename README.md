# What's for dinner?

## Overview
[What’s for dinner?](https://stefcruz.github.io/ci_milestone2/) is a website that provides recipe ideas and nutritional information. It brings a vast number of recipe ideas based on a keyword entered on the search bar, and also has a section dedicated to inspire the user with preselected recipe ideas. Finally, it allows the user to search for the nutritional information of many different foods by entering the ingredient on the text box.

The recipes and the nutritional analysis are made available from the [Edamam](https://www.edamam.com/) API.

[TOC]



## UX

### User stories
As a website user...

- I want to be able to search for a recipe
- I want to be able to search for a recipe and filter by diet labels
- I want to be able to search for a recipe based on an ingredient
- I want to be able to search for a recipe based on an ingredient and filter by diet labels
- I want to see recipe ideas without having to search for it
- I want to be able to search for the nutritional information of a recipe with various ingredients
- I want to see the nutritional information per ingredient
- I want to see the nutritional information for the entire recipe
- I want to be able to contact the website

### Wireframes
The wireframes for this project can be seen [here](https://www.figma.com/file/WV2jyXZgXJcOXwP7wLGHQu/milestone_2?node-id=0%3A1).

[![img](https://github.com/stefcruz/ci_milestone2/blob/master/readme/wireframes/wireframes.png)](https://www.figma.com/file/WV2jyXZgXJcOXwP7wLGHQu/milestone_2?node-id=0%3A1)

## Features

### Existing Features

#### Navigation bar
The navbar contains links to the different sections of the site and collapses when the user accesses the webiste through mobile.

Nav desktop and tablet:

![Nav desktop and tablet](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/nav-desktop-tablet.png)

Nav mobile:

![Nav desktop and mobile](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/nav-mobile.png)

Also, the site also presents the favicon with the logo.

![Favicon](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/favicon.png)

#### Main section
The search box allow the user to perform a search, which can be based off an ingredient or name of the dish. If one or more checkboxes are ticked, the inner text of the ticked checkbox is passed as a parameter to the API URL and this will filter the search. 

![Main section](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/main-section.png)

The tooltip on the checkboxes works on desktop only. There is no equivalent for mobile as the page would be too wordy.

![Tooltip](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/main-section-hover.png)

The checkboxes are stacked on mobile to make it easier for the user to select the options.

![Search box on mobile](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/search-box-mobile.png)

##### Back to top arrow
The arrow comes up after scroll down and was implemented to bring the user back to top.

![Back to top arrow](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/arrow-up.png)

##### Recipe cards
The recipe cards contain an image, recipe title, number of ingredients so the user can judge the level of difficulty and preparation time of the recipe, health labels in case of any allergy and a link to the original recipe for full list of ingredients and instructions. The data comes from the API [Edamam](https://www.edamam.com/).

![Recipe cards](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/recipe-card.png)

##### Error handling main section
If the API call fails, the error message below is displayed.

![Error handling](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/main-section-error-handling.png)

#### Inspiration section
The idea of this section is to bring recipe ideas for the user based on preset filters. 

![Inspiration section](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/inspiration-section.png)

Due to the pandemic, the first suggestions are recipes to boost the immune system, followed by well-balanced recipes and vegetarian options. Again the data comes from the API [Edamam](https://www.edamam.com/) and the user can use the arrows right or left to see all the options.

![Recipe ideas Immunity](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/inspiration-section-recipe-cards.png)

##### Error handling inspiration section
If the API call fails, the error message below is displayed.

![Error handling](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/inspiration-section-error-handling.png)

#### Nutritional information section
This section provides the user to search for the nutritional value of a recipe by entering the unit, measure and the ingredient in the text area. For example: 1 cup of rice, 10 oz of chickpeas.

![Nutritional information section](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/nutritional-info-section.png)

The API brings back the nutritional value per ingredient. For the example above, the calorie and weight of the first ingredient 1 cup of rice and separately the calorie and weight for the 10 oz of chickpeas.

![Nutritional information per ingredient](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/nutritional-info-table-ingredient.png)

In addition, it also returns the nutritional value for the dish with the detailed number of calories and all the other nutrients present in the dish.

![Nutritional information per dish](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/nutritional-info-table-values.png)

Note the search result by ingredient and for the dish is hidden until API is called, i.e. until user performs a search.

##### Error handling nutritional value
If the API call fails, the error message below is displayed.

![Error handling](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/nutritional-info-error-handling.png)

#### Contact page
The contact page has the same heading and style as the home page.

![Contact page header](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/contact-page.png)

The contact form contains an opt in option for newsletter and the potential topics the user is interested in.

![Contact form](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/contact-form.png)

It also has mandatory fields and provides the user feedback for when these fields are empty. The feedback is not only given in the field but underneath the submit button.

![Negative feedback](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/contact-form-feedback-negative.png)

Likewise, the feedback is positive when the fields are filled in and the message underneath reinforces the positive message.

![Positive feedback](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/contact-form-feedback-positive.png)

The Bootstrap form validation was used in conjunction with the [Email JS](https://www.emailjs.com/) tool to create this feature.

#### Footer
The footer has links to the sections of the homepage and also social media.

Footer mobile:

![Footer mobile](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/footer-mobile.png)

Footer desktop and tablet:

![Footer desktop and tablet](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/footer-desktop.png)

##### 404 Page
The personalised 404 page was created in case the site does not load.

![Open Locally](https://github.com/stefcruz/ci_milestone2/blob/master/readme/features/404-page.png)

### Features Left to Implement

The possibilities are limitless when it comes to implement new features on a webapp. What I would like to have done is:

- Vegetarian/Vegan website  
The initial idea was to create a website with vegetarian/vegan recipes only. However, the API imposed a few limitations and this goal could not be attained. A simple test was done where the search term was "pork" and the filters vegetarian/vegan were applied, the result still came back where pork is classified as vegetarian. I could not establish whether this is an API error thus decided to change the focus.

- Swiper.js infinite loop  
Could not make the swiper infinite loop work when the data comes from the API. The swiper achieves the "infinite" effect by duplicating 3 or 4 slides on the HTML. When the data comes from the API, the swiper duplicates the slide however there is no data in it, which results in slides being shown empty in the carousel.  [Demo of what was planned to be implemented](https://swiperjs.com/demos/200-infinite-loop.html).

The features that would be nice to have are:
- Sorting and filtering options for the search results
- Button to "see more" recipes, not only the first 8 presented
- Registration/Profile page where the user can create a wish list and post recipes

## Technologies
This project was built using HTML, CSS and JavaScript. An extra effort has been made to use pure Vanilla JavaScript rather than jQuery, with the intention of learning the foundation of the language and becoming more familiar with JavaScript concepts.

In terms of styling, this website utilised the framework Bootstrap to support through the implementation of a mobile first approach and the preprocessor SASS. Due to the size of the project, the SASS files were divided into partials according to the sections of the website which makes the directory tidier and easier to locate a specific file. 

![SASS partials](https://github.com/stefcruz/ci_milestone2/blob/master/readme/sass-partials.png)

Another point to notice is that SASS enables nesting media queries within the block of CSS beside the properties being changed, which again helps the organisation and maintenance of the style sheets. Idea taken from [this blog post](https://css-tricks.com/conditional-media-query-mixins/).

![SASS partials](https://github.com/stefcruz/ci_milestone2/blob/master/readme/media-query-mixin.png)


### Programming Languages

- HTML5  
Markup language used across the website.

- CSS3  
Page style.

- Bootstrap v4.5  
This project used Bootstrap elements such as navbar, grid & cards.

- SASS  
Preprocessor used to make CSS more fun and powerful.

- JavaScript  
Front end functionalities & API calls.

### Other Tools

- GitHub  
  Used to store this project's source code.

- VS Code  
  Main IDE.

- Balsamiq  
  Used to create wireframes for the website.

- [Swiper.JS](https://swiperjs.com/)  
  Swiper for recipe cards on inspiration section.

- [Email JS](https://www.emailjs.com/)
  Tool used to send emails from JS.

- [Typora](https://typora.io/)  
  Markdown editor.

- Figma  
  Creation of wireframes.

## Testing

### W3C HTML Validator

The pages index.html and contact.html passed through the validator and presented a few errors/warnings that were fixed.

![HTML Validator](https://github.com/stefcruz/ci_milestone2/blob/master/readme/w3c-html-validator.png)



### W3C CSS Validator

The CSS also returned no errors.

![CSS Validator](https://github.com/stefcruz/ci_milestone2/blob/master/readme/w3c-css-validator.png)



### Google Lighthouse

- As per Google Lighthouse suggestion, I added `rel="noopener"` on the external links. Explanation of what it does [here](https://dev.to/gulshansaini/what-is-rel-noopener-1214).



### User Stories Testing

This section has the aim to provide the manual testing of user stories and the description of how the users will achieve their goal. 

As a website user...

- I want to be able to search for a recipe  
  - Goal achieved: User goes to homepage and enter a recipe, e.g. lasagna.

Desktop:
![User story search](https://github.com/stefcruz/ci_milestone2/blob/master/readme/testing/user-stories/user-story-one-desktop.png)

Mobile:
![User story search](https://github.com/stefcruz/ci_milestone2/blob/master/readme/testing/user-stories/user-story-one-mobile.jpg)

- I want to be able to search for a recipe and filter by diet labels  
  - Goal achieved: User goes to homepage and enter a recipe, e.g. lasagna, and also has 4 diet labels to filter by: balanced, low fat, low carb, high protein.

Desktop:
![User story search and filter](https://github.com/stefcruz/ci_milestone2/blob/master/readme/testing/user-stories/user-story-two-desktop.png)

Mobile:
![User story search and filter](https://github.com/stefcruz/ci_milestone2/blob/master/readme/testing/user-stories/user-story-two-mobile.jpg)


- I want to be able to search for a recipe based on an ingredient  
  - Goal achieved: User goes to homepage and enter an ingredient. The search results will be recipes that contain the given ingredient.

Desktop:
![User story ingredient](https://github.com/stefcruz/ci_milestone2/blob/master/readme/testing/user-stories/user-story-three-desktop.png)

Mobile:
![User story ingredient](https://github.com/stefcruz/ci_milestone2/blob/master/readme/testing/user-stories/user-story-three-mobile.jpg)

- I want to be able to search for a recipe based on an ingredient and filter by diet labels
  - Goal achieved: User goes to homepage and enter an ingredient e.g. pork, and also has 4 diet labels to filter by: balanced, low fat, low carb, high protein.

Desktop:
![User story ingredient and filter](https://github.com/stefcruz/ci_milestone2/blob/master/readme/testing/user-stories/user-story-four-desktop.png)

Mobile:
![User story ingredient and filter](https://github.com/stefcruz/ci_milestone2/blob/master/readme/testing/user-stories/user-story-four-mobile.jpg)

- I want to see recipe ideas without having to search for it
  - Goal achieved: User goes to inspiration section and can see recipe ideas without having to search for it.

Desktop:
![User story inspiration section](https://github.com/stefcruz/ci_milestone2/blob/master/readme/testing/user-stories/user-story-five-desktop.png)

Mobile:
![User story inspiration section](https://github.com/stefcruz/ci_milestone2/blob/master/readme/testing/user-stories/user-story-five-mobile.png)

- I want to be able to search for the nutritional information of a recipe with various ingredients
  
- Goal achieved: User goes to nutritional information section and can enter a list of ingredients.
  

Desktop:
![User story nutritional info section](https://github.com/stefcruz/ci_milestone2/blob/master/readme/testing/user-stories/user-story-six-desktop.png)

Mobile:
![User story nutritional info section](https://github.com/stefcruz/ci_milestone2/blob/master/readme/testing/user-stories/user-story-six-mobile.png)

- I want to see the nutritional information per ingredient
  
- Goal achieved: User goes to nutritional information section, can enter a list of ingredients and is presented with 2 tables, one with nutritional value for each ingredient and another with nutritional values for all the ingredients typed.
  

Desktop:
![User story nutritional info section result per ingredient](https://github.com/stefcruz/ci_milestone2/blob/master/readme/testing/user-stories/user-story-seven-desktop.png)

Mobile:
![User story nutritional info section result per ingredient](https://github.com/stefcruz/ci_milestone2/blob/master/readme/testing/user-stories/user-story-seven-mobile.png)

- I want to see the nutritional information for the entire recipe
  
- Goal achieved: User goes to nutritional information section, can enter a list of ingredients and is presented with 2 tables, one with nutritional value for each ingredient and another with nutritional values for all the ingredients typed.
  

Desktop:
![User story nutritional info section result for recipe](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/testing/user-stories/user-story-eight-desktop.png)

Mobile:
![User story nutritional info section result for recipe](https://github.com/stefcruz/ci_milestone2/blob/master/readme/testing/user-stories/user-story-eight-mobile.png)

- I want to be able to contact the website
  
- Goal achieved: User navigates to contact page through the navbar or footer, and can send an email to the site.
  

Desktop:
![User story contact page](https://github.com/stefcruz/ci_milestone2/blob/master/readme/testing/user-stories/user-story-nine-desktop.png)

Mobile:
![User story contact page](https://github.com/stefcruz/ci_milestone2/blob/master/readme/testing/user-stories/user-story-nine-mobile.png)

### Manual Testing

The manual test was conducted following the test plan below across different browsers and devices.

#### Testing plan

Nav:

- [x] Make sure links are not broken and are linking to correct page.
- [x] Scroll down and see the arrow up coming up on the right hand side of the screen.
- [x] Click on arrow up to bring to top.

Main section:

- [x] Search for an ingredient and dish pressing enter.
- [x] Search for an ingredient and dish pressing the search button.
- [x] Perform search ticking one, two, three and four checkboxes.
- [x] Click on clear icon to clear contents of search bar.
- [x] Click on link "See Recipe" on recipe card.

Inspiration section:

- [x] Use arrows to navigate through the recipe cards.
- [x] Click on link "See Recipe" on recipe card.

Nutritional value:

- [x] Enter ingredient list with expected values and perform search pressing enter. It was working as expected however had to remove this feature. Explanation in the Bugs & Fixes section.
- [x] Enter ingredient list with expected values and perform search pressing search button.
- [x] Enter ingredient list missing one of the required search term (either missing the unit or measure). Expect to see the error message mentioned above in the [Existing Features](#error-handling-nutritional-value) section.

Footer:

- [x] Click on nav links in the footer.
- [x] Click on social media links.

Contact Form:

- [x] Try to submit the empty form. Expect to see the error message underneath each required field.
- [x] Try to submit the form with an invalid email address. Expect to see an error message.
- [x] Try to submit the form with all inputs valid. Expect to see success message.



#### Browser and Device Testing

The website was tested on the browsers and devices as follows. The website was not tested on a tablet as I do not have access to one.

| Device | Browser           | OS                   | Compatibility |
| ------ | ----------------- | -------------------- | ------------- |
| PC     | Chrome            | Windows              |               |
| PC     | Firefox           | Windows              |               |
| PC     | Microsoft Edge    | Windows              |               |
| PC     | Internet Explorer | Windows              |               |
| PC     | Chrome            | Linux                |               |
| PC     | Firefox           | Linux                |               |
| PC     | Opera             | Linux                |               |
| PC     | Chrome            | Mac                  |               |
| PC     | Firefox           | Mac                  |               |
| PC     | Safari            | Mac                  |               |
| Mobile | Chrome            | Huawei               |               |
| Mobile | Chrome            | Samsung S8 Android 9 | Excellent     |
| Mobile | Safari            | iPhone X             |               |



#### Bugs and Fixes

A few bugs were encountered during the testing, which were addressed accordingly.

##### Nav

- Navbar not collapsing after click when href is an anchor link, it only works when links to another page. Solved by adding `data-toggle="collapse" data-target=".navbar-collapse"` to the <a> tags. [Solution here](https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-4-navbar-on-click).

##### Main section

- Icon of ticked checkbox looked to thin for Android. Solution: return to the default icon.

![Checkbox mobile](https://github.com/stefcruz/ci_milestone2/blob/master/readme/testing/mobile-ticked-checkbox.jpg)

- Clicking area of the clear icon on search bar too narrow. Solution: increased it following [this tutorial](https://ishadeed.com/article/clickable-area/).
- Font too small in recipe cards. Solution: Increased font size to 1rem (16px).
- The API will throw an error if there are no results for the combination of the dish or ingredient + diet label. For example, search for lasagna with diet label low-fat. Understandably enough, there is no low-fat lasagna due to the nature of the dish. Solution: another if statement considering this scenario however it was not implemented this time due to time constraints.

##### Nutritional value

- Removed event listener to perform search pressing enter. This was required as the text area requires pressing enter to skip line to enter the ingredients, not to call the API.

##### Contact page

- Checkboxes and radio buttons were too close to one another on mobile. Solution was to add margin bottom to all input boxes.




## Deployment

This project's repository is hosted on GitHub and was coded using the Visual Studio Code IDE. The following extensions were enabled to facilitate the work:

- Live Sass Compiler
- SCSS Formatter
- GitHub Pull Requests and Issues
- Bootstrap 4 CDN Snippet

A clone of this repository was made locally, and the changes were deployed directly in the master branch. The commands used to push the changes were `git add .`, `git commit -m "message"` and `git push`. All the commits can be clearly identified by a concise and meaningful message. 

### How to publish on GitHub Pages

The following steps were followed to publish this project.

1. Go to the main page of [this GitHub repository](https://stefcruz.github.io/ci_milestone2/)
2. Click on 'Settings' tab on the horizontal navigation
3. Scroll down to the section 'GitHub Pages'
4. Under the "Source" heading, select 'Branch: master' and the 'root' directory, hit 'Save'
5. Site was published

### How to fork this repository

If you would like to experiment with this project without changing it, follow the steps below.

1. After logging into your GitHub account, open up [this GitHub repository](https://stefcruz.github.io/ci_milestone2/)
2. Click on the 'Fork' button at the top right-hand corner of the page
3. Start coding!

### How to open this project locally

There are two options to clone this project to your local machine, using the command line and using GitHub desktop. Both are detailed [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

#### Using the command line

1. Go to the main page of [this GitHub repository](https://github.com/stefcruz/ci_milestone2).

2. Click on 'Code'.

   ![Open Locally](https://github.com/stefcruz/ci_milestone2/blob/master/readme/deployment-open-locally.png)

3. First select whether you want to clone this repo using HTTPS, SSH or CLI, then click on the clipboard icon.

   ![Cloning Repo](https://github.com/stefcruz/ci_milestone2/blob/master/readme/deployment-https-icon.png)

4. Open Terminal on your computer or the terminal from your IDE.

5. Change the current working directory to the location where you want the directory to be cloned.

6. Type `git clone`, and then paste the URL you copied earlier.

   ```shell
   $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
   ```

7. Press Enter to create your local clone.

#### Using GitHub Desktop

1. Go to the main page of [this GitHub repository](https://github.com/stefcruz/ci_milestone2).
2. Click on 'Code'.
3. Click 'Open with GitHub Desktop'.
4. Click  'Choose...' and select the location where you want to save this repo on your machine.
5. Open the project on your favourite IDE.

More information can be found [here](https://docs.github.com/en/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop/cloning-a-repository-from-github-to-github-desktop).

## Credits

### Content

- [Edamam API](https://www.edamam.com)
- [Physicians Committee](https://www.pcrm.org/news/blog/foods-boost-immune-system)

### Media

- [Unsplash](https://unsplash.com/)
- [Icons 8](http://icons8.com/)

## Acknowledgements

### Design

- [Swiper design idea](https://themes.getbootstrap.com/preview/?theme_id=55961)
- [Checkbox style](https://css-tricks.com/the-checkbox-hack/)
- [Idea for image at the top corners of the page](https://www.yummly.co.uk/)
- [Check icon svg on nutritional value section](https://themes.getbootstrap.com/preview/?theme_id=55961)

### Code

- [CSS: Overwrite autofull bg-colour on search bar](https://selleo.com/til/posts/xhgzlfgcql-a-way-to-make-autofilled-inputs-background-transparent)
- [CSS & JS: Scroll to top idea (code adapted, removed jQuery)](https://www.tavi.pt/)
- [JS: Get value from ticked checkbox (code adapted)](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_checkbox_order)
- [JS: Function to use Nutritional information API data (code adapted, removed jQuery)](https://developer.edamam.com/edamam-nutrition-api-demo)
- [JS: Smooth scroll](https://www.codegrepper.com/code-examples/javascript/scrolling+link+java+script)
- [JS: Scroll to top](https://www.youtube.com/watch?v=Pd71ZZeIhaI)
- [JS: Clear icon in search bar](https://www.mikedane.com/web-development/css/styling-search-bar/)
- [SASS: Media query mixins approach](https://css-tricks.com/conditional-media-query-mixins/)