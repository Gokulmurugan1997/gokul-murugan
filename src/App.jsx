import React from 'react'

function App() {

  return <div>
          <div  className='container'>
              <h1>I'm Gokul Murugan</h1>
              <div className='container-1'>
                  <a href="https://www.linkedin.com/in/gokul-murugan-4345b9169" target='_blank'><i className="fa-brands fa-linkedin fa-beat-fade" style={{color: "#f2eeed"}}></i></a>
                  {'  '}<a href="https://github.com/Gokulmurugan1997" target='_blank'><i className="fa-brands fa-github fa-beat-fade" style={{color: "#f8f8f7"}}></i></a>
              </div><br />
              <div className='resume'>
                  Resume{' '}<a href="https://drive.google.com/file/d/11nf039gFVGAFqY8fX0HofmDwvKRA13Da/view?usp=drivesdk" target='_blank'><i className="fa-solid fa-download fa-bounce" style={{color: "#f9fbfb"}}></i></a>
              </div>
          </div>
          <div className='container-2'>
              <h1 className='heading'>About me</h1>
              <p className='content'>Member Technical Staff at HCLTech with experience in helping companies create and maintain a better code base for reusability. Passionate about learning and development with a desire to apply skills on a larger development team at Organization.	Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level Developer position.</p>
              </div>
          <div className='container-3'>
              <h1 className='heading'> Work </h1>
              <p className='content'><h2>HCLTech – Member Technical Staff - June 2023 to Present</h2><br />
              Supporting in creation of Project Management Web application called PM SMART for tracking daily and monthly efforts of resource utilization for the project.<br/>
              Supporting in improvisation of Employee Self Service website for maximizing user efficiency
              </p>
          </div>
          <div className='container-4'>
              <h1>Skills</h1>
          <div>
          <p>HTML
              <div class="container-bar">
              <div class="skills html"></div>
            </div>
          </p>


          <p>CSS
            <div class="container-bar">
            <div class="skills css"></div>
            </div>
          </p>

          <p>JavaScript
            <div class="container-bar">
            <div class="skills js"></div>
            </div>
          </p>

          <p>ReactJs
            <div class="container-bar">
            <div class="skills react"></div>
            </div>
          </p>
      </div>
    <div>
          <p>NodeJs
            <div class="container-bar">
            <div class="skills node"></div>
            </div>
          </p>
          <p>ExpressJs
            <div class="container-bar">
            <div class="skills express"></div>
            </div>
          </p>
          <p>SQL
            <div class="container-bar">
            <div class="skills sql"></div>
            </div>
          </p>
          <p>MongoDB
            <div class="container-bar">
            <div class="skills db"></div>
            </div>
          </p>
        </div>
          </div>
          <div className='container-5'>
                <h1>Projects</h1>
                <div>
                <div className='projects'>
                      HTML Markdown viewer
                      <a href="https://main--regal-alfajores-20ad80.netlify.app/home" className='fa-beat' target='_blank'>view</a>
                </div>
                <br /><br /><br /><br /><br />
                <div className='projects'>
                  Shopping Cart
                  <a href="https://main--sweet-kitten-e41d22.netlify.app/" className='fa-beat' target='_blank'>view</a>
                </div>
                </div>
                <div>
                <div className='projects'>
                    Users Data App
                    <a href="https://main--sunny-jalebi-e8ffba.netlify.app/" className='fa-beat' target='_blank'>view</a>
                </div>
                <br /><br /><br /><br /><br />
                <div className='projects'>
                    Dashboard Page
                    <a href="https://courageous-cassata-f1bdef.netlify.app/dashboard" className='fa-beat' target='_blank'>view</a>
                </div>
                </div>
          
        </div>
  </div>
}

export default App