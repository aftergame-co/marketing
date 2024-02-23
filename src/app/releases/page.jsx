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
    version: "0.8.4",
    versionNumber: 24,
    date: "February 23, 2024",
    blurb: "Get notified about games on your Want to Play list that are happening in your area!",
    features: [
      `When a game is planned near you, if it's on your 'Want to Play' list, you'll get notified so you can join the fun! Likewise, if you are planning a public game, this notification can bring more people to your game.`,
      `Added a way to sign in from our web app as a workaround for those having Google sign in issues.`,
    ],
    fixes: [
      `Fixed an issue with incorrect options showing when logging a play for a game with both a player and team role.`,
      `Fixed issues with larger imports not bringing over the entire collection.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.8.3",
    versionNumber: 23,
    date: "February 15, 2024",
    blurb:
      "See a list of all the games you've played with play counts, improved search, and more options when planning a game.",
    features: [
      `From your profile you can now view all games you've played, with play counts, time played, wins, and your H-Index.`,
      `We have greatly improved search. We handle typos, accents, and should give more relevant results.`,
      `You can now post playtests, learn to play sessions, or demo games when planning a game.`,
    ],
    fixes: [
      `You can now keep scrolling through all expansions when logging a play.`,
      `Fixed the ordering of games when logging a play from the home screen.`,
      `A loss now shows up correctly in a 1-player game.`,
      `Updating a player's name now works correctly.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.8.0",
    versionNumber: 22,
    date: "January 25, 2024",
    blurb: "Teams, custom roles, scenarios, and RPGs are now supported in this massive release!",
    features: [
      `Teams! You can you set which teams players were on, assigning team roles and scores when the game allows it.`,
      `Custom roles! We now allow you to enter your own roles, perfect for games we haven't defined, or where the roles are player-created.`,
      `Scenarios! Set the mission your team went on and more with a new way to log the scenario you played.`,
      `RPGs! We have added over 11k RPGs to the platform meaning you can now record the plays for a whole bunch more tabletop games.`,
    ],
    fixes: [
      `Improved game search for games with apostrophes. More improvements coming soon.`,
      `Fixed an issue with the last location not showing up.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.7.7",
    versionNumber: 21,
    date: "January 10, 2024",
    blurb:
      "Know what to expect at events! You can now view the games library available at an event and have a look at the floor plan.",
    features: [
      `The games library is now shown for events (when provided by the host). You can filter the library based on player count, time, complexity, and more!`,
      `We now show an event’s floor plan (when provided by the host).`,
    ],
    fixes: [`Various other fixes and performance improvements.`],
  },
  {
    version: "0.7.5",
    versionNumber: 20,
    date: "December 27, 2023",
    blurb:
      "Find and plan local games easier by setting your current city and we have improved how you browse your play history.",
    features: [
      `You can now set your current city which filters local games to just those near you.`,
      `The play history is now broken into days and better shows who won, even when it wasn't you.`,
      `The home screen got some updates, we now show a featured event and you can keep scrolling through all your plays.`,
      `You can now add your pronouns to your profile.`,
      `Automatic winner selection now handles games where the lowest score wins.`,
      `Viewing a player who's not connected to a user will now show all the plays they are in.`,
    ],
    fixes: [
      `Fixed issues with notification permissions.`,
      `Fixed an issue where the bottom option in roles selection was not shown.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.7.4",
    versionNumber: 19,
    date: "December 14, 2023",
    blurb:
      "Events are now easier to navigate, with many new features, and BGG import has been rebuilt; now much more reliable and over 20x faster!",
    features: [
      `It is now easier to explore events quickly, with less clicks and a new local games tab (watch this space!).`,
      `You can now hide your address when planning a game, giving you greater control.`,
      `When planning games at conventions, you can now add instructions and even drop a pin on the floor plan!`,
      `Importing from BGG should now just work, without lag, even for huge collections and play histories.`,
      `Shared locations now show up when logging a play.`,
      `Missing a game on Aftergame? You can now submit games from the menu in the profile screen.`,
    ],
    fixes: [
      `Fixed a bunch of crashes and reasons for discrepancies in BGG imports.`,
      `Fixed an issue when scrolling through other people's play logs.`,
      `Added a missing pull-to-refresh on the play log screen.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.7.2",
    versionNumber: 18,
    date: "December 6, 2023",
    blurb: "Connect full addresses to locations, share links to events, and many other small improvements.",
    features: [
      `You can now search for an address to connect to a location. This will make organising events easier and enable future features.`,
      `There is now an easy way to share an event link so other can quickly join.`,
      `We have added a view in the events tab to see all the events attending and games you are joining in one place.`,
    ],
    fixes: [
      `Deep links into our app were not always taking people to the right place - whoops!`,
      `Fixed an issue with trying to remove scores on play logs.`,
      `Fixed an issue on some devices where the keyboard covered half the comment box.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.7.1",
    versionNumber: 18,
    date: "December 6, 2023",
    blurb: "Connect full addresses to locations, share links to events, and many other small improvements.",
    features: [
      `You can now search for an address to connect to a location. This will make organising events easier and enable future features.`,
      `There is now an easy way to share an event link so other can quickly join.`,
      `We have added a view in the events tab to see all the events attending and games you are joining in one place.`,
    ],
    fixes: [
      `Deep links into our app were not always taking people to the right place - whoops!`,
      `Fixed an issue with trying to remove scores on play logs.`,
      `Fixed an issue on some devices where the keyboard covered half the comment box.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.7.0",
    versionNumber: 17,
    date: "November 29, 2023",
    blurb:
      "The game and profile screens have been completely rebuilt adding a lot more useful information and filters.",
    features: [
      `Profiles and game pages have been completely rebuilt, with a much cleaner look and new quick actions.`,
      `Added categories, mechanics, themes, designers, artists, and publisher information to game pages.`,
      `We now show the game's complexity and you can also filter your library by this to find the right games.`,
      `Personal best and average scores are now shown for games where it's relevant.`,
      `You can now view your friends' collections and filter them by players, duration, complexity, and more!`,
      `We have added some overall stats to the profile screen`,
      `All expansions are now shown for games, not just the ones you own.`,
    ],
    fixes: [
      `Fixed an issue with the host not coming down correctly for events.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.6.4",
    versionNumber: 16,
    date: "November 17, 2023",
    blurb:
      "Adding your friends is much easier and you can now set your profile visibility to only show to your friends.",
    features: [
      `The new 'Add friends' page shows friend requests, players not connected to a user account, and people you may know.`,
      `We added a new 'Friends' option for the visibility of your collection, play logs, and players.`,
      `There's a new 'Don't remember' option when joining a game that you've played before but don't remember the rules.`,
      `You can now search for friends by their email address.`,
    ],
    fixes: [
      `Fixed a UI bug when sending larger comments.`,
      `Fixed when we ask for notification permissions and added an explanation.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.6.3",
    versionNumber: 15,
    date: "November 12, 2023",
    blurb:
      "Coordinate for events by chatting with other attendees, better game library management, and easier player search.",
    features: [
      `Event discussions have been added to make it easier to plan a game or event.`,
      `We have created two new default collection lists to auto-track games you have played as well as games you want to play.`,
      `Ability to hide or show expansions in your games collection (hidden by default).`,
      `See the counts of the number of games in each list.`,
    ],
    fixes: [
      `The app should load faster when showing any pages you've viewed in the past.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.6.0",
    versionNumber: 14,
    date: "October 13, 2023",
    blurb:
      "Select the role you played as, properly track cooperative games, and see the games you played at specific locations now available!",
    features: [
      `You can now select the role you played as with pre-built lists supported for over 300 games!`,
      `We now support cooperative games, and give you the ability to set when there was a draw or no winners.`,
      `There are new location pages where you can see the most recent plays at that location.`,
      `Ability to edit and delete locations.`,
    ],
    fixes: [
      `Fixed the games library sorting, it is now alphabetical order.`,
      `Fixed a bug where clicking on certain notifications could cause the app to crash.`,
      `Various other fixes and usability improvements.`,
    ],
  },
  {
    version: "0.5.0",
    versionNumber: 13,
    date: "October 4, 2023",
    blurb:
      "Plan your next game on Aftergame!\n\nPlay with friends or find people to join in your favourite games in the Events tab.",
    features: [
      `The new 'Plan a game' feature allows you to select the game you want to play, set when and where, and invite others to join in.`,
      `The 'Events' tab allows you to browse events and games being played, joining those that interest you.`,
      `Log a play and view scores directly from the event page.`,
      `Add events to your calendar so you never miss out.`,
    ],
    fixes: [
      `The 'Players' tab has been moved to under the 'Profile' tab.`,
      `Greatly improved the speed of loading games and plays.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.4.2",
    versionNumber: 12,
    date: "September 20, 2023",
    blurb:
      "Update your name and profile photo, new profile pages with handy shortcuts, and the ability to manage players.",
    features: [
      `You can now update or remove your profile photo, as well as editing your name, username, and a new 'bio'.`,
      `New profile pages with a way to quickly log a play with a friend among many other improvements.`,
      `You can now delete a player or edit their name (only if they are not connected to a user account).`,
      `Added the ability to cancel a friend request.`,
    ],
    fixes: [
      `Fixed issues with deleting your user account.`,
      `We now handle when you accidentally click on your own invite link.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.4.1",
    versionNumber: 11,
    date: "September 8, 2023",
    blurb:
      "Set the location of where you played a game and it's now much easier to invite your friends to join Aftergame.",
    features: [
      `You can now add the location when logging a play, for now just a named location, but adding to a map is coming soon.`,
      `We have added a way to invite all your friends with a single link which will connect them to you.`,
    ],
    fixes: [
      `Fixed an issue with the accept friend button not showing any label (iOS only).`,
      `Pressing / swiping back when a bottom sheet is open closes it (Android only).`,
      `Fixed issues with play history for when someone in the play log deleted their account.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.4.0",
    versionNumber: 10,
    date: "August 30, 2023",
    blurb:
      "Add friends, get notified of new plays and the ability to import from BGG all features in this massive update.",
    features: [
      `Stay connected with friends! We now allow you to connect with fellow players.`,
      `Keep up-to-date with a new notifications section: friend requests and new plays you've been added to will show up here.`,
      `There's a new import section where you can bring your collection and play history from BoardGameGeek and more coming soon.`,
      `Invite codes are no longer required to access Aftergame!`,
    ],
    fixes: [
      `We now show two lines for long game titles.`,
      `Fixed an issue searching for a game when logging a play.`,
      `Various other fixes and performance improvements.`,
    ],
  },
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
