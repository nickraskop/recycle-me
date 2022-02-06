import React from 'react';

export default function About() {
  return (
    <body>
      <ul>
        <li><a href="play">Play</a></li>
        <li><a href="about">About</a></li>
        <li><a href="learn">Learn</a></li>
        <li><a href="leaderboard">Leaderboard</a></li>
      </ul>
      <div id='inbody'>
        <h1 id="about-title">About</h1>
        <p> <b>This game tries to teach kids about how to recycle and what can/cannot be recycled. We made it during Spring 2022 HackSC (2/5/2022)</b> </p>
        <br></br>
        <br></br>
        <div class="info">
          <div class="profile">
            <div class="person">
              <b>Jonathan Phan</b>
              <a href="https://www.linkedin.com/in/jonathan-phan-csba/" target="_blank">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFyacJuOsEyaQ/profile-displayphoto-shrink_400_400/0/1613551509676?e=1649894400&v=beta&t=U2-V1nvMIQanDbcLpj88XuAYwbNaYkiyHJ4hvmHgRgk" id="jon" width="200px" class ="zoom"></img>
              </a>
              <p class="description">Jonathan is a computer science and business student at USC, hoping to pursue a future career in software engineering and entrepreneurship!</p>
            </div>
            <div class="person">
              <b>Nick Raskop</b>
              <a href="https://www.linkedin.com/in/nickraskop/" target="_blank">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQF1UEirUpeE2w/profile-displayphoto-shrink_400_400/0/1632272931713?e=1649894400&v=beta&t=LxDhvxokDYnPZ3n24xHCL3p470rs4Kn-rKkFNqPrSLQ" id="nick" width="200px" class ="zoom"></img>
              </a>
              <p class="description">Nick is a sophomore at USC studying computer science hoping to learn new technologies and gain software engineering experience.</p>
            </div>
            <div class="person">
              <b>Wardah Jabeen</b>
              <a href="https://www.linkedin.com/in/wardah-jabeen-9488b71ba/" target="_blank">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQFFv35jOEWijA/profile-displayphoto-shrink_400_400/0/1643230336267?e=1649894400&v=beta&t=qAo51z0dNz__hcSL364MlQXDJXl-YfKS0Ajep4stdQc" id="wardeh" width="200px" class ="zoom"></img>
              </a>
              <p class="description">Wardah is currently a junior pursuing a bachelors in Computer Engineering & Computer Science (CECS). She is passionate about developing a career in Software Engineering and Web Development.</p>
            </div>
            <div class="person">
              <b>Kritin Dhoka</b>
              <a href="https://www.linkedin.com/in/kritin-dhoka-ba76031bb/" target="_blank">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQF-5LNdQppvHw/profile-displayphoto-shrink_400_400/0/1626262293528?e=1649894400&v=beta&t=maniG8kwiLUsRu_aL8qw652whmGxRqs8qdTrnvu1bWM" id="kritin" width="200px" class ="zoom"></img>
              </a>
              <p class="description">Kritin is a junior pursuing a Bachelor's of Science in Computer Science. He's passionate about Data Science and Machine Learning.</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}