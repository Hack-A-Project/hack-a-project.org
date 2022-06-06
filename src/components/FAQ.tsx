import React from 'react'

const FAQ = () => {
  return (
    <div>
      <h1 id="faq">FAQ</h1>
      {/* Note to self: During css integration if details doesn't work, use javascript */}
      <div>
        <details>
          <summary>Who can join?</summary>
          <p>
            Hack-A-Project does not discriminate based on race, gender, ethnicity, or any other personal identifiers. At the moment, All students who are currently
            matriculated at College of Staten Island can join.
          </p>
        </details>
        <details>
          <summary>How do I join?</summary>
          <ol>
            <li>Go to the <a href="https://csi.campuslabs.com/engage/organization/hack_a_project" target="_blank" rel="noreferrer">Hack-A-Project CSI Connect Page</a></li>
            <li>Sign in with your CSI login</li>
            <li>Click JOIN</li>
          </ol>
        </details>
        <details>
          <summary>Why should I join?</summary>
          <p>
            Hack-A-Project gives you the opportunity to get involved with people with the same interest as you, namely, project developement and technology.
            In the club you will make lifelong friends, work on project that will look good to future employers, and compete for attractive prizes. If you have
            an inkling of interested in technology then Hack-A-Project is where to be.
          </p>
        </details>
        <details>
          <summary>What events do you do?</summary>
          <p>
            We do a bunch of programming and technology related events:
            <a href="https://en.wikipedia.org/wiki/Hackathon" target="_blank" rel="noreferrer">Hackathons</a>,
            <a href="https://en.wikipedia.org/wiki/Capture_the_flag_(cybersecurity)" target="_blank" rel="noreferrer">CTFs</a>,
            <a href="https://leetcode.com/" target="_blank" rel="noreferrer">Leetcode</a> Challenges, Typing Contest, Guest Speakers, and many more.
          </p>
        </details>
        <details>
          <summary>I'm not a computer science major, should I join?</summary>
          <p>
            Of course, one of our values at Hack-A-Project is collaboration, so even if your not a computer science major and know nothing about tech, as long
            as you want to get to know smart, talented, and charismatic people, you should join. Also, we host workshops that teach beginners how to built things, so
            you can pick up some practical skills.
          </p>
        </details>
        <details>
          <summary>How many members do we have?</summary>
          <p>We currently have over 100 members in our club!</p>
        </details>
        <details>
          <summary>What should I do if I my question is not answered here?</summary>
          <p>Email us at hackaprojectcsi@gmail.com.</p>
        </details>
      </div>
    </div>
  )
}

export default FAQ