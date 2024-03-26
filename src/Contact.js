import React from 'react'

export default function Contact() {
  return (
    <div class="containerform" id="projects" style={{transition: "all 0.7s ease"}}>
    <h2 align="center">Contact Me</h2>
    <form id="myForm">


        <label for="name">Name:</label><br/>
        <input type="text" id="name" name="name" required/><br/>
        <label for="email">Email:</label><br/>
        <input type="email" id="email" name="email" required/><br/>
        <label for="contact">Contact:</label><br/>
        <input type="text" id="contact" name="contact" required/><br/>
        <label for="address">Address:</label><br/>
        <input type="text" id="address" name="address" required/><br/>
        <label for="message">Message:</label><br/>
        <input type="text" id="message" name="message" required/><br/>
        <button type="submit" id="submit-btn">Submit</button>
    </form>
    <p >You can Always reach out to me on my social
        media platforms !!</p>
    <div class="web">

        <div><a href="https://instagram.com/zvbyash">
                <img src="https://github.com/zvbrsten/zvbrsten/blob/main/insta%20logo.jpg?raw=true"/>
            </a></div>
        <div><a href="https://linkedin.com/in/yash-sharma-657a2524b"><img
                    src="https://github.com/zvbrsten/zvbrsten/blob/main/linkedinlogo.jpg?raw=true"/></a></div>
        <div><a href="https://github.com/zvbrsten" style={{filter:'invert(100%)'}}><img
                    src="https://raw.githubusercontent.com/zvbrsten/zvbrsten/main/githublogo.webp"/></a></div>



    </div>
</div>
  )
}
