# What's for dinner?

## Overview

[What’s for dinner?](https://stefcruz.github.io/ci_milestone2/) is a website that provides recipe ideas and nutritional information. It brings a vast number of recipe ideas based on a keyword entered on the search bar, and also has a section dedicated to inspire the user with preselected recipe ideas. Finally, it allows the user to search for the nutritional information of many different foods by entering the ingredient on the text box.

The recipes and the nutritional analysis are made available from the API [Edamam](https://www.edamam.com/).



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

[![img](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/wireframes/wireframes.png)](https://www.figma.com/file/WV2jyXZgXJcOXwP7wLGHQu/milestone_2?node-id=0%3A1)

## Features

### Existing Features

#### Navigation bar

The navbar contains links to the different sections of the site and collapses when the user accesses the webiste through mobile.

Nav desktop and tablet:

![Nav desktop and tablet](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/nav-desktop-tablet.png)

Nav mobile:

![Nav desktop and mobile](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/nav-mobile.png)

Also, the site also presents the favicon with the logo.

![Favicon](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/favicon.png)

#### Main section

The search box with checkbox allow the user to perform a search, which can be based off ingredient or name of the dish. If one or more checkboxes are ticked, the inner text of the ticked checkbox is passed as a parameter to the API URL and this will filter the search. 

![Main section](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/main-section.png)

The tooltip on the checkboxes works on desktop only. There is no equivalent for mobile as the page would be too wordy.

![Tooltip](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/main-section-hover.png)

The checkboxes are stacked on mobile to make it easier for the user to select the options.

![Search box on mobile](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/search-box-mobile.png)

##### Back to top arrow

The arrow comes up after scroll down and was implemented to bring the user back to top.

![Back to top arrow](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/arrow-up.png)

##### Recipe cards

The recipe cards contain an image, recipe title, number of ingredients so the user can judge the level of difficulty and preparation time of the recipe, health labels in case of any allergy and a link to the original recipe for full list of ingredients and instructions. The data comes from the API [Edamam](https://www.edamam.com/).

![Recipe cards](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/recipe-card.png)

##### Error handling

If the API call fails, the error message below is displayed.

![Error handling](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/main-section-error-handling.png)



#### Inspiration section

The idea of this section is to bring recipe ideas for the user based on preset filters. 

![Inspiration section](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/inspiration-section.png)

Due to the pandemic, the first suggestions are recipes to boost the immune system, followed by well-balanced recipes and vegetarian options. Again the data comes from the API [Edamam](https://www.edamam.com/) and the user can use the arrows right or left to see all the options.

![Recipe ideas Immunity](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/inspiration-section-recipe-cards.png)

##### Error handling

If the API call fails, the error message below is displayed.

![Error handling](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/inspiration-section-error-handling.png)



#### Nutritional information section

This section provides the user to search for the nutritional value of a recipe by entering the unit, measure and the ingredient on the text area. For example, 1 cup of rice, 10 oz of chickpeas.

![Nutritional information section](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/nutritional-info-section.png)

The API brings back the nutritional value per ingredient, so for the example above, the calorie and weight of the first ingredient 1 cup of rice and separately the calorie and weight for the 10 oz of chickpeas.

![Nutritional information per ingredient](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/nutritional-info-table-ingredient.png)

In addition, it also returns the nutritional value for the dish with the detailed number of calories and all the other nutrients present on the dish.

![Nutritional information per dish](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/nutritional-info-table-values.png)

Note the search result by ingredient and for the dish is hidden until API is called, i.e. until user performs a search.

##### Error handling

If the API call fails, the error message below is displayed.

![Error handling](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/nutritional-info-error-handling.png)



#### Contact page

The contact page has the same heading and style as the home page.

![Contact page header](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/contact-page.png)

And the contact form contains an opt in option for newsletter and the potential topics the user is interested in.

![Contact form](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/contact-form.png)

The contact form contain mandatory fields and provides the user feedback for when these fields are empty. The feedback is not only given in the field but underneath the submit button. Initially a modal was used to give the feedback, however it provided a bad UX on mobile as the user had to click on the X button for the popup to close.

![Negative feedback](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/contact-form-feedback-negative.png)

Likewise, the feedback is positive when the fields are filled in and the message underneath reinforces the positive message.

![Positive feedback](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/contact-form-feedback-positive.png)

The Bootstrap form validation was used in conjunction with the [Email JS](https://www.emailjs.com/) tool to create this feature.



#### Footer

The footer has links to the sections of the homepage and also social media.

Footer mobile:

![Footer mobile](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/footer-mobile.png)

Footer desktop and tablet:

![Footer desktop and tablet](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/footer-desktop.png)



##### 404 Page

The personalised 404 page was created in case the site does not load.

![Open Locally](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/features/404-page.png)



### Features Left to Implement

The possibilities are limitless when it comes to implement new features on a webapp. What I would like to have done is:

- Vegetarian/Vegan website  
The initial idea was to create a website with vegetarian/vegan recipes only. However, the API imposed a few limitations and this goal could not be attained. A simple test was done where the search term was "pork" and the filters vegetarian/vegan were applied, the result still came back where pork is classified as vegetarian. I could not establish whether this is an API error thus decided to change the focus.

- Swiper.js infinite loop  
Could not make the swiper infinite loop work when the data comes from the API. The swiper achieves the "infinite" effect by duplicating 3 or 4 slides on the HTML. When the data comes from the API, the swiper duplicates the slide however there is no data in it, which results in slides being shown empty in the carousel.  [Demo of what was planned to be implemented](https://swiperjs.com/demos/200-infinite-loop.html).

And the new features that would be nice to have are:

- Sorting and filtering options for the search results
- Button to "see more" recipes, not only the first 8 presented
- Registration/Profile page where the user can create a wish list and post recipes

## Technologies

This project was built using HTML, CSS and JavaScript. An extra effort has been made to use pure Vanilla JavaScript rather than jQuery, with the intention of learning the foundation of the language and becoming more familiar with JavaScript concepts.

In terms of styling, this website utilised the framework Bootstrap to support through the implementation of a mobile first approach and the preprocessor SASS. The SASS files were divided into partials according to the sections of the website.

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
  Wireframes

## Testing

### W3C HTML Validator

### W3C CSS Validator

### User Stories Testing

### Manual Testing

### Bugs and Fixes

- Navbar not collapsing after click when href is an anchor link, it only works when links to another page. Solved by adding `data-toggle="collapse" data-target=".navbar-collapse"` to the <a> tags. [Solution here](https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-4-navbar-on-click).

#### Bugs without fix

- Swiper.js infinite loop doesn't work when data comes from the API. This mode makes the swiper "infinite" by duplicating 3 or 4 slides and when the data comes from the API, the slider is duplicated but it is still empty.  [Demo of what I wanted to implement](https://swiperjs.com/demos/200-infinite-loop.html).



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

   ![Open Locally](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/deployment-open-locally.png)

3. First select whether you want to clone this repo using HTTPS, SSH or CLI, then click on the clipboard icon.

   ![Cloning Repo](https://github.com/stefcruz/ci_milestone2/blob/master/assets/readme/deployment-https-icon.png)

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