/*****************typing*********************** */

var typed = new Typed('#mainTitle', {
    strings: ['Larry Daniels', 'Developer','Designer'],
    typeSpeed: 30,
    loop: true,
    loopCount: Infinity,
    backSpeed: 50,

  });

  /******* change style navbar**************** */

  const navbar =document.getElementById('navbar-example');
  window.addEventListener('scroll',()=>{
    if(window.scrollY>300){
      navbar.classList.add('scrolled');
    }
    else{
      navbar.classList.remove('scrolled');
    }
  })
  /*************************************** */
  var searchSuggestions = ['GeeksforGeeks', 'Geeks',  
    'Geeksforfun', 'WelcomeGeeks']; 

// Initialize the Typeahead plugin on the search input field 
$('#name').typeahead({ 
source: searchSuggestions 
}); 
 
