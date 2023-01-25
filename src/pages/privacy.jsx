import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Goodgame Data</title>
        <meta
          name="description"
          content="Goodgame Data. Coming soon."
        />
      </Head>
      <Header />
      <main className='pt-20'>
        <section
          id="privacy-policy"
          aria-label="Privacy policy"
          className="py-20 sm:py-32"
        >
          <Container>
            <p>Your privacy is critically important to us. At Goodgame Data we have a few fundamental principles:</p>
            <ul>
            <li>We don’t ask you for personal information unless we truly need it.</li>
            <li>We don’t share your personal information with anyone except to comply with the law, develop our products, or protect our rights.</li>
            <li>We don’t store personal information on our servers unless required for the on-going operation of one of our services.</li>
            </ul>
            <p>Below is our privacy policy which incorporates these principles. If you have questions about deleting or correcting your personal data please contact our support team.</p>
            <h5>INTRODUCTION</h5>
            <p>Goodgame Data Limited (<strong>we</strong>, <strong>us</strong>, <strong>our</strong>) complies with the New Zealand Privacy Act 2020 and the General Data Protection Regulation of the European Union (<strong>GDPR</strong>) when dealing with personal information.</p>
            <p>Personal information is information about an identifiable individual (a natural person), and includes personal data, personally identifiable information and equivalent information under applicable privacy and data protection laws.</p>
            <p>This policy does not limit or exclude any of your rights under the New Zealand Privacy Act 2020 or the GDPR. For further information on the New Zealand Privacy Act 2020, see <a href="http://www.privacy.org.nz/" target="_blank">www.privacy.org.nz</a>. For further information on the GDPR, see <a href="https://ec.europa.eu/info/law/law-topic/data-protection_en" target="_blank">https://ec.europa.eu/info/law/law-topic/data-protection_en</a>.</p>
            <p>This policy was drafted with brevity and clarity in mind. It does not provide exhaustive detail of all aspects of our collection and use of personal information. We are happy to provide any additional information or explanation needed. Any request for further information should be sent to <a href="mailto:privacy@goodgamedata.com" target="_blank">privacy@goodgamedata.com</a>.</p>
            <h5>CHANGES TO THIS POLICY</h5>
            <p>We may change this policy by uploading a revised policy onto our website. The change will apply from the date that we upload the revised policy.</p>
            <h4>This policy was last updated on 25/01/2022.</h4>
            <h5>WHEN DOES THIS PRIVACY POLICY APPLY</h5>
            <p>In this privacy policy we inform you about which personal data we collect whenever you use our Goodgame app (<strong>App</strong>) and our website https://goodgamedata.com (<strong>Website</strong>), how we use and disclose your personal data and how your personal data are protected. In addition, users of our App may post comments and upload media which contains personal information (<strong>User Data</strong>).</p>
            <p>We require our customers to obtain the necessary consents from individuals to provide User Data to us and permit us to use it as set out in this privacy policy. If you have any concern about our collection and use of personal information about you contained in User Data, please contact us at <a href="mailto:privacy@goodgamedata.com" target="_blank">privacy@goodgamedata.com</a><em>.</em></p>
            <p>For the purposes of the GDPR, our customers are the data controller when storing or otherwise processing User Data that we hold solely for the purpose of providing our App’s functionality and we are the data processor. We are the data controller when storing or otherwise processing User Data that we use for our own purposes.</p>
            <p>We only process User Data as authorised by our customers in our Goodgame Data Terms of Use (available at <a href="https://goodgamedata.com/terms" target="_blank">https://goodgamedata.com/terms</a>)<em>.</em> Unless required otherwise under applicable law, if we receive any request or enquiry relating to User Data that we hold solely for the purpose of providing our service, we will forward this request to our relevant customer. If we receive any requests or enquiries relating to User Data that we use for our own purposes, we will deal with these requests or enquiries as set out in this privacy policy.</p>
            <h5>WHAT PERSONAL INFORMATION DO WE COLLECT</h5>
            <p><strong><em>Directly from you</em></strong></p>
            <p>We collect the following information directly from you.</p>
            <p>When you sign up for, or login to, an account on our Website, App, or related services, we collect your first name, surname, email address, password, location, country, city, IP address, and any other information we require or ask for to set you up with an account. We may collect some of this information using third party authentication services (as described further in the from third party sources section below).</p>
            <p>When you set up a profile, we collect your name, email address, profile photo, IP address and any other information we require or ask for to set you up a profile. You acknowledge and agree that parts of your profile may be publicly available with your consent.</p>
            <p>When you use our App, we collect information about the smartphone and Internet connection you used, such as for example device IDs ("Device tokens"), IP address, advertising ID (e.g. IDFA, Google Advertising ID), country and language.</p>
            <p>When you log a play in our App, we collect the game you played, the people you played with, and where the game was played. We use this information to provide our analytics and insights. We do not share this information in any way that can be related back to you without your prior consent.</p>
            <p>When you fill in a contact or enquiry form on our Website, call us, meet us in person or otherwise contact us, we collect your name/email address and any other information you choose to provide to us.</p>
            <p>When you sign up to our newsletter and other electronic alerts, we collect your name, email address and any other information you provide to us when you ask to receive our newsletter or other alerts.</p>
            <p>When you respond to our feedback surveys, we collect your name, email address, and any other information you choose to include in your response.</p>
            <p>When you post information for publication on our Website (e.g. on message boards or chat rooms), we collect the information you include in those posts.</p>
            <p>Some of the personal information that we collect directly from you may be mandatory and some may be optional. We will let you know which of these applies at the time we collect the relevant personal information. While you do not have to provide us with some of the information that we may request, this might mean that our products and services may not perform as well as they should, or that we may not be able to provide some parts of the website or all of our products or services to you. If you require further information about the consequences of not providing us with any information, please contact us at <a href="mailto:privacy@goodgamedata.com" target="_blank">privacy@goodgamedata.com</a>.</p>
            <p>We use Stripe, a third party service provider, to process credit card transactions. We do not have access to your credit card information. You can see further information about how they process your credit card information in their privacy policy: <a href="https://stripe.com/privacy" target="_blank">https://stripe.com/privacy</a>.</p>
            <p><strong><em>Automatically when you use our Website or App</em></strong></p>
            <p>When you access and use our Website, App or related services we may automatically collect information about your device and usage of our website, products and services, including your IP address, operating system, browser type, time spent on certain pages of the Website, pages visited, links clicked, language preferences.</p>
            <p>Some of this data is collected through third party tools and/or the use of cookies, web beacons and similar storage technologies. Please refer to our cookie policy below for further information, including information on how you can disable these technologies.</p>
            <p><strong><em>From third party sources</em></strong></p>
            <p>Where possible, we collect personal information from you directly. However, sometimes we may collect:</p>
            <ul>
            <li>personal information from third parties where you have authorised this. This may include accessing certain personal information from third party social media or other authentication services (e.g. Google, Apple) if you login to your account with us using these services or otherwise provide us access to information from these sources. The third party provider that we use will be displayed and you can visit its privacy policy for further details on how it deals with personal information</li>
            <li>personal information included in User Data.</li>
            </ul>
            <p>We may combine the personal information about you that we receive from third parties with the personal information we collect from you directly or with device and usage data we collect automatically when you visit our Website or use our App.</p>
            <h5>HOW WE USE YOUR PERSONAL INFORMATION</h5>
            <p>We may use your personal information to:</p>
            <ul>
            <li>verify your identity</li>
            <li>provide our website, products and services to you</li>
            <li>market our products and services to you, including contacting you electronically</li>
            <li>improve our website, products and services</li>
            <li>publish things on our website (e.g. comments on message boards or chat rooms)</li>
            <li>run promotions (e.g. referral and loyalty programs, surveys and contests)</li>
            <li>bill you and collect money that you owe us, including authorising and processing credit card transactions</li>
            <li>respond to communications from you, including enquiries and complaints</li>
            <li>conduct research and statistical analysis (on an anonymized basis)</li>
            <li>tailor content or advertisements on our website to you</li>
            <li>protect and/or enforce our legal rights and interests, including defending any claim</li>
            <li>respond to lawful requests by public authorities, including to comply with law enforcement requirements, or</li>
            <li>for any other purpose authorised by you or applicable law.</li>
            </ul>
            <p>We may transfer your information in the case of a sale, merger, consolidation, liquidation, reorganisation or acquisition.</p>
            <p>You can stop receiving our marketing emails by following the <em>unsubscribe</em> instructions included in those emails.</p>
            <h5>DISCLOSING YOUR PERSONAL INFORMATION</h5>
            <p>We may disclose your personal information to:</p>
            <ul>
            <li>another company within our group</li>
            <li>any business that supports our website, products and services, including any person that hosts or maintains any underlying IT system or data centre that we use to provide our website, products or services or that we use to process payments</li>
            <li>professional advisers e.g. accountants, lawyers or auditors</li>
            <li>a person who can require us to supply your personal information (e.g. a law enforcement agency or regulatory authority)</li>
            <li>any other person with your consent</li>
            <li>any other company in the case of a sale, merger, consolidation, liquidation, reorganisation or acquisition</li>
            <li>any other person authorised by applicable law.</li>
            </ul>
            <p>Also, we may share information about your use of our Website or App with our trusted advertising and analytics partners through the use of cookies, web beacons, and similar storage technologies. Please refer to our cookie policy below for further information.</p>
            <h5>INTERNATIONAL TRANSFERS OF PERSONAL INFORMATION</h5>
            <p>A business that supports our website, products and services may be located outside of New Zealand (the country where we are incorporated) and also outside of the country where you are located. This means that the personal information we collect may be transferred to, and stored in, a country outside of New Zealand and the country where you are located.</p>
            <p>If you are located in the European Economic Area (<strong>EEA</strong>), your personal information may be transferred outside of the EEA. Under the GDPR, the transfer of personal information to a country outside the EEA may take place where the European Commission has decided that the country ensures an adequate level of protection. In the absence of an adequacy decision, we may transfer personal information if other appropriate safeguards are in place.</p>
            <p>Where we transfer personal information outside the EEA, it will only be transferred to countries that have been identified as providing adequate protection for EEA data, or to a third party where approved transfer mechanisms are in place to protect your personal information (e.g. by entering into the European Commission’s <a href="https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/model-contracts-transfer-personal-data-third-countries_en" target="_blank">Standard Contractual Clauses</a>). For further information, please contact at <a href="mailto:privacy@goodgamedata.com" target="_blank">privacy@goodgamedata.com</a>.</p>
            <p>Some of the personal information we collect is processed in New Zealand. New Zealand is recognized by the European Commission as a country that has an adequate level of data protection and we rely on this decision in transferring personal information to New Zealand.</p>
            <h5>PROTECTING YOUR PERSONAL INFORMATION</h5>
            <p>As required by applicable law, we will take steps to keep your personal information safe from loss, unauthorised activity, or other misuse. We implement appropriate technical and organisational measures to ensure a level of security appropriate to the risks inherent in processing personal information.</p>
            <p>You play an important role in keeping your personal information secure by maintaining the confidentiality of any password and accounts used in relation to our products and services. You should not disclose your password to third parties. Please notify us immediately if there is any unauthorised use of your account or any other breach of security.</p>
            <h5>ACCESSING AND CORRECTING YOUR PERSONAL INFORMATION</h5>
            <p>Subject to certain grounds for refusal under applicable law, you have the right to access your personal information that we hold and to request a correction to your personal information. Before you exercise this right, we will need evidence to confirm that you are the individual to whom the personal information relates.</p>
            <p>Where you request a correction, if we think the correction is reasonable and we are reasonably able to change your personal information, we will make the correction. In all other cases, we will take reasonable steps to make a note of the personal information that was the subject of your correction request.</p>
            <p>If you want to exercise either of the above rights, email us at <a href="mailto:privacy@goodgamedata.com" target="_blank">privacy@goodgamedata.com</a>. Your email should provide evidence of who you are and set out the details of your request (e.g. the personal information to be corrected and the correction that you are requesting).</p>
            <p>Subject to applicable law, we may charge you our reasonable costs of providing to you copies of your personal information or correcting that information.</p>
            <h5>OTHER RIGHTS</h5>
            <p>In addition to the rights to access and correct your personal information, if you are based in the European Union, you have the additional rights set out in the GDPR Additional Terms section of this privacy policy below.</p>
            <h5>INTERNET USE</h5>
            <p>While we take reasonable steps to maintain secure internet connections, if you provide us with personal information over the internet, the provision of that information is at your own risk.</p>
            <p>If you post your personal information on your website, you acknowledge and agree that the information you post is publicly available.</p>
            <p>If you follow a link on our website to another website, the owner of that website will have its own privacy policy relating to your personal information. We suggest you review that website’s privacy policy before you provide personal information to that owner or website.</p>
            <h5>DATA RETENTION POLICY</h5>
            <p>The personal information that we collect and use will not be kept longer than necessary for the purposes for which it is collected, or for the duration required for compliance with applicable law, whichever is longer.</p>
            <h5>CONTACTING US</h5>
            <p>If you have any question about this privacy policy, or our privacy practices, or if you would like to request access to, or correction of, your personal information, you can contact us at <a href="mailto:privacy@goodgamedata.com" target="_blank">privacy@goodgamedata.com</a>.</p>
            <p>The name and contact details of our Data Protection Officer for the purposes of the GDPR are:</p>
            <div>
            <table>
            <tbody>
            <tr>
            <td>Name</td>
            <td>Eric Poulin</td>
            </tr>
            <tr>
            <td>Email address</td>
            <td><a href="mailto:privacy@goodgamedata.com" target="_blank">privacy@goodgamedata.com</a></td>
            </tr>
            </tbody>
            </table>
            </div>
            <h4>GDPR ADDITIONAL TERMS</h4>
            <h5>LAWFUL BASIS FOR PROCESSING PERSONAL INFORMATION</h5>
            <p>Our lawful basis for processing (as that term is defined in the GDPR) personal information that we collect, use and disclose depends on the personal information collected and the context in which we collect it.</p>
            <p>Generally, we collect personal information from you where we have your consent, where processing is necessary for the performance of a contract to which you are party or in order to take steps at your request prior to entering into a contract, or where processing is necessary for the purposes of our legitimate interests (except where such interests are overridden by your interests or fundamental rights and freedoms).</p>
            <p>Where we process personal information based on your consent, you may withdraw your consent at any time.</p>
            <p>Despite the above, we may process your personal information where such processing is necessary for compliance with applicable laws.</p>
            <p>If you have any question about the legal basis on which we process personal information or need further information, please contact us at <a href="mailto:privacy@goodgamedata.com" target="_blank">privacy@goodgamedata.com</a>.</p>
            <h5>YOUR RIGHTS UNDER THE GDPR</h5>
            <p>If you are located in the European Union, your rights in relation to your personal information include:</p>
            <ul>
            <li><strong>right of access</strong> - if you ask us, we will confirm whether we are processing your personal information and provide you with a copy of that personal information</li>
            <li><strong>right to rectification</strong> - if the personal information we hold about you is inaccurate or incomplete, you have the right to have it rectified or completed. We will take reasonable steps to ensure inaccurate personal information is rectified. If we have shared your personal information with any third party, we will tell them about the rectification where possible</li>
            <li><strong>right to erasure</strong> - when your personal information is no longer needed for the purposes for which you provided it, we will delete it. You may request that we delete your personal information and we will do so if deletion does not contravene any applicable law. If we have shared your personal data with any third party, we will take reasonable steps to inform those third parties that they must delete your personal information</li>
            <li><strong>right to withdraw consent</strong> - if the basis of our processing of your personal information is consent, you can withdraw that consent at any time</li>
            <li><strong>right to restrict processing</strong> - you may request that we restrict or block the processing of your personal information in certain circumstances. If we have shared your personal information with any third party, we will tell them about this request where possible</li>
            <li><strong>right to object to processing</strong> - you may request that we stop processing your personal information at any time and we will do so to the extent required by the GDPR</li>
            <li><strong>rights related to automated decision-making, including profiling</strong> - you have the right to not be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning you or similarly significantly affects you, except where such automated decision-making is necessary for entering into, or the performance of, a contract with you, is authorised by applicable laws or is based on your explicit consent. We carry out automated decision-making, including profiling, as described above in the general terms section of this privacy policy.</li>
            <li><strong>right to data portability</strong> - you may obtain your personal information from us that you have consented to give us or that is necessary to perform a contract with you. We will provide this personal information in a commonly used, machine-readable and interoperable format to enable data portability to another data controller. Where technically feasible, and at your request, we will transmit your personal information directly to another data controller</li>
            <li><strong>the right to complain to a supervisory authority</strong> - you can report any concern you have about our privacy practices to your local data protection authority.</li>
            </ul>
            <p>Where personal information is processed for the purposes of direct marketing, you have the right to object to such processing, including profiling related to direct marketing.</p>
            <p>If you would like to exercise any of your above rights, please contact us at <a href="mailto:privacy@goodgamedata.com" target="_blank">privacy@goodgamedata.com</a>. If you are not satisfied by the way we deal with your query, you may refer your query to your local data protection authority.</p>
            <h3>Cookie policy</h3>
            <h5>INTRODUCTION</h5>
            <p>We use cookies on our Website and as part of our related services, and receive information collected through cookies. This cookie policy explains how we use cookies and how you can opt out of cookies.</p>
            <p>By continuing to use our Website and related services, you indicate your agreement for us to use the cookies described below.</p>
            <p>We use the term <em>cookies</em> in this cookie policy to mean cookies or similar technologies such as web beacons, clear GIFs, and pixel tags.</p>
            <h5>WHAT ARE COOKIES</h5>
            <p>Cookies are text files containing small amounts of information which are downloaded to your browsing device, e.g. a computer or smartphone, when you visit a website. Cookies can be recognized by the website that downloaded them, or by other websites that use the same cookies. This helps a website know if the browsing device has visited that or other websites before.</p>
            <p>Cookies can be used to collect information relating to your use of a website or your device, let you navigate between pages effectively, help to remember your preferences and generally improve your browsing experience. Cookies can also help ensure advertising you see online is more relevant to you and your interests.</p>
            <p>Cookies can be <em>session</em> or <em>persistent</em> cookies. <em>Session</em> cookies are temporary and only stay on your browser until you stop browsing. <em>Persistent</em> cookies stay on your device until they expire or are deleted.</p>
            <p>The cookies used on our website may be first party cookies (i.e. set by us) or third party cookies (i.e. cookies set on our website by a person other than us). The third party companies that place cookies on our website will have their own privacy policies.</p>
            <h5>WHAT TYPES OF COOKIES DO WE USE</h5>
            <p>The types of cookies used by us, and most websites, can generally be categorised as follows.</p>
            <p><strong>Strictly necessary cookies</strong></p>
            <p>These cookies are essential for the full functionality of our website and related services. They enable you to navigate around our website and services and use their features e.g. accessing secure areas and enabling services that you have asked to receive. If you opt out of these cookies, you may not be able to access all the functions of our website and some services that you have asked to receive.</p>
            <p>These cookies do not track where else you have been on the internet and do not remember your preferences beyond your current visit. These cookies are generally first party session cookies which will expire when you close your browsing session. These cookies do not collect information that could be used for marketing purposes.</p>
            <p><strong>Functionality cookies</strong></p>
            <p>These cookies allow a website to remember choices you make and provide enhanced, more personal features. e.g. these cookies allow us to remember the settings you have applied to the website (such as font size, preferences or colours), identify whether you are a returning website visitor and present you with a personalised version of the website, or eliminate the need for you to re-enter your login details. The information these cookies collect is generally anonymous and they do not track your browsing activity on other websites. These cookies may be first or third party, session or persistent cookies.</p>
            <p><strong>Performance cookies</strong></p>
            <p>These cookies collect information about how you use a website, e.g. which pages are the most visited and if you receive any error message from any page. This information helps us improve the way our website and related services work and helps us manage the performance and design of the website and services. These cookies do not gather information that identifies you. All of the information these cookies collect is aggregated and anonymous. These cookies may be first or third party, session or persistent cookies.</p>
            <p><strong>Targeting cookies</strong></p>
            <p>Targeting cookies are used to present advertising that is relevant to you and your interests. These cookies collect information about your browsing habits e.g. the pages you have visited and the links you have followed across the internet. They may also be used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns. These cookies will usually be persistent but time-limited and may be placed on our website by third party service providers or advertising partners with our permission.</p>
            <p>We use targeting cookies to present interest-based advertising on our website and for retargeting. This is a form of interest-based advertising that enables our advertising partners to build a profile of your interests and show you advertising based on your browsing activity across the internet, including to allow us to advertise to people who previously visited our website.</p>
            <h5>GOOGLE COOKIES</h5>
            <p>We use Google Analytics to collect information about visitors to our Website. Google Analytics collects information related to your device, browser, IP address, network location, and website activities to measure and report statistics about your interactions on our website. We use this information to help us manage the performance and design of our website and to improve our website.</p>
            <p>We use Google Analytics Advertising Features, including Remarketing with Analytics, Demographic and Interests reporting in Analytics, Campaign Manager integration (formerly known as DoubleClick), Display &amp; Video 360 integration, Google Display Network (GDN) Impression Reporting and Segments. We also use Google Ads.</p>
            <p>For further information on how Google uses your personal information when you use our website and how to opt out of Google’s use of cookies, see <a href="https://policies.google.com/?hl=en" target="_blank">here</a>. In addition to the process described in this link, you can opt out using the process described below.</p>
            <h5>HOW TO CONTROL OR OPT OUT OF COOKIES AND TARGETED ADVERTISING</h5>
            <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our website and attempt to use our services, you may not be able to access certain parts of our website or services, and some functionalities may not work.</p>
            <p>You can find out more information about how to change your browser cookie settings at <a href="http://www.aboutcookies.org.uk/" target="_blank">www.aboutcookies.org.uk</a>.</p>
            <p><em>You may opt out of targeted advertising at </em><a href="http://www.youronlinechoices.eu/" target="_blank"><em>http://www.youronlinechoices.eu/</em></a><em>. You can learn more about interest-based advertising and opt out of interest-based advertising from participating online advertising companies at the following links.</em></p>
            <ul>
            <li><em>Network Advertising Initiative (NAI) - </em><a href="http://optout.networkadvertising.org/" target="_blank"><em>http://optout.networkadvertising.org/</em></a></li>
            <li><em>Digital Advertising Alliance (DAA) - </em><a href="http://optout.aboutads.info/" target="_blank"><em>http://optout.aboutads.info/</em></a></li>
            <li><em>Digital Advertising Alliance EU (EDAA) - </em><a href="http://www.youronlinechoices.com/" target="_blank"><em>http://www.youronlinechoices.com/</em></a></li>
            <li><em>DAA AppChoices page - </em><a href="http://www.aboutads.info/appchoices" target="_blank"><em>http://www.aboutads.info/appchoices</em></a></li>
            </ul>
            <p><em>Please note that opting out of interest-based advertising does not mean you will no longer be served advertising. You will continue to receive generic ads</em>.</p>
            <h5>THIRD PARTY WEBSITE COOKIES</h5>
            <p>If you follow a link on our website to another website, the owner of that website will have its own cookies. We suggest you review that website’s cookie policy before you visit that website.</p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
