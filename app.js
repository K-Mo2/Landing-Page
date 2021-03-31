/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


 
       
           
    // section counter to count the number of section and add it to the id number
    sectionCounter = 4;

    // the class that holds the created section's body
class SectionsBody {


// the function that creates new secrions 
 createNewSection()
     {
        // the counter is increased by one each time the function is called
        sectionCounter += 1;
        
        // selecting the first (main) tag
        const btnClick = document.getElementsByTagName('main')[0];
       
        // inserting the newly created section before the end of the end of the (main) tag
        btnClick.insertAdjacentHTML('beforeend', `<section id="section${sectionCounter}"  data-nav="Section ${sectionCounter}" >
        <div class="landing__container">
           <h2>Section ${sectionCounter}</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
           
           <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
           </div>
           </section>` );
    
          
     
    }

}
       

// the class that holds the navbar data
class NavBar {

    // selecting the element that will have the navbar list 
    menuItems = document.getElementById('navbar__list');
       
        // a method that will bulid tha navbar list
        buildNavBar() {
            // clearing the navbar list to add the list of items
            this.menuItems.innerHTML = '';
            const section = document.querySelectorAll('section');
            //adding the list and the hyperlinks to each element and the data within the tag
            section.forEach(element =>
            {const listItem = `<li><a class="menu__link" href="#${element.id}" data-section-id="${element.id}"  >${element.dataset.nav}</a></li>` ;
                this.menuItems.insertAdjacentHTML("beforeend" , listItem);
            });

               // attaching the moveToSection method to the biuldNavBar method 
            this.moveToSection();
        }
         
        // creating a method that binds the navbar items and their location within the page by clicking on it 
        // and preventing the default action of jumping and replacing it with a smooth scroll to the clicked  element instead
        moveToSection() {
            this.menuItems.addEventListener('click', function (event) {
                event.preventDefault();
                document.getElementById(event.target.dataset.sectionId).scrollIntoView({ behavior: "smooth" , block:"center"});
                
            });
        }

    }

// making instances of the objects using the keyword (new) 
    const section = new SectionsBody();
const menu = new NavBar();

// a function that call back both methods of creating sections and building the navigation bar using constructor to access
function createNewSection()
{
    section.createNewSection();
    menu.buildNavBar();
}

// calling the function to create a new section in the page
createNewSection();




// selecting all the section  tage and storing them in a constant
const sections = document.querySelectorAll('section');

// a function that determines whether the element in the viewport or not by using viewport coordinates
onscroll = function scrollingFunction ()
{   // calling the function that removes the active class from all the section elements
    removeActiveClass();


// invoking add active class function
addActiveClass();

}

// a function that clears the active class from all the elements
function removeActiveClass ()
{
    document.querySelectorAll('section').forEach((elem) => {
        elem.classList.remove('your-active-class');

    });
}

// a function that adds the active class to the visible section 
const addActiveClass = function ()
{
    
    // a variable that stores the distance scrolled from the top of the page
    let scrollPos =  document.documentElement.scrollTop;
// looping through each section to activate it in case of its visibility within the viewport
sections.forEach((section) => {
    if ( scrollPos >= section.offsetTop -  section.offsetHeight * 0.2
        && scrollPos <= section.offsetTop + section.offsetHeight -  section.offsetHeight * 0.2)

    {
        for (let i = 0 ; i < 2; i ++)
        {
            section.classList.add("your-active-class");
        }

       
       
        

    }

});

}




   
