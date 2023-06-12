// this is the header component. It will render the header when used
function Header () {
    return ( 
    <>
    <div>
    <nav>
        <div class="container-top">
        <img class="logo" src="images/Logo.jpg" alt="my logo"></img>
         <ul class="nav-items">
            <li><a href="#home">Home</a></li>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#my-work">My Work</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
         </ul>
        </div>
    </nav>

    <section class="sub-heading">
        <div>
            <h2 class="sub-heading-text" id="name">Everitt Gill</h2>
        </div>
    </section>
    </div>
    </>
    )
}

export default Header