import React from 'react';

export default function About() {
  return (
    <div>
      <section class="ABOUT" id="ABOUT">

<div class="aboutme">
    
    <h1> <span class="one"> 01. </span> About me </h1>
    <br></br>
    <p> Hello! I'm Onelle Fullente, a passionate full stack developer with a solid foundation
        in front-end technologies like HTML, CSS, and JavaScript, as well as expertise in back-end
        development using Python and frameworks like Django.
    </p>
    <br></br>
    <p> I thrive in collaborative environments, working alongside experienced developers to tackle
        challenges and deliver optimal solutions. With strong communication skills, adaptability,
        and a problem-solving mindset, I am commited to continuous growth and staying updated
        with the latest industry trends. Let's create exceptional digital experiences together!
    </p>
    <br></br>
    <h2> Here are a few additional languages I've been working with recently: </h2>
    
    <div class="exampleBox">
        <div class="exBox"><i class="fa-solid fa-play" style={{ color: "#fde68a" }}></i> example 1 </div>
        <div class="exBox"><i class="fa-solid fa-play" style={{ color: "#fde68a" }}></i> example 2 </div>
    </div>

    <div class="exampleBox">
        <div class="exBox"><i class="fa-solid fa-play" style={{ color: "#fde68a" }}></i> example 3 </div>
        <div class="exBox"><i class="fa-solid fa-play" style={{ color: "#fde68a" }}></i> example 4 </div>
    </div>
</div>

<div class="aboutme">
  <img src={ require("./images/Onelle.png" )} alt="Onelle Pic"></img>
    
    <div class="imgBox">

    </div>
</div>
</section>
<section class="WORK" id="WORK">
    <h1> <span class="two"> 02. </span> Work & School Experience </h1>

    <div class="WERP">
    
        
        <aside>
            <li class="uBTN" id="uBTN"> <span class="uotExp"> University of Toronto </span></li>
            <li class="fBTN" id="fBTN"> Fanshawe College </li>
            <li class="tBTN" id="tBTN"> Trudell Medical Ltd </li>
            
    
        </aside>
    

    <div class="werpDesc" id="werpDesc">
        <h1 class="werpDescH1" id="werpDescH1"> Full Stack Development Bootcamp <a href="https://www.utoronto.ca"><span class="one"> @UofT </span></a></h1>

        <p class="werpDescP" id="werpDescP"> Dec 2022 - June 2023 </p>

        <br></br>

        <h2 class="werpDescH2" id="werpDescH2"> This intensive program equipped me with a solid understanding of front-end technologies like HTML, CSS, and JavaScript,
            allowing me to create captivating user interfaces. Additionally, I honed my skills in back-end development using Python
            and frameworks like Django, empowering me to build robust and scalable server-side applications.
        </h2>

        <br></br>

        <h2 class="werpDescH3" id="werpDescH3"> 
            <li><i class="fa-solid fa-play" style={{ color: "#fde68a;" }}></i> Mastered front-end technologies (HTML, CSS, JavaScript)
                to craft captivating user interfaces. </li>

            <li><i class="fa-solid fa-play" style={{ color: "#fde68a;" }}></i> Developed expertise in back-end development using Python
                and frameworks like Django, enabling the creation of robust and scalable server-side applications.</li>

            <li><i class="fa-solid fa-play" style={{ color: "#fde68a;" }}></i> Gained practical experience through hands-on projects
                in database management, version control systems, and deployment strategies. </li>
        </h2>

        <br></br>

        <h2 class="werpDescH4" id="werpDescH4"> With my comprehensive skill set and the guidance of experienced instructors and industry professionals, I am ready to
            embark on my professional journey as a proficient full stack developer. I am excited to adapt to emerging technologies,
            contribute effectively to web development projects, and create exceptional digital experiences that leave a lasting
            impact. </h2>
    </div>

    </div>

</section>
    </div>
  );
}
