import { Container } from '@/components/Container';
import Link from 'next/link';
import { FaqSection } from '@/sections/FaqSection';
import { CallToAction } from '@/sections/CallToAction';

export const metadata = {
  title: 'FAQ',
  alternates: {
    canonical: '/faq'
  },
};

const questionContent = 
  [
    {
      title: 'Privacy & Security',
      subtitle: 
        (<>
          We take your privacy very seriously. If these answers do not address your questions, you may also refer to our{" "}
          <Link href="/privacy" className="text-gg-blue font-medium hover:underline">privacy policy</Link>.
        </>),
      questions: [
        {
          question: 'Why do I require an account?',
          answer:
            (<>
              Having an account on Aftergame enables our core functionality (having a shared record, inviting people to events, planning games, etc). To ensure that you should have access to the data, we need to authenticate you with a user account.
              <br /><br />We may explore ways to not require an account for a more browsing / solo recording use-case in the future, but at this stage we believe that an account is necessary to make sure we can deliver the best value to our users.
            </>),
        },
        {
          question: 'What will Aftergame do with my data?',
          answer:
            (<>
              We put you in control of your data. You have visibility controls for your profile, game collection, play history, and friends, so that you choose who sees your information. 
              <br /><br />We work with community organisers, game publishers and designers. To help enable a better playing experience through better board game design, or game availability, Aftergame provides aggregate information relevant only to the specific games played. There is never any identifiable information shared unless you specify in your visibility settings.
            </>),
        },
        {
          question: 'How does Aftergame make money?',
          answer:
            (<>
              We offer Aftergame for free and with no ads. This is something that our team are proud of and committed to continue. We love board games and are happy to be creating tools to help people have fun playing board games.
              <br /><br />However we need to keep the lights on. We intend to offer a premium plan which will offer additional features and insights for players. We are also working with community organisers, game publishers and designers to provide products and services which enable better game play.
            </>),
        },
        {
          question: 'How do I delete my data?',
          answer:
            (<>
              If at any time you wish to not have your data on our services, you may delete your account. This will wipe personal data, game collections, and your play history. If you have any plays logged with other users, to keep their record intact, we will disassociate your account but keep a player in their history.
            </>),
        },
      ]
    },
    {
      title: 'Product support',
      subtitle: 
        (<>
          Answers to some of the most asked questions about the Aftergame app. If you have any other questions, please{" "}
          <Link href="/contact" className="text-gg-blue font-medium hover:underline">contact us</Link>.
        </>),
      questions: [
        {
          question: 'How do I link a play with my friend’s account?',
          answer:
            (<>
              The true power of Aftergame unlocks when you have a shared record with the people you play with. To connect someone to a player in your app, simply click on the player and press the “Send invite” button. This will provide you with a link to share with them. When they click on it, they will be set up and connected. You can now link them to future plays and those plays will instantly appear on their phone!
            </>),
        },
        {
          question: 'How can I import my existing collection and play history?',
          answer:
            (<>
              Like you, we were tracking our collection and plays before we built Aftergame, so we know the importance of keeping your play history when switching to a new app. To make the process as easy as possible we have built an intuitive import process which allows you to import from multiple sources (currently from BoardGameGeek, with BG Stats and spreadsheet uploads coming soon).
              <br /><br />You can access imports from within the app under the “Profile” tab and then following the “Import” link. Here you will be directed to the sources you can import from, with easy steps on what to do. You can import multiple times from the same source, this will update new records without creating any duplicates.
            </>),
        },
        {
          question: 'Why can I not access Aftergame through a website?',
          answer:
            (<>
              We are a small team which has required that we focus our time and resources. The main use of our product will generally be away from a computer, so to provide the most value we have prioritised a mobile app available on both iOS and Android.
              <br /><br />We intend to launch a dedicated Aftergame web app in the future. To help with this, we have built our product in a way where much of our codebase can be shared with a future website.
            </>),
        },
        {
          question: 'How do I merge two player accounts that I created?',
          answer:
            (<>
              If you have two players on your phone that are both representing the same person, we allow an easy way to merge their records into the same player. Simply click on each player within the app, and press the “Send invite” button. When the person clicks the link, if they are signed into the same account, it will link those records to their existing account.
            </>),
        },
      ],
    },
    {
      title: 'Game library',
      subtitle: 
        (<>
          We are proud of our game library and put a lot of time into ensuring it is as complete and accurate as we can make it!
        </>),
      questions: [
        {
          question: 'Where does Aftergame’s data come from?',
          answer:
            (<>
              We have a team of dedicated board game experts who research and constantly update our database. To help ensure reliable and accurate details, we use information directly from board game publishers as much as possible. Failing this, we use a variety of online repositories for non-subjective information like year published, player counts, play times, and age recommendations.
            </>),
        },
        {
          question: 'What can I do if I can’t find a board game?',
          answer:
            (<>
              Though we have an expansive library, there will be some instances where we are missing a title. If we are missing a game, please <Link href="/contact" className="text-gg-blue font-medium hover:underline">contact us</Link> and send through the game name + any other information or links you have at hand.
            </>),
        },
        {
          question: 'What do I do if I find a mistake in the game information?',
          answer:
            (<>
              Our team are always striving for perfection in our data and we love to hear where we can improve. If you find any mistakes please <Link href="/contact" className="text-gg-blue font-medium hover:underline">contact us</Link> providing all relevant information. We’ll update the incorrect information as soon as we can.
            </>),
        },
        {
          question: 'How can I remove a game that I published?',
          answer:
            (<>
              To ensure the best player experience, we strive to have as many games listed in our library as possible. We assume that game publishers are generally happy for their game image and information to be shown as long as it is correct (free marketing!).
              <br /><br />However, if you are a publisher or rights holder of a game found in our library and you do not wish for it to be displayed on our product, please send an email to <Link href="mailto:publishers@aftergame.co" className="text-gg-blue font-medium hover:underline">publishers@aftergame.co</Link> with proof of ownership and we will remove any relevant information as soon as possible.
            </>),
        },
      ],
    },
  ];

export default function Faq() {
  return (
    <main className='pt-52'>
      <Container>
        <div className="mx-auto max-w-3xl lg:mx-0 pb-32">
          <h1 className="text-5xl md:text-5xl xl:text-6xl font-medium tracking-tighter md:tracking-tight text-gray-900">
            Frequently asked questions
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="/contact"
              className="text-gg-blue font-medium hover:underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
      </Container>
      {questionContent.map((section, sectionIndex) => (
        <FaqSection key={sectionIndex} content={section} />
      ))}
      <CallToAction />
    </main>
  )
}
