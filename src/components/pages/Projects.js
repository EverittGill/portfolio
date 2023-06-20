function Projects() {
    return (
        <>
        <div className="wrapper">
          <Card
            img="https://github.com/EverittGill/Everitt-Gill-Webiste/blob/main/images/The-vault-screenshot.png?raw=true"
            title="The Vault"
            description="Take your boring salads up a knotch. This recipe is perfect for lunch
              and only contains 5 ingredients!"
            link="https://github.com/settings/profile"
          />
    
          <Card
            img="https://github.com/EverittGill/Everitt-Gill-Webiste/blob/main/images/first-page-screenshot.png?raw=true"
            title="Soccer Betting Game"
            description="Fear Risotto no more! This simple recipe is perfect for family dinners."
            link="https://github.com/settings/profile"
          />
    
          <Card
            img="https://github.com/EverittGill/Everitt-Gill-React-Portfolio/blob/main/src/assets/images/E-commerce-pic.jpeg?raw=true"
            title="Project 3 coming soon"
            description="Baked Cod with Vegetables. 30 minute meal!"
            link="https://github.com/settings/profile"
          />

        </div>
        <br></br>
        <div className="wrapper-2">
          <Card
            img="https://github.com/EverittGill/Everitt-Gill-Webiste/blob/main/images/The-vault-screenshot.png?raw=true"
            title="Weather Dashboard"
            description="Take your boring salads up a knotch. This recipe is perfect for lunch
              and only contains 5 ingredients!"
              link="https://github.com/settings/profile"
          />
    
          <Card
            img="https://github.com/EverittGill/Everitt-Gill-Webiste/blob/main/images/first-page-screenshot.png?raw=true"
            title="Text Editor"
            description="Fear Risotto no more! This simple recipe is perfect for family dinners."
            link="https://github.com/settings/profile"
          />
    
          <Card
            img="https://github.com/EverittGill/Everitt-Gill-React-Portfolio/blob/main/src/assets/images/E-commerce-pic.jpeg?raw=true"
            title=""
            description="Baked Cod with Vegetables. 30 minute meal!"
            link="https://github.com/settings/profile"
          />

        </div>
        </>
      );
    }
    
    function Card(props) {
      return (
        <>
        <div className="card">
            {/* add an anchor anchor tag that turns this card into a link */}
          <div className="card__body">
            <img src={props.img} class="card__image" />
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">{props.description}</p>
          </div>
          <div className="card__link">
          <a href={props.link} target=""> 
          <button className="card__btn">
            View Project
            </button>
            </a>
            </div>
        </div>
        </>
      );
    }



export default Projects;










































// function Mywork() {
//     return (
//         <>
//         <section class="site-section" id="my-work">
//         <h2 class="h2-header">My Work</h2>
//          <div>
//              <div class="projects">
//                  <a href="https://everittgill.github.io/Horiseon-Home-Page/">
//                     <img src="images/Horiseon-screenshot.png" id="projects-image" alt="project-1"></img></a>
//                  <div class="mini-card-first">
//                      <p>Horiseon Digital Marketing</p>
//                  </div>
//                 </div>
//          <div class="project-case">
//              <div>
                
//                  <a href="https://everittgill.github.io/Soccer-Betting-Mini-Game/">
//                  <img src="images/first-page-screenshot.png" id="projects-image" alt="project-2"></img></a>
//                  <div class="mini-card">
//                      <p>Soccer Betting Game</p>
//                  </div>
//              </div>
//              <div>
                
//                     <a href="https://everittgill.github.io/Interactive-Budapest-Map/">
//                  <img src="images/BudapestMap.jpg" id="projects-image" alt="project-3"></img></a>
//                  <div class="mini-card">
//                      <p>Interactive Budapest Map</p>
//                  </div>
//              </div>
//              <div>
                
//                  <a href="https://thegoldenvault.herokuapp.com">
//                  <img src="images/The-vault-screenshot.png" id="projects-image" alt="project-4"></img></a>
//                  <div class="mini-card">
//                      <p>The Vault</p>
//                      <p>Password Saver</p>
//                  </div>
//              </div>
//              <div>
                
//                     <a href="https://twitter-clone-eg.herokuapp.com/">
//                  <img src="images/CADClone.jpg" id="projects-image" alt="project-5"></img></a>
//                  <div class="mini-card">
//                      <p>Twitter clone</p>
//                  </div>
//              </div>
//              <div>
                
//                     <a href="https://twitter-clone-eg.herokuapp.com/">
//                 <img src="images/CADClone.jpg" id="projects-image" alt="Project-6"></img></a>
//                 <div class="mini-card">
//                     <p>code generator</p>
//                 </div>
//          </div>
//          </div>
             
//             </div>
//      </section>
//             </>
    
//     )
// }

// export default Mywork;



