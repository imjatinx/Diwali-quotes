import React from 'react'
import { Link } from 'react-router-dom'
import policy from '../Assests/Hero.png'

export default function Policy() {
  return (
    <div>
      <h1 className='text-5xl font-bold text-center pb-5'>Privacy Policy</h1>
      <div className='hero-content'>
        <img className="w-[16rem] sm:w-[25rem] rounded-lg shadow-2xl" src={policy} alt="About us" />
      </div>
      <p className='p-5 text-justify md:mx-10'>
        <h1 className='font-bold text-2xl'>Privacy Policy for Happy diwali SMS</h1>

        <p>At Happy Diwali SMS Team, accessible from www.happydiwalisms.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.</p>

        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to <Link to={'/contact-us'} className="underline font-bold">contact us</Link>.</p>

        <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared. This policy is not applicable to any information collected offline or via channels other than this website.</p>

        <h1 className='font-bold text-2xl'>Consent</h1>

        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

        <h1 className='font-bold text-2xl'>Information we collect</h1>

        <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
        <p>If you contact us directly, we may receive additional information about you such as your name, email address, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
        <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>

        <h1 className='font-bold text-2xl'>How we use your information</h1>

        <p>We use the information we collect in various ways, including to:</p>

        <ul className='list-disc list-inside'>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalise, and expand our website</li>
          <li>Understand and analyse how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>

        <h1 className='font-bold text-2xl'>Log Files</h1>

        <p>Happy Diwali SMS Team follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.</p>

        <h1 className='font-bold text-2xl'>Advertising Partners Privacy Policies</h1>

        <p>You may consult this list to find the Privacy Policy for each of the advertising partners of us.</p>

        <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Happy diwali sms website, which are sent directly to users&apos; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalise the advertising content that you see on websites that you visit.</p>

        <p>Note that Happy Diwali SMS Team has no access to or control over these cookies that are used by third-party advertisers.</p>

        <h1 className='font-bold text-2xl'>Third Party Privacy Policies</h1>

        <p>Happy diwali sms team&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>

        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.</p>

        <h1 className='font-bold text-2xl'>TCPA, 2019 Privacy Rights (Do Not Sell My Personal Information)</h1>

        <p>Under the TCPA, among other rights, consumers have the right to:</p>
        <p>Request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
        <p>Request that a business delete any personal data about the consumer that a business has collected.</p>
        <p>Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data.</p>
        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

        <h1 className='font-bold text-2xl'>Access to Personally Identifiable Information:</h1>
        <p>
          If your personally identifiable information changes, or if you no longer desire our service, you may correct, update, amend or request deletion by making the change on our member information page or by emailing our team at
          <a href="mailto:nitajenterprises00@gmail.com?subject=EnquiryfromHappyDiwaliSMS" target='_blank'> nitajenterprises00@gmail.com</a>. We will respond to your access request within 30 days.
        </p>
        <p>
          We will retain your information as needed to provide you services. If you wish to request that we no longer use your information to provide you services contact us at nitajenterprises00@gmail.com. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
        </p>
      </p >
    </div >
  )
}
