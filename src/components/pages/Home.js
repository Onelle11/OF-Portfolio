import React from 'react';

export default function Home() {
  return (
    <div>
      
    <section className="TOP" id="TOP">
        <h2> Hey there, my name is </h2>

        <h1> Onelle Fullente.<br></br>
        <span className="TOP1"> I am a full Stack Developer. </span></h1>

        <h2> I'm a full stack developer specializing in building exceptional digital experiences.
            Currently, I'm looking to take on my first real world experience after finishing my boot camp
            certification at <a href="https://www.utoronto.ca"><span class="UoT"> University of Toronto. </span></a></h2>
    </section>

    <section class="viewResume">
        <button class="vBTN"><a href='/images/Onelle_Fullente.pdf' download='OF-Portfolio'><h2> View My Resume </h2></a></button>
    </section>

    <section class="CONTACT" id="CONTACT">

        {/* <div class="contactTop">
            <h2> <span class="four"> 04. </span> Contact </h2>
        </div> */}

        <div class="contactGet">
            <h1> <span class="one"> Get in touch </span></h1>
        </div>

        <div class="contactDesc">
            
            <div class="contactDesc-1">
            <h2> I'm always looking for new opportunities, and my inbox is always open. Shoot me an email and let's talk about
                any opportunities or work 😊 Thank you! </h2>
            </div>

        </div>

        <div class="contactBtn">
            <button class="cBTN"><h2> Let's talk </h2></button>
        </div>
    </section>

    <footer>
        
        <div class="footer-1">
            <div class="fICON">
                <div class="footer-1Icon">
                    <a href="https://www.linkedin.com/in/onelle-fullente-213882238/"><i class="fa-brands fa-linkedin-in fa-xl" style= {{ color: "#a1a2a4;"}}></i></a>
                </div>

                <div class="footer-1Icon">
                    <a href="https://www.instagram.com/onelle11/"><i class="fa-brands fa-instagram fa-xl" style= {{ color: "#a1a2a4;" }}></i></a>
                </div>

                <div class="footer-1Icon">
                    <a href="https://github.com/Onelle11"><i class="fa-brands fa-github fa-xl" style= {{ color: "#a1a2a4;" }}></i> </a>
                </div>

                <div class="footer-1Icon">
                    <i class="fa-brands fa-linkedin-in fa-xl" style= {{ color: "#a1a2a4;" }}></i>
                </div>
            </div>
        </div>

        <div class="footer-1">
            <div class="footer-name">
                <div class="footer-name-1">
                    <h2> Designed by Moe Als - Built by Onelle Fullente </h2>
                </div>

                <div class="footer-name-2">
                    <div class="footer-name-Port">
                        <b><p> Portfolio </p></b>
                    </div>

                    <div class="footer-name-Port">
                        <b><a href="https://github.com/Onelle11"><p> Github </p></a></b>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-1">
            
            <svg width="97" height="39" viewBox="0 0 97 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.1475 12.7969H42.0275C45.8875 12.7969 49.0275 15.9569 49.0275 19.7969C49.0275 20.2369 48.9875 20.6369 48.9275 21.0369C48.3275 24.3169 45.4675 26.7969 42.0275 26.7969H35.1675C31.7275 26.7969 28.8675 24.3169 28.2675 21.0369C28.1875 20.6369 28.1675 20.2369 28.1675 19.7969C28.1675 15.9569 31.3075 12.7969 35.1475 12.7969ZM35.1475 24.6569H42.0275C44.2475 24.6569 46.1275 23.1569 46.7075 21.1169C46.8275 20.6969 46.8875 20.2569 46.8875 19.7969C46.8875 19.1169 46.7475 18.4569 46.4875 17.8569C45.7275 16.1569 44.0075 14.9569 42.0275 14.9569H35.1475C33.1875 14.9569 31.4675 16.1569 30.7075 17.8569C30.4475 18.4569 30.3075 19.1169 30.3075 19.7969C30.3075 20.2569 30.3675 20.6969 30.4875 21.1169C31.0475 23.1569 32.9475 24.6569 35.1475 24.6569Z" fill="#A1A2A4"/>
                <path d="M53.2545 17.8569C52.9945 18.4569 52.8545 19.1169 52.8545 19.7969V22.9969L56.5145 20.8769L59.5345 19.1369C60.0145 18.8569 60.4745 18.7369 61.0145 18.7369H69.7945V20.8769H58.2345C57.6745 20.8769 57.2145 20.9969 56.7545 21.2769L54.3145 22.6769C53.5545 23.1169 53.0545 23.8169 52.8945 24.6569V26.7969H50.7145V19.7969C50.7145 15.9569 53.8545 12.7969 57.6945 12.7969H69.7945V14.9569H57.6945C55.7345 14.9569 54.0145 16.1569 53.2545 17.8569Z" fill="#A1A2A4"/>
                <rect x="2.23096" y="2.04688" width="93.5" height="35.5" rx="9.75" stroke="#A1A2A4" stroke-width="2.5"/>
            </svg>
                
        </div>
    </footer>
    </div>
  );
}
