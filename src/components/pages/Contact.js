import React from 'react';

export default function Contact() {
  return (
    <div>
      <section class='CONTACT'>

        <div class='contactGet'>
          <span class="one"> Get in touch! </span>

        </div>

        <div class="sendMsg">
              <h2> Send me a message here or shoot me an email at <span class='one'> ofullente@gmail.com </span></h2>

        </div>

        <div>
            <section class="row">
              <div class="column">

                <div class="box box-height-1">
                  <input placeholder="Name"></input>
                </div>

                <div class="box box-height-2">
                  <input placeholder='Email'></input>
                </div>

                <div class="box box-height-3">
                  <input id='Message'placeholder='Message'></input>
                </div>

                <div class='box box-height-4'>
                  <span class='message' onClick="alert('Thank you');"> Send Message </span>
                </div>
              </div>
            </section>
        </div>

      </section>

      
    </div>
  );
}
