import { Container } from '@/components/Container';
import { TwitterLogo, FacebookLogo, DiscordLogo } from '@/components/SocialLogos';
import { CallToAction } from '@/sections/CallToAction';
import Link from 'next/link';

export const metadata = {
  title: 'Releases',
  alternates: {
    canonical: '/releases'
  },
};

const changelogs = [
  {
    version: "0.3.4",
    versionNumber: 9,
    date: "August 17, 2023",
    blurb:
      "We have improved how you select players when logging a play, making it easier to find those you play with most.",
    features: [
      `The players shown while selecting players is now ordered by who you most recently interacted with.`,
      `We now show players you have played with before, not just those you are connected to.`,
      `You can now search for users by their name or username.`,
    ],
    fixes: [
      `Fixed some bugs that happened in some edge-cases when accepting an invite.`,
      `Scrolling through longer lists now shows a loading spinner when more content is loading.`,
      `We have greatly improved the performance of certain pages of our app.`,
      `We have given the play log screens a UI refresh to bring it inline with upcoming features.`,
      `Various other fixes.`,
    ],
  },
  {
    version: "0.3.3",
    versionNumber: 8,
    date: "August 3, 2023",
    blurb: "You can now select which expansions you played and view leaderboards for specific expansions.",
    features: [
      `With over 12,000 (and counting) expansions in our system, you can now select which ones you played along with the base game.`,
      `We can now show you the leaderboard and statistics when playing a specific expansion.`,
    ],
    fixes: [
      `Fixed an issue where the bottom sheet could not be dismissed in some instances.`,
      `Blocked the ability to send invites to players you did not create.`,
      `Fixed an issue where some play logs could not be deleted.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.3.2",
    versionNumber: 7,
    date: "July 25, 2023",
    blurb: "We have released a big batch of fixes and improvements.",
    features: [],
    fixes: [
      `The app now loads much faster.`,
      `Fixed an issue where collections filter was not getting updated when a new collection was added.`,
      `Filters are no longer cleared when hiding the additional options.`,
      `Fixed an issue when accepting an invite and you hadn't yet created a profile.`,
      `The 'Add game' button was too low on some devices when viewing from search results.`,
      `Players no longer get jumbled when scrolling through your play history.`,
      `UI/UX improvements across the app.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.3.1",
    versionNumber: 6,
    date: "July 18, 2023",
    blurb: "It is now much easier to send player invites and you can set the duration of play.",
    features: [
      `You can now send players a simple invite link which handles downloading the app and connecting their account.`,
      `When logging a play, you are now able to set the play duration.`,
      `We now automatically select the winner as scores are inputted.`,
    ],
    fixes: [
      `Blocked editing or deleting plays if you do not have permissions.`,
      `Fixed a bug where attempting to edit a play before it loaded would cause the app to crash.`,
      `UI/UX improvements across the app.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.3.0",
    versionNumber: 5,
    date: "July 2, 2023",
    blurb: "Player profile pages have been added and you can now delete games and plays.",
    features: [
      `Player profiles have been added so you can see your friends' game collections and plays.`,
      `Added permission settings to control who can see information on your profile.`,
      `You are now able to delete a game and plays from your collection.`,
    ],
    fixes: [
      `Fixed a bug where there could be duplicates of players in the leaderboard.`,
      `UX improvements in the games screen and the adding game flow.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.2.6",
    versionNumber: 4,
    date: "June 19, 2023",
    blurb: "We have rebranded to be called Aftergame and have a new logo.",
    features: [
      `We have rebranded to be called Aftergame and have a new logo.`,
      `We no longer require a first name and a surname, we have simplified to use just a display name.`,
    ],
    fixes: [`Fixed some scrolling issues when focused in text boxes.`],
  },
  {
    version: "0.2.3",
    versionNumber: 3,
    date: "June 1, 2023",
    blurb: "You can now edit your plays and manage your players in the new Players tab.",
    features: [
      `Added the ability to edit plays after they are posted.`,
      `There's now a basic "Players" tab showing all your players, with the ability to add players and send invite codes.`,
    ],
    fixes: [
      `Fixed an issue where the keyboard blocked part of the screen when recording a play.`,
      `We now correctly show updated stats after logging a play.`,
      `UX improvements for adding players to a play.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.2.2",
    versionNumber: 2,
    date: "May 22, 2023",
    blurb: "",
    features: [
      `You can now set the score for each player while logging a play.`,
      `New players now have default "Owned" and "Wishlist" collections.`,
      `We now show some play stats when viewing your game collection.`,
    ],
    fixes: [
      `While logging a play, newly created players are automatically selected.`,
      `When adding games, newly created collections are automatically selected.`,
      `Fixed issues with navigation in nested pages so that going back properly works.`,
      `Fixed issues when accepting an invite on an already-created account.`,
      `Various other bug fixes and performance improvements.`,
    ],
  },
  {
    version: "0.2.1",
    versionNumber: 1,
    date: "May 17, 2023",
    blurb: "Our initial release!",
    features: [
      `Signup with Google or Apple.`,
      `Add games to your collection, with the ability to create custom collections.`,
      `Powerful global search and filtering, blended between your collection and our game library.`,
      `A game library of 23k+ (and rapidly rising)`,
      `Ability to log plays for a game, recording the game, time, players, winner(s), and notes.`,
      `Invite other players so that they can see any games you play together.`,
      `See your play history, filter down to specific games and players.`,
      `Very basic game stats and leaderboards.`,
    ],
    fixes: [],
  },
];

export default function About() {

  return (
    <main className='pt-52'>
      <Container>
        <div className="mx-auto max-w-3xl lg:mx-0 pb-32">
          <h1 className="text-5xl md:text-5xl xl:text-6xl font-medium tracking-tighter md:tracking-tight text-gray-900">
            What’s new
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Join our community to follow our updates.
          </p>
          <div className='mt-2 flex gap-2'>
              <Link 
                href="https://www.facebook.com/Aftergame.co" 
                target='_blank' 
                aria-label="Facebook" 
                className="flex align-middle justify-center w-auto h-9 p-2 text-gray-500 hover:text-facebook-blue hover:bg-gray-200 rounded-lg"
              >
                <FacebookLogo />
                <p className="text-lg ml-2 leading-tight">Facebook</p>
              </Link>
              <Link 
                href="https://discord.gg/XMYxvJ3ge2" 
                target='_blank' 
                aria-label="Discord" 
                className="flex align-middle justify-center w-auto h-9 p-2 text-gray-500 hover:text-discord-blurple hover:bg-gray-200 rounded-lg"
              >
                <DiscordLogo />
                <p className="text-lg ml-2 leading-tight">Discord</p>
              </Link>
              <Link 
                href="https://twitter.com/aftergame_co" 
                target='_blank' 
                aria-label="Twitter" 
                className="flex align-middle justify-center w-auto h-9 p-2 text-gray-500 hover:text-twitter-blue hover:bg-gray-200 rounded-lg"
              >
                <TwitterLogo />
                <p className="text-lg ml-2 leading-tight">Twitter</p>
              </Link>
            </div>
        </div>
      </Container>
      {changelogs.map((changelog, changelogIndex) => (
        <section
          key={changelogIndex}
          id={changelog.version}
          aria-labelledby={changelog.version}
          className="border-t border-gray-200 py-16 sm:py-16 sm:pb-24"
        >
          <Container>
            <div className="max-w-2xl">
              {changelog.date && (
                <h2 className="text-3xl font-medium tracking-tight text-gray-900">
                  {changelog.date}
                </h2>
              )}
              {changelog.version && (
                <p className="mt-1 text-sm text-gray-500">
                  Version {changelog.version}
                </p>
              )}
            </div>
            {changelog.features && changelog.features.length > 0 && (
              <>
                <h3 className='mt-6 mb-2 text-lg font-semibold leading-6 text-gray-900'>Features</h3>
                <ul
                  role="list"
                  className="max-w-2xl list-disc list-inside mb-4"
                >
                  {changelog.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="ml-6 mb-2 text-sm text-gray-700">
                      {feature}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {changelog.fixes && changelog.fixes.length > 0 && (
              <>
                <h3 className='mt-6 mb-2 text-lg font-semibold leading-6 text-gray-900'>Fixes</h3>
                <ul
                  role="list"
                  className="max-w-2xl list-disc list-inside mb-4"
                >
                  {changelog.fixes.map((fix, fixIndex) => (
                    <li key={fixIndex} className="ml-6 mb-2 text-sm text-gray-700">
                      {fix}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Container>
        </section>
      ))}
      <CallToAction />
    </main>
  )
}
