import React from 'react'

export default function Skills() {
  return (
    <>
      <div class="container" id="skills" style={{ transition: "all 0.7s ease" }}>
        <h2>Skills</h2>
        <div class="skills">
          <h3 class="web-title">Web Development</h3>
          <div class="web">
            <div class="img"><img src="https://github.com/zvbrsten/zvbrsten/blob/main/htmllogo.jpg?raw=true"/><span class="description">HTML - I am proficient in HTML and have experience in building semantic and accessible web pages.</span></div>
            <div class="img"><img src="https://github.com/zvbrsten/zvbrsten/blob/main/csslogo.jpg?raw=true"/><span class="description">CSS - I have strong skills in CSS and can style web pages to achieve desired layouts and designs.</span></div>
            <div class="img"><img src="https://github.com/zvbrsten/zvbrsten/blob/main/jslogo.jpg?raw=true"/><span class="description">JavaScript - I am skilled in JavaScript and can create interactive and dynamic web applications.</span></div>
            <div class="img"><img src="https://github.com/zvbrsten/zvbrsten/blob/main/reactlogo.png?raw=true"/><span class="description">React.js - I have experience building modern and efficient web applications using React.js.</span></div>
            <div class="img"><img src="https://github.com/zvbrsten/zvbrsten/blob/main/expresslogo.png?raw=true"/><span class="description">Express.js - I am skilled in building server-side applications using Express.js.</span></div>
          </div>
          
          <h3 class="db-title">Databases & Cloud</h3>
          <div class="db">
            <div class="img"><img src="https://github.com/zvbrsten/zvbrsten/blob/main/mongodblogo.png?raw=true"/><span class="description">MongoDB - I have experience with MongoDB and designing efficient NoSQL databases.</span></div>
            <div class="img"><img src="https://github.com/zvbrsten/zvbrsten/blob/main/awslogo.png?raw=true"/><span class="description">AWS Solution Architect - I am familiar with AWS services and cloud architecture best practices.</span></div>
          </div>
          
          <h3 class="pl-title">Programming Languages</h3>
          <div class="pl">
            <div class="img"><img src="https://github.com/zvbrsten/zvbrsten/blob/main/clogo.jpg?raw=true"/><span class="description">C - I have proficiency in C programming language and can develop efficient algorithms and data structures.</span></div>
            <div class="img"><img src="https://github.com/zvbrsten/zvbrsten/blob/main/c++logo.jpg?raw=true"/><span class="description">C++ - I have advanced knowledge of C++ and can develop complex software applications.</span></div>
            <div class="img"><img src="https://github.com/zvbrsten/zvbrsten/blob/main/plogo.png?raw=true"/><span class="description">Python - I am proficient in Python and have experience in web development, data analysis, and automation.</span></div>
          </div>
          
          <h3 class="tools-title">Tools & Version Control</h3>
          <div class="tools">
            <div class="img"><img src="https://github.com/zvbrsten/zvbrsten/blob/main/gitlogo.png?raw=true"/><span class="description">Git - I use Git for version control and efficient project management.</span></div>
            <div class="img"><img src="https://github.com/zvbrsten/zvbrsten/blob/main/githublogo.png?raw=true"/><span class="description">GitHub - I collaborate on projects and contribute to open-source development using GitHub.</span></div>
          </div>
          
          <h3 class="languages">Languages</h3>
          <div class="pl">
            <div class="img"><img src="https://github.com/zvbrsten/zvbrsten/blob/main/hindilogo.png?raw=true"/></div>
            <div class="img" id="eng"><img src="https://github.com/zvbrsten/zvbrsten/blob/main/englogo.png?raw=true"/></div>
          </div>
        </div>
      </div>
    </>
  )
}
