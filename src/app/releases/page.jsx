import { Container } from '@/components/Container';
import { InstagramLogo, FacebookLogo, DiscordLogo, BlueksyLogo } from '@/components/SocialLogos';
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
    version: "2.14.133",
    versionNumber: 76,
    date: "January 14, 2026",
    blurb:
      "The events screen has received some improvements, you can now block other user accounts, and some more fixes.",
    features: [
      `On the events screen, there is now a 'My groups' button which allows you to filter to events happening in any of your groups.`,
      `We have combined events and planned games into a single list on the events screen by default. You can still filter to just events or games if desired.`,
      `You can now block other user accounts. This will stop that account from being able to find you in search, invite you to groups or events, or send you notifications.`,
    ],
    fixes: [
      `Fixed long-standing issues with accuracy in "nearby" events or groups, this has also improved the load speeds.`,
      `Fixed a bug where copying a planned game with a custom name would revert the name.`,
      `Fixed a bug which wouldn't let you update your profile details if you did not have a date of birth already set.`,
      `[Web] Fixed a UI bug when selecting your date of birth.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.13.132",
    versionNumber: 75,
    date: "January 11, 2026",
    blurb:
      "We have fixed some further crashes and added the ability to filter the content of group and event activity feeds.",
    features: [
      `You can now filter the activity feed for both events and groups to show just the type of content you want.`,
      `We now show which position in the waitlist each player is in.`,
    ],
    fixes: [
      `Fixed a crash which could happen when editing an event.`,
      `Improved the load speed when opening a post.`,
      `Implemented a potential fix to a crash when navigating away from the search screen.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.13.131",
    versionNumber: 74,
    date: "January 9, 2026",
    blurb: "This update includes some important fixes aimed to fix some recent crashes and stability problems.",
    features: [`Event hosts can now move attendees to the waitlist.`],
    fixes: [
      `Fixed some crashes which could happen when loading an event.`,
      `Fixed crashes which could occur when moving between screens.`,
      `Performance improvements during initial loading of the app.`,
      `Fixed some visual bugs with loading the feed and events.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.13.129",
    versionNumber: 73,
    date: "January 7, 2026",
    blurb:
      "Happy New Year! We kick off the year with big improvements to search along with a big batch of bug fixes and quality of life improvements.",
    features: [
      `Game search has gotten a lot faster and more relevant with a new relevance sorting and better exact match results.`,
      `You can now sort the leaderboard by any column so you can easily see the most wins, or best score.`,
      `For games that are just win/loss, we now show the number of draws in the leaderboard.`,
      `You can now sort the group stats by number of plays or number of players.`,
    ],
    fixes: [
      `Fixed some crashes which could happen while loading the feed.`,
      `Fixed some timezone bugs for event join/view access times.`,
      `Fixed a bug where you could not edit play logs that had an image in it.`,
      `Fixed a bug where the roles option would show up for play logs where it was not relevant.`,
      `The event schedule better handles events that end at midnight on the previous day.`,
      `We no longer block creating places with the same name as one of your deleted places.`,
      `Fixed a bug which would not allow you to change your current city.`,
      `Scrolling through game search results would sometimes not allow you to keep going past a few screens.`,
      `We have made it more obvious that you can edit or delete a comment on desktops.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.13.128",
    versionNumber: 72,
    date: "December 15, 2025",
    blurb:
      "We have pushed out a few smaller updates fixing bugs and adding small quality of life improvements while we work on our next big update in the background.",
    features: [
      `Added the ability to update event attendees/players to be reserving a space.`,
      `We now show more clearly the details if an event has controls on who can view/join an event and when access is open.`,
      `We now show if there is a waitlist for a game or event.`,
      `Game masters and teachers have been added to the event cards list.`,
      `Limited deleting a group to be something only the group creator (and not just any admin) can do.`,
    ],
    fixes: [
      `Fixed more issues with the 'Log again' feature.`,
      `Fixed a bug where setting the join/view access for an event wouldn't 'stick'.`,
      `Improved loading of notifications and scoreboards.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.13.126",
    versionNumber: 71,
    date: "December 3, 2025",
    blurb:
      "We have released a major upgrade to the core platform, a refresh of the home screen, big improvements to collection management, the ability to merge players, and dozens of bug fixes!",
    features: [
      `We now show the games and events happening in a specific room when viewing a room in the Venue section of an event.`,
      `When viewing your own profile, we now show if you have friend requests needing a response.`,
    ],
    fixes: [
      `Fixed many display bugs introduced in the previous version.`,
      `Fixed play logs not showing up when viewing plays for a specific game.`,
      `Fixed the 'Log again' button not always working as intended from the feed.`,
      `Fixed issues with scrolling down the combined group collection view.`,
      `Fixed adding a bug which would not always add new content to the top of the feed.`,
      `Improved startup launch times.`,
      `Improved loading more items in the feed, games, and play log lists.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.13.122",
    versionNumber: 71,
    date: "November 30, 2025",
    blurb:
      "We have released a major upgrade to the core platform, a refresh of the home screen, big improvements to collection management, the ability to merge players, and dozens of bug fixes!",
    features: [
      `Almost every corner of the app has been affected by a major upgrade and rewrite of the core technology running Aftergame, bringing major performance and stability improvements.`,
      `The home screen has been tidied up, with cleaner, more compact group cards, and removing the games row (please let us know if this is missed!)`,
      `The activity feed can now be filtered by type of activity.`,
      `We have made adding and removing games from your collection much faster and more consistent, with a new button displayed over the game thumbnail for quick access.`,
      `You can now merge two guest players (including all their history) - one of our most requested features!`,
      `You can now filter to just view your guest players in the select player view.`,
      `When accepting an invite to merge a player into your account, we now show details about the history of the player being merged in.`,
      `You can now share your profile via a QR code.`,
      `Improved the look of feed items and added a "Log again" button on plays.`,
      `We now cache loaded data for longer and more consistently, this should particularly improve load speeds on Android devices.`,
      `You can now delete players even if they are in play logs.`,
    ],
    fixes: [
      `Fixed a bug where taking photos did not work on Android 16.`,
      `Improved the accuracy of the default city during account creation.`,
      `Fixed filtering game lists by complexity`,
      `Fixed filtering to unscheduled games in the event schedule.`,
      `Planned game players are now sorted by when they joined the game.`,
      `Countless over minor UX and bug fixes.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.12.121",
    versionNumber: 69,
    date: "November 4, 2025",
    blurb:
      "Planning a game no longer requires specifying a time, play logs get a revamp in the feed, many improvements to event management, and much more in today's release!",
    features: [
      `Not sure when to schedule a game? You can now plan a game or event without having to specify a time!`,
      `Play logs have received a big revamp in the news feed, now with a new look and showing much more information.`,
      `You can now set which games or events should also be copied when the parent event is copied or repeated.`,
      `Hosts, Game Masters, and Teachers are now also copied when copying an event.`,
      `When viewing your group's combined collection, you can now filter to a specific set of players.`,
      `We now require a date of birth for all new accounts and encourage all existing users to add theirs. This will soon be a requirement to better ensure safety.`,
      `The groups list now shows groups which you're an admin for first.`,
      `Added the ability to create events from the home screen.`,
      `If you are a group admin and creating an event outside the scope of a group or event, we now prompt where you want to post the event to.`,
      `Play logs now orders players by their result and shows their rank.`,
      `Added an extra confirmation before deleting a group.`,
    ],
    fixes: [
      `Fixed a bug where RSVPing as "Not going" would not add you to the not going list.`,
      `Fixed a bug with formatted links not working in posts or comments.`,
      `Re-enabled the ability to set a player as "Lost" while logging a play for games that are not defined.`,
      `Reserved seats were not showing up in the Planned Games card.`,
      `Fixed a bug which would not allow you to remove a GM or teacher from a planned game.`,
      `Copying an event and changing the start date would reset the event length.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.11.120",
    versionNumber: 68,
    date: "October 20, 2025",
    blurb:
      "While we are cooking up our next big update, this is a small release which adds many quality of life improvements and fixes to play logs!",
    features: [
      `Play log results now correctly handles ranks, so it's no longer just a winner and losers, but correctly lists second, third, fourth, etc.`,
      `Added the ability to edit the game and expansions you played in a play log.`,
      `Added the ability to edit the rule set you used in a play log.`,
      `Greatly simplified how we store play data which has fixed a handful of edge cases.`,
      `Added AVIF image file support for all image uploads.`,
    ],
    fixes: [
      `Fixed a bug where games would stay in your "Played" list even after deleting all plays of that game.`,
      `Changing event times will now correctly update child events / game times within the event.`,
      `Fixed a crash which would occur if a @mention had a quote in it.`,
      `Fixed a bug which would swap the digits typed into the score input while logging a play.`,
      `The event sign up dates are now correctly shown in the event's time zone.`,
      `Fixed a few notification issues on iOS.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.10.118",
    versionNumber: 67,
    date: "October 2, 2025",
    blurb:
      "This release brings more controls and fixes. Set notification preferences per group, control who can join your games or events, and much more!",
    features: [
      `You can now manage notifications at a group level, overriding your global notification settings for notifications from that group.`,
      `Event hosts can now control who can join an event, setting whether an event is open, for group members, or invite only.`,
      `Game and event sign up access can also be controlled by time, set when RSVPs open and when they are close.`,
      `Want your events to show up at a specific time? You can now set when your event will become visible.`,
      `A new setting has been added to block attendees from inviting others, leaving it controlled by hosts.`,
      `When a person joins a game or event hosted by a group they are not part of, we now have an unobtrusive prompt to join the group.`,
      `Play to Win competitions now have an option to only allow one entry per game per person.`,
      `When you lock in the results for a Play to Win competition, we now send a csv of all winners and a csv of all responses automatically.`,
      `We now show images for roles, or scenarios when they are available.`,
    ],
    fixes: [
      `Fixed a bug where mention notifications were sometimes attributed to the wrong user.`,
      `Deleting a game list will now correctly clean up any games that were in your collection and only in that list.`,
      `Liking a post or play log in the feed now correctly updates the heart icon.`,
      `Fixed a crash which could occur when viewing a list of plays.`,
      `Fixed a bug which could lead to Aftergame+ features not being immediately available to new subscribers in the web app.`,
      `Play logs of cooperative plays could get in a situation where a player was marked as "winning".`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.9.116",
    versionNumber: 66,
    date: "September 18, 2025",
    blurb: "This release brings support for official publisher groups as well as a few important bug fixes.",
    features: [
      `Publishers can now apply to get their official group for their events, games, and community.`,
      `Publisher groups show all their published games rather than the group collection, and stats are filtered to just their games.`,
      `Find and join publisher groups in the Groups tab.`,
      `When viewing a location, we now show all events and planned games happening there.`,
      `Group admins can now add a website link to their group.`,
      `Group admins can now disable game leaderboards for their group.`,
    ],
    fixes: [
      `When creating events or planning games within a paid event, event hosts now correctly get access to all the paid features / attendee limits.`,
      `Fixed a crash which could happen when moving between recurring event instances.`,
      `Fixed a bug where the event attendees would not all display correctly.`,
      `Fixed some edge-case crashes when we have not properly loaded an event date from the server.`,
      `Fixed the "see more" for group/event details cutting off too soon in some instances.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.9.115",
    versionNumber: 67,
    date: "September 15, 2025",
    blurb:
      "We have packed many improvements and bug fixes to events and groups as well as preparing for upcoming features in today's release.",
    features: [
      `We now support events having multiple rooms with floor plans and have implemented many improvements to this UX.`,
      `When claiming seats on behalf of someone else, instead of setting those players to "Going", they will now be set to "Reserved".`,
      `When a seat is freed up, the next person on the waitlist will be set to "Reserved" rather than "Going", which still holds their seat but requires a response.`,
      `Event and group descriptions, play log notes, and profile bios now support markdown and the text area expands as you type.`,
      `Event hosts can now disable the ability for attendees to bring un-named "+1s" to an event.`,
      `You can now easily set yourself to "Not going" without first needing to set yourself as going when RSVPing to an event.`,
    ],
    fixes: [
      `[Web] Fixed a bug in events which would infinitely scroll the feed to the bottom when you were not signed in.`,
      `[Web] Fixed a bug which cut off the player invite screen.`,
      `Fix to ensure a 2:1 image ratio on all screens for event/group banners.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.9.112",
    versionNumber: 66,
    date: "September 3, 2025",
    blurb:
      "Tag people in posts and comments, leaderboards get a big upgrade, and our initial launch of the group stats page are all included in today's release!",
    features: [
      `You can now type @ to mention any Aftergame user. Admins/event hosts can also tag @everyone.`,
      `Leaderboards have been completely rebuilt. You can now browse and filter game leaderboards on a new page.`,
      `View group leaderboards and filter leaderboards to specific time periods.`,
      `Aftergame+ subscribers can also filter leaderboards by the player count, expansions played, ruleset used, and locations played.`,
      `The first version of the group stats page is here with some overall stats and a list of the most played games in the group.`,
      `The location filter is now multi-select for all play and stat pages.`,
      `Hosts and game masters can now move people to the event waitlist.`,
    ],
    fixes: [
      `Changing an event's location will now correctly update all child events/games to that location.`,
      `Fixed a bug when planning a game where it would sometimes set the max players to 50.`,
      `New post notifications are now delayed by 15 minutes to non-admins to give time for spam posts to be deleted before everyone gets pinged.`,
      `Greatly improved the quality of shareable games-played images, particularly for web.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.8.3",
    versionNumber: 65,
    date: "August 27, 2025",
    blurb:
      "A small release which fixes some app crashes which occurred while logging plays and push notifications on iOS.",
    features: [],
    fixes: [
      `A recent change on iOS meant that push notifications were no longer being sent. This has been fixed!`,
      `Fixed a bug when turning on the play timer and leaving the app, the app would crash when you return.`,
    ],
  },
  {
    version: "2.8.1",
    versionNumber: 64,
    date: "August 19, 2025",
    blurb:
      "A small release with bug fixes which also includes some under-the-hood changes in preparation for some upcoming features.",
    features: [],
    fixes: [
      `Made a bunch of improvements which should fix issues where you would get signed out.`,
      `Fixed a few issues with sharing event links.`,
      `Clicking an Aftergame link within a post will now open it within the app rather than a new browser window.`,
      `[Web] The post input field now expands to the full screen height.`,
      `Improved the UX for deleting events or games.`,
      `Fixed a few instances where the keyboard would not be hidden.`,
      `Improved the display of the Aftergame logo for embedded pages.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.8.0",
    versionNumber: 63,
    date: "August 7, 2025",
    blurb:
      "Email sign up is now supported, embed event and game lists into your website, as well as improvements to group and event screens.",
    features: [
      `We finally support email signup, so new users no longer need to connect their Google, Apple, or Discord account to Aftergame.`,
      `Aftergame+ subscribers are now able to embed event schedules, group event calendars, and game lists directly into their websites.`,
      `If a group or event has a game library, we now prompt if you would like to plan a game using a copy from the library.`,
      `Group and event actions have been standardised and cleaned up.`,
      `You can now set a password on your account to use email+password sign in.`,
    ],
    fixes: [
      `Fixed the display of waitlist ordering to correctly show who is next in line.`,
      `Players who were rejected from joining a group can now be re-invited.`,
      `Fixed some bugs which clipped the bottom of some sheets.`,
      `Fixed a bug when creating a custom role or scenario, it would show up when opening a different role field.`,
      `[Web] You can now click next/previous through images in posts.`,
      `[Web] Better display of floor plans and ability to zoom in/out.`,
      `Fixed a potential edge-case which may have meant push notifications were not sent to a device.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.7.0",
    versionNumber: 62,
    date: "July 17, 2025",
    blurb:
      "The wait for waitlists is over! Let players join a waitlist once games fill up. Also connect guest players via QR code and many fixes included in today's release.",
    features: [
      `Aftergame+ subscribers can now enable waitlists for games and events for players to join once a game fills up. If a seat comes free, the first player on the waitlist gets added.`,
      `An easy QR code option has been added for connecting guest players to a real person.`,
      `We now label who created a guest player.`,
      `Added new options for repeat events for the last day of month and for every four weeks.`,
    ],
    fixes: [
      `Fixed issues with groups not loading.`,
      `Scrolling to the bottom of the player list when inviting now correctly loads more players.`,
      `Fixed a bug which clipped the bottom of the player select list.`,
      `We now correctly check if the parent event hasn't passed its attendee limit when trying to join a child event.`,
      `Fixed a bug which incorrectly categorised RPGs as expansions and hid them when expansions was unticked in the filters.`,
      `We have a potential fix for importing a very large play history from BGG.`,
      `Events and games load better with loading animations.`,
      `Some wording changes throughout the app to reduce confusion.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.6.1",
    versionNumber: 61,
    date: "July 3, 2025",
    blurb:
      "Event creation, inviting players, and managing event attendance has been greatly improved in this update packed with quality of life improvements.",
    features: [
      `You can now browse group members or limit your search to just friends when inviting people to games and events.`,
      `Invited people no longer automatically fill a seat. Instead, you are given the choice to invite or secure a seat when inviting players to a game.`,
      `Add a note when responding to an invite or attending games and events.`,
      `The minimum needed players is now shown in a planned game's player list.`,
      `Creating events has been simplified and the distinction between a "Meetup" and "Convention" removed.`,
      `Aftergame+ subscribers now have the ability to create events with 100 attendees.`,
      `View your total games, plays, and hours played for a given filter in the play stats screen.`,
      `We now confirm if you want to exit the screen when trying to leave an event, play log, group, or game creation screens.`,
      `Event hosts can now manage attendees from the attendees screen.`,
      `You can now search for group members or event attendees when viewing the full list.`,
      `Recent group events now show up in the group feed with a prompt to add photos.`,
      `You can now dismiss group invites.`,
      `The play log score input keyboard now has a dismiss button.`,
    ],
    fixes: [
      `Fixed some app crashes particularly affecting iOS devices.`,
      `Fixed a crash when validating ticket links during event creation.`,
      `Fixed a handful of bugs when submitting Play to Win entries.`,
      `Fixed an issue where the event "Where" filter was not able to be updated.`,
      `Added nicer loading effects throughout many pages in the app.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.5.1",
    versionNumber: 60,
    date: "June 5, 2025",
    blurb:
      "The Aftergame web app is out of early access, collection management has been streamlined, sharing to people without the Aftergame app is much better and some large under-the-hood resulting in big performance improvements.",
    features: [
      `The Aftergame web app (https://aftergame.app) is out of early access! This means 'app.aftergame.co' is being discontinued in favour of the new and improved 'aftergame.app' sharing URL.`,
      `Events, groups, and games can now be loaded without being signed into an Aftergame account.`,
      `Added a new 'Collection' menu when viewing a game to quickly manage your collection.`,
      `When adding a game already in your collection, we will prompt if you want to add a new copy or update your existing copy.`,
      `A new 'Competitions' section is added to large events running Play to Win competitions.`,
      `Added the ability to copy the invite link for groups and events, particularly useful on web.`,
      `You can now remove other players from a play log (and they will be notified).`,
      `We have improved empty states in many lists and sections for better readability.`,
    ],
    fixes: [
      `We have fixed dozens of performance and routing issues throughout the app.`,
      `Loading the web app on subsequent loads should be far better.`,
      `Removed the broken 'Plan a game' button on the empty events view.`,
      `Fixed some issues with viewing an event schedule in a different time zone.`,
      `Fixed a bug which showed events you were interested in as 'Attended' in the feed.`,
      `Fixed a bug which cleared the attached game list when editing an event with a game list someone else added.`,
      `Fixed a bug which wiped your current city when changing your avatar.`,
      `Fixed a bug which in some cases would reverse the digits you typed in the score input while logging a play.`,
      `Fixed a crash which could happen when loading up a user's profile.`,
      `Fixed a UI bug causing long group member names to hide some buttons.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.4.1",
    versionNumber: 58,
    date: "April 22, 2025",
    blurb:
      "This update contains many bug fixes and a lot of behind-the-scenes changes to support some exciting upcoming features.",
    features: [
      `View all the "Interested" players for a game.`,
      `Group admins can now give a reason when rejecting a join request.`,
      `You can now like play logs from the play log screen.`,
    ],
    fixes: [
      `Fixed many a handful of bugs which did not update the group members screen when making membership changes.`,
      `Fixed bugs where events were not showing the most up-to-date data.`,
      `The upcoming group events count has been corrected to not include games at events.`,
      `Fixed a bug which meant the "Can't go" button did nothing.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.4.0",
    versionNumber: 57,
    date: "April 8, 2025",
    blurb:
      "Discover groups nearby, set yourself as 'Interested' for games or events, duplicate events and a whole lot of improvements throughout the app.",
    features: [
      `The Groups tab has been completely rebuilt to better showcase local groups and improve discoverability.`,
      `There is now an option to set yourself as 'Interested' to a planned game or event. This will save the event but not yet reserve you a seat.`,
      `Event hosts and group admins can now quickly duplicate any game or event.`,
      `We now show all nearby planned games when viewing a game.`,
      `You can now post multiple game lists in a single post.`,
      `We now show more games on the main event page.`,
      `[Web] Horizontally scrolling sections now have left and right buttons to easily scroll the view.`,
    ],
    fixes: [
      `Fixed a bug in game event cards which showed an extra empty seat.`,
      `Fixed a bug with collapsible text where in some cases, you could expand to see all.`,
      `Fixed a bug which did not show game lists linked to sub-events.`,
      `We have improved the import process to immediately update your collection.`,
      `Fixed a bug which would wipe the score when editing a play which was imported from BGG.`,
      `Fixed the source of a few app crashes.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.3.3",
    versionNumber: 56,
    date: "March 27, 2025",
    blurb:
      "We now detect when you may have timing clashes when claiming a seat to a game as well as a whole raft of bug fixes and improvements.",
    features: [
      `When claiming a seat to a game at an event, we now detect if you have other games or events scheduled at the same time and warn you of the potential clash.`,
      `We have given the event schedule a small UI uplift to make things look cleaner and more consistent.`,
      `Spreadsheet imports now accept "objectname" and "objectid” column names and maps to “name” and “bgg_id” respectively to accept the BGG export format.`,
    ],
    fixes: [
      `Fixed a bug which would crash the app when linking directly to a profile.`,
      `Fixed a handful of bugs where we incorrectly would say all seats were claimed when trying to invite people to a game with an open seat.`,
      `Fixed a bug which would incorrectly port roles when pressing log again and then changing the game.`,
      `Fixed the location validation when creating an event.`,
      `Fixed some bugs which lead to incorrect attendee counts at an event.`,
      `Fixed a bug which didn't let you remove an acquired date for a game copy.`,
      `Fixed floor plan location selection on the web app.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.3.2",
    versionNumber: 55,
    date: "March 19, 2025",
    blurb:
      "Event hosts can now add non-game events to the schedule, as well as many usability fixes and stability improvements to the app.",
    features: [
      `Event hosts can now add generic events that are not needing a game attached to the schedule. Perfect for adding seminars, prize announcements, shared meals or anything else to the schedule!`,
      `Event hosts can now set an event to be automatically added to all attendee's schedules.`,
      `For all events, we now show the two next games with free seats so attendees are able to quickly join.`,
    ],
    fixes: [
      `Fixed a bug which caused the home feed to show older items when returning to the screen.`,
      `Fixed a bug where accepting an invite to a merge a player would cause an infinite load.`,
      `We now block Google Sign In and give an explanation when trying to sign in from the Facebook or Instagram inbuilt browser. For reasons beyond our control, Google blocks their sign in method when users try to access it from Meta's browsers...`,
      `Fixed a bug with the 'available seats' filter in event schedules sometimes showing full games.`,
      `GMs or teachers who are also the event host will no longer receive double notifications.`,
      `Fixed a bug blocking Aftergame+ features when editing an event.`,
      `When freeing up a claimed seat, we now have a more accurate label on the button.`,
      `Significantly increased the character limit for comments.`,
      `Improved the reliability of keeping you signed in.`,
      `Fixed a bug which sometimes didn't select a tab when performing a global search.`,
      `A whole lot of style and UX improvements for the web app (with the time picker and bottom sheets in particular).`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.3.1",
    versionNumber: 54,
    date: "March 14, 2025",
    blurb:
      "A massive update to play logging, bringing support for non-players, multiple roles, multiple scenarios, a start player/team picker, group-posted play logs and more.",
    features: [
      `You can now set the Game Master, Teacher, or Judge for a play while logging a play.`,
      `For games where there are different role or scenario properties you may want to set, we now support setting all these details!`,
      `We now have a widget to randomly select a starting player/team. You can also set this manually.`,
      `When logging a play again, we now copy over more details (rulesets, roles, and scenarios).`,
      `You can now choose to post a play log to one of your groups to share your fun games!`,
      `We now keep the screen awake when on the play logging screen.`,
      `Virtual events will now only show when you are in a nearby time zone.`,
      `We have greatly improved how repeat events show up in the feed and how notifications are sent out to keep the most relevant events at the front.`,
      `Notifications for new events posted in your group now factor in your location.`,
    ],
    fixes: [
      `Fixed an edge case which could break some larger imports.`,
      `Fixed a bug when trying to filter by a specific game.`,
      `Fixed UI issues with events and event descriptions.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.2.2",
    versionNumber: 53,
    date: "February 11, 2025",
    blurb:
      "The web version of Aftergame has launched and is in early access! We also added the ability to change group URLs and added email settings.",
    features: [
      `The Aftergame web app has launched, you can load it from any browser at https://aftergame.app. It is still in early access and will have some missing features.`,
      `We now send new users a welcome email giving them a helpful launch point.`,
      `[Aftergame+] Group admins can now edit their group URL. This gives you a better URL to share.`,
      `New email settings to control when Aftergame can email you. We are starting off basic before we add more emails to better notify web users.`,
      `Added a share button to games and play logs allowing you to link them to friends.`,
    ],
    fixes: [
      `We now properly handle loading invalid event, group, and player links.`,
      `Fixed small UI issues with loading play logs.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.2.1",
    versionNumber: 52,
    date: "February 5, 2025",
    blurb:
      "This release brings notification settings and general notification improvements as well as many of the final pieces needed for the Aftergame web app.",
    features: [
      `Notification settings have been added, allowing you to fine-tune which notifications you receive both to your device and in-app.`,
      `We now show a badge on our app icon with a count of notifications for devices which support this.`,
      `[Android] We now separate our notifications into different channels so that you can change these permissions at the OS level. NOTE: this will take a few days to roll-out as our backend switches to using these new channels.`,
      `The creator of a play log can now delete the play log for everyone in it with a notification now sent.`,
      `Added a link to our help site from the settings screen.`,
    ],
    fixes: [
      `The unread notification count within the app is now cleared when you click the icon (without needing to mark each as read).`,
      `We now correct the unread notification count when viewing a notification from a push notification.`,
      `Fixed an issue where scheduled notifications were being shown before they were sent.`,
      `We no longer show groups you are invited to but not yet joined on your profile.`,
      `Better handle Discord users signing up without an Avatar.`,
      `[Android] Fixed an issue which didn't allow for scheduling of events more than 6 months in the future.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.1.4",
    versionNumber: 51,
    date: "January 23, 2025",
    blurb:
      "Added a new setting to override the app's theme and a lot of bug fixes while we work in the background on the upcoming web version of Aftergame! 🔜",
    features: [
      `Set whether the app should use the system default, light mode, or dark mode.`,
      `Added a confirmation step before deleting a post.`,
      `Added a confirmation step before rejecting a group join request.`,
      `We now always show which event a planned game is in (helpful when you open an event link).`,
    ],
    fixes: [
      `Fixed a bug which would sometimes block creating a post.`,
      `Fixed a bug that was recently introduced which didn't show the play duration.`,
      `Fixed issues with listed group information in the details screen.`,
      `Fixed the poll option textbox in dark mode and we now allow copying/pasting.`,
      `Fixed a bug which didn't show the selected scenario when logging a play.`,
      `We improved how we handle redirecting you to the right screen after signing in.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.1.2",
    versionNumber: 50,
    date: "January 15, 2025",
    blurb:
      "We've added the ability to feature group posts and require new members to get approved by admins. There has also been a lot behind the scenes work for our upcoming web version! 👀",
    features: [
      `Groups can now be set to a "Listed" visibility which sits between Public and Private. These groups are findable, but all content is hidden and new members are approved by admins.`,
      `Added a new "Request to join" flow for groups. This allows admins to approve or reject new group members.`,
      `Group admins can now pin posts to a featured section of groups to keep important information at the top .`,
      `Group admins can now edit any event or games posted in a group they manage.`,
    ],
    fixes: [
      `Quickly tapping an item will no longer open a page twice.`,
      `Events that were posted as a group will now show correctly in the feed.`,
      `Fixed an issue that broke editing a copy of an expansion.`,
      `Fixed issues with deleting play logs not properly removing them.`,
      `Fixed an issue which would mean the unread notification icon would not go away.`,
      `Fixed a bug causing errors when loading recent players.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.0.1",
    versionNumber: 49,
    date: "December 30, 2024",
    blurb: "Fixed some app crashes and the applied 'Where' filter on the events tab is now saved.",
    features: [`The distance filter and whether to show virtual events is now remembered between app sessions.`],
    fixes: [
      `Fixed some app crashes that could occur when loading the feed, groups, and group member lists.`,
      `We made it easier to remove selected players when creating play logs or inviting people to events and groups.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "2.0.0",
    versionNumber: 48,
    date: "December 21, 2024",
    blurb:
      "Aftergame 2.0 is here! We have tied all parts of the platform together in a brand new home screen, new group and event feeds, and you can now post photos and polls 📸📊",
    features: [
      `The new home screen adds a chronological feed of everything relevant to you in one place. See posts, events, planned games, and play logs all in one place!`,
      `You can now post polls! Select games or just type out your options and get people to vote!`,
      `You can now post photos to groups, events, or friends!`,
      `Posts now can be sent to friends as well as in groups or events.`,
      `Play logs can now have comment threads and be liked, great for when you post these to the group with photos!.`,
      `We now show when new games are planned at an event or within a group in the feed.`,
      `It's now easier to create posts and plan games straight from the home screen.`,
      `We have added quick access to your groups right from the home screen.`,
      `It's now very easy to create a play log right from a planned game within your feed with a single click!`,
      `We have given play logs a visual upgrade and also show when they were posted as part of an event or group.`,
      `New users will get an improved onboarding experience.`,
    ],
    fixes: [
      `Fixed a bug when importing games from BGG that were not in any lists.`,
      `We have continued with performance improvements throughout the app which should make more screens feel more snappy.`,
    ],
  },
  {
    version: "1.5.1",
    versionNumber: 47,
    date: "December 11, 2024",
    blurb:
      "Your new personal event calendar, performance improvements, and a lot of groundwork for our next major release.",
    features: [
      `You now have easy access to all your upcoming and past events right from the home screen.`,
      `Added a filter to exclude virtual events when browsing events.`,
    ],
    fixes: [
      `Improved the quality of photos and images uploaded to Aftergame.`,
      `We now wait until all images are uploaded before posting a play log.`,
      `We have made many performance optimisations throughout the app which should combine to make a noticeable impact.`,
    ],
  },
  {
    version: "1.5.0",
    versionNumber: 47,
    date: "November 25, 2024",
    blurb:
      "Plan games that are happening online, a new distance filter when finding local games, import game lists via spreadsheet, and many improvements throughout the app.",
    features: [
      `You can now choose whether a game or event is happening in person or virtually and add a link if the latter.`,
      `Locations can now be tagged with whether they are a private home, business, public space, or region.`,
      `Added an easy way to search for venues rather than manually typing in the address.`,
      `You can now filter events by distance from a location.`,
      `We now (finally) allow importing games into a specific list via a spreadsheet. For now, a BGG ID is required for each game.`,
      `We have greatly improved the UX of importing.`,
      `The collection/play toggles settings you chose are remembered when you next import.`,
      `Adding an event to your calendar now opens your default calendar app to give you more control.`,
      `Added the player count filter to the combined group lists.`,
      `Improved the "Play again" UX and now allow games to be planned from a play log.`,
    ],
    fixes: [
      `Recent locations are now ordered much more sensibly and more is loaded when you reach the end of the list.`,
      `Fixed an issue which allowed people to get invited to groups or events multiple times.`,
      `Fixed issues with imports not correctly updating the lists games were in.`,
      `Fixed issues with setting a game within an event to be group-visible.`,
      `Fixed an issue generating monthly repeat events.`,
      `You can now remove ticket links from an event as expected.`,
      `We should no longer consistently ask for notification permissions on iOS.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "1.4.1",
    versionNumber: 46,
    date: "November 6, 2024",
    blurb:
      "Edit all repeat events at once, post events that can only be seen by group members, and many important fixes.",
    features: [
      `Added the ability to edit all future events at once in a repeating event series.`,
      `Added 'Group' as a privacy setting for events, to only show the event to group members.`,
      `When creating 'official' posted events, you can now set yourself to not going.`,
    ],
    fixes: [
      `Fixed a crash that could occur in rare instances when loading a group.`,
      `Fixed up some privacy issues for publicly posted games within a private event.`,
      `Made privacy settings more obvious when posting games within a private event.`,
      `Is it now more obvious that you can import your collection when you have an empty profile.`,
      `We better handle current city information (previously it did not always pick up a city).`,
      `It stays on the same tab when performing multiple global searches.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "1.4.0",
    versionNumber: 45,
    date: "October 30, 2024",
    blurb:
      "Add group game lists, generate QR codes, see the combined collection of group members, a refresh of the group page and much more!",
    features: [
      `Groups have had a massive refresh, making common actions more accessible while allowing the page to grow with new and upcoming features.`,
      `Added the ability to add "official" group lists to let members know what's available to the group.`,
      `Easily browse the combined collections of all group members to see what everyone owns, has played, and wants to play!`,
      `Generate invite QR codes for both events and groups.`,
      `Added a way to search for groups on the groups page.`,
      `Event hosts can now control who is going to an event (including removing themselves as "Going")`,
      `Added a new filter when browsing planned games to not show games as part of a wider event.`,
    ],
    fixes: [
      `All pages now load in a full view to give more space and focus to the content.`,
      `Fixed group and event filters in global search.`,
      `Fixed a bug which would cut off the bottom of the textbox for longer comments.`,
      `You can now delete empty game lists.`,
      `It's now possible to re-invite players to a game or event.`,
      `Adding a game now keeps you in the game list for a better UX.`,
      `Fixed a bug with loading more games when sorted by newly added.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "1.3.7",
    versionNumber: 44,
    date: "October 16, 2024",
    blurb:
      "Early support for Play To Win (see changelog for details), discussion moderation, and more performance improvements.",
    features: [
      `We now have the ability to open up a form right from a QR code! This enables play to win, playtesting feedback, and much more. Contact hello@aftergame.co for more details.`,
      `Added the ability for group admins and event hosts to delete posts and comments`,
      `You can now report offensive posts / comments.`,
    ],
    fixes: [
      `You can now delete guest players even if they are attending events or members of groups.`,
      `When setting yourself as 'Not going' to an event, it will also free up any claimed seats for games at that event.`,
      `Fixed a bug which didn't always select expansions correctly in play logs.`,
      `We now load less data from our server, speeding up load times for many screens.`,
      `[Android] Removed some unnecessary app permissions.`,
      `[Android] Added a monochrome app icon to support theming.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "1.3.2",
    versionNumber: 43,
    date: "September 24, 2024",
    blurb: "Featured events, improvements to event schedules, plus some notification and performance improvements.",
    features: [
      `Featured events show off the biggest events happening in your area, making them easy to find.`,
      `We now scroll to the next up event in the event schedule, and show an indicator of where "now" is.`,
      `Added a notification in meetups for when someone is planning a new game.`,
    ],
    fixes: [
      `We now scroll to the comments section when you click into a comment notification.`,
      `The events tab and event schedules should have better performance.`,
      `Added a permission check for push notification when you view the notification screen.`,
      `Fixed event section header timezones.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "1.3.0",
    versionNumber: 42,
    date: "September 19, 2024",
    blurb:
      "Post game lists and play log results in discussions, the event schedule is rebuilt, sign up with Discord and much more!",
    features: [
      `Share more! Posts can now have game lists or play log results embedded in them.`,
      `You can now post discussions in events.`,
      `The event schedule has been rebuilt from the ground up to make for easier browsing at larger events.`,
      `You can now sign up to Aftergame with Discord.`,
      `Event hosts have the ability to block attendee created games and posts.`,
      `Events can now have multiple game lists attached to them.`,
    ],
    fixes: [
      `Fixed a bug where you could not change the acquired date for a game copy.`,
      `Fixed the date picker in dark mode.`,
      `Play log results should now load instantly.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "1.2.1",
    versionNumber: 41,
    date: "September 4, 2024",
    blurb:
      "Time zones, content ratings, better event permissions, and many more quality of life improvements for events in today's release.",
    features: [
      `We now support time zones for events. Set the time zone when creating an event, and all times will be shown in the correct time at the event.`,
      `You can now add a content rating to planned games to let potential players know the age suitability.`,
      `Game Masters and teachers can now edit the details for events they are assigned to, even if they are not the host.`,
      `Host and group admins can now edit any game on the schedule, even those created by attendees.`,
      `You can now view the event location in your device's map app as well as copy the address.`,
      `We now show the RPG game system being used in a planned game for an RPG.`,
    ],
    fixes: [
      `Fixed a bug with repeating events not taking into account daylight savings.`,
      `Fixed a bug which sometimes showed a public group as private.`,
      `Expansions are now excluded from your games list by default.`,
      `Fixed a bug which meant you couldn't remove the price paid from a game copy.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "1.2.0",
    versionNumber: 40,
    date: "August 28, 2024",
    blurb:
      "We have rebuilt how we store collections from the ground up, enabling many new features to manage your games.\n\nThere should be no changes to the games in your collection, but please email our support if you have issues.",
    features: [
      `We have streamlined the process for adding new games to your collection.`,
      `You can now add multiple copies of the same game.`,
      `You can now add more details to your game copies, like price, where you acquired it from and more. (not yet synced with BGG)`,
      `Filters have been added to the game sheet when logging a play or planning a game.`,
      `We better summarise and show all game copy and expansion details in a new collection section of game pages.`,
      `The profile screen and game list tiles have received some visual upgrades with more info shown.`,
      `Importing from BGG can now handle multiple copies in your game collection.`,
    ],
    fixes: [
      `Importing from BGG will now correctly update the lists your games are in.`,
      `Connecting an address to a location now works from the event screen.`,
      `The events and game schedule lists should now always show all events correctly.`,
      `Fixed a lot of bugs to do with loading game libraries and other players' collections.`,
      `We reduced how far you will see events when the "Near me" filter turned on.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "1.1.0",
    versionNumber: 39,
    date: "July 27, 2024",
    blurb:
      "Add scores on the fly with a new score calculator keyboard, log scores for each player in team-based games and many fixes.",
    features: [
      `Added a new keyboard to allow for easy addition, subtraction, and tabbing to the previous/next score.`,
      `We now save the input (e.g. "4+5-3+7") and output (e.g. "13") scores so you can come back to edit any part.`,
      `Team-based games can now have a per-team score, per-player score, neither, or both, to better allow logging for all team games.`,
      `Added your friendship status of players in group member and event attendee lists.`,
      `Added a new notification when new events are created within your group.`,
      `It is now more obvious when there are new group discussions.`,
      `Private groups now correctly show lock information if non-group members try accessing it.`,
    ],
    fixes: [
      `We no longer show duplicate players in the group member list.`,
      `Fixed bug where you were not selected by default when logging a play.`,
      `Fixed bug which did not select your default location when logging a play.`,
      `Fixed bugs with selecting roles & scenarios.`,
      `Fixed bugs with deleting teams from a play log.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "1.0.0",
    versionNumber: 38,
    date: "July 19, 2024",
    blurb:
      "MAJOR RELEASE! Today we launch groups. Join local communities or create your own public and private groups to share and plan events.",
    features: [
      `Groups are here! We have moved history into your profile and added a new groups tab.`,
      `Groups show all events, planned games, and member posts. Game lists, stats, shared history, and challenges are coming in the future!`,
      `Added the ability to create and customise your own groups, adding locations so that people in your group can plan or log games at the right place.`,
      `Added the ability to create posts. Currently only text, but soon you can attach images, play logs, and game lists.`,
      `Added the ability to like comments and posts.`,
      `You can now click on group names wherever you see them to go to the group page.`,
      `Made logging plays from a planned game easier to access.`,
    ],
    fixes: [
      `Fixed a bug in the event attendance bottom sheet where it would not scroll for small devices.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.9.12",
    versionNumber: 37,
    date: "July 13, 2024",
    blurb: "A whole bunch of bug fixes and you can now edit or delete your custom roles and scenarios.",
    features: [`Edit and delete any play log property options (like roles, scenarios, etc) you created in the past.`],
    fixes: [
      `Fixed an issue where locations couldn't be selected.`,
      `Scores no longer reset when you add more players to a play log.`,
      `Fixed an issue with the play log timer not correctly recording the time when the app is in the background.`,
      `You will no longer receive comment notifications for events you are no longer going to.`,
      `Blocked the ability to edit locations you did not create.`,
      `Recent searches will no longer show partial queries.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.9.10",
    versionNumber: 36,
    date: "July 7, 2024",
    blurb: "Add photos to play logs, get notified for games and events you've joined, and more general improvements.",
    features: [
      `You can now add photos to play logs.`,
      `Play log history now shows photos, along with new filters to find play logs with or without attached images.`,
      `Get notified when events you're going to are happening soon (15 mins before for games at an event and the day before for events).`,
      `Added a handy list of your upcoming events to the home screen.`,
      `Added the ability to edit / remove game lists.`,
      `Made editing / removing locations a lot easier.`,
    ],
    fixes: [
      `A bunch of fixes for event game schedules.`,
      `Fixed the 'Seats available' filter.`,
      `A bunch of fixes and improvements to share images.`,
      `[Android] Fixed incorrectly positioned dropdown menus.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.9.8",
    versionNumber: 35,
    date: "June 24, 2024",
    blurb: "We have added search additions and improvements throughout the app.",
    features: [
      `Added the ability to search for events from the main search bar.`,
      `You can now search the schedule at an event.`,
      `Search for games within any list (including the game library at an event).`,
      `Browse and search all game expansions.`,
      `Your games now show up as the first results when searching for games or expansions.`,
      `Your friends now show up as the first results when searching for players.`,
      `We now show a banner for unpublished games.`,
      `UI Improvements to event guests list.`,
    ],
    fixes: [
      `BGG username is remembered when importing.`,
      `Profile bios can now be 2,000 characters long.`,
      `[Android] Potential fix for the bottom bar showing up as white while in dark mode.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.9.7",
    versionNumber: 34,
    date: "June 14, 2024",
    blurb: "More features and improvements for events, including recurring events, discussions in meetups, and more.",
    features: [
      `[Aftergame+] Copy and paste no longer, you can now create events which repeat daily, weekly, fortnightly, or monthly.`,
      `Meetups now have discussions, so you can chat outside of a planned game.`,
      `You can now view the guest list in any event.`,
      `We now show who invited you to an event.`,
      `[Behind the scenes] We have made good progress on the new groups feature - watch this space!`,
    ],
    fixes: [
      `Fixed a bug when logging a play from a planned game where there were guests.`,
      `When using "Play again" on a team game, we now correctly pre-fill teams.`,
      `Fixed a bug which blocked the ability to remove an event banner.`,
      `Improved the reliability of uploading images.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.9.3",
    versionNumber: 33,
    date: "May 29, 2024",
    blurb:
      "A large batch of improvement to events, some handy new filters, default locations, and more in this large quality of life update.",
    features: [
      `Added an easy way to see which games have available seats at an event.`,
      `Added a quick way to view which games you are attending at an event.`,
      `You can now set a location to use by default when logging plays or creating events.`,
      `[Aftergame+] You are now able to add a Games library to an event for guests to browse.`,
      `Added a filter when viewing play history or planned games to show results for a specific game.`,
      `Added a search box when selecting roles / scenarios while logging a play.`,
    ],
    fixes: [
      `Fixed a bug where changing your response wouldn't update.`,
      `Fixed a bug which would cause editing meetups to break in some instances.`,
      `Fixed a bug where your group options weren't showing in the "Posting as" dropdown.`,
      `Fixed a bug which showed "undefined" when we were missing game info.`,
      `Fixed an issue where public games could be seen from within a private event.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.9.2",
    versionNumber: 32,
    date: "May 9, 2024",
    blurb:
      "A whole bunch of additions and improvements to events (including assigning game masters or teachers) and a fast new way to log a play again!",
    features: [
      `We have improved the events list, adding in guest numbers and better showing all the information at a glance.`,
      `When planning a game, you can now assign a game master or teacher to let everyone know who will be running the session.`,
      `You can now mark yourself as attending and invite friends to conventions and meetups.`,
      `It's now possible for event hosts to set a guest limit for the event.`,
      `When viewing a play log, or directly after logging a play, there's now a handy "Play again" button which pre-fills all info.`,
      `Event hosts can now remove themselves from events.`,
      `You can now unfriend people 💔`,
    ],
    fixes: [
      `Fixed the Suitable age filter to make it more obvious.`,
      `Fixed some bugs when merging players.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.9.1",
    versionNumber: 31,
    date: "April 29, 2024",
    blurb:
      "Share the games you have been playing with new shareable images, some new filters, and some new badges for Aftergame+ subscribers.",
    features: [
      `Shareable images allow you to create a grid of the games you have been playing, along with many filters and options to share exactly what you want.`,
      `Added the ability to filter our expansions, reimplementations, and compilations in your played games list.`,
      `Aftergame+ subscribers now have a badge which shows that they are supporting our development - stay tuned for more badges for those who are early bird supporters.`,
    ],
    fixes: [`Fixed a small issue with icon colours.`, `Various other fixes and performance improvements.`],
  },
  {
    version: "0.9.0",
    versionNumber: 30,
    date: "April 25, 2024",
    blurb:
      "Creating meetups is now open to everyone, a complete rebuild of search and filters, the ability to sort your games, our new premium subscription (Aftergame+) and much more!",
    features: [
      `Everyone now has the ability to create events and meetups! This is still early access, be sure to send us feedback.`,
      `The events tab has been completely rebuilt to better show local events and give you better ways to find events.`,
      `Search and filtering has been built from the ground up to enable a better user experience and more filters`,
      `Added game filters for the game domain, which games you have (or have not) played in a time period, expansions, reimplementation, and compilations.`,
      `Added event filters for when, where, the duration, and many options to filter planned games.`,
      `Added play log filters for time period breakdowns, where you played, and the result.`,
      `Quickly cycle through time periods (weekly, monthly, yearly) when viewing play logs or games played.`,
      `Sort your games list by alphabetical order, most played, recently played, and newly added.`,
      `Aftergame+ has launched! We have been building Aftergame for free and with no ads. This will always be true, but to help support ongoing development, we have launched a new subscription which will give access to more features.`,
      `We have made it easier to import or request new games through pressing the "Add games" button.`,
    ],
    fixes: [
      `Fixed issues with editing event dates.`,
      `Improved the UX of adding/changing/removing your current city.`,
      `Improved the welcome screen on the home tab for new users.`,
      `We now correctly show which account provider you used to sign in with.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.8.13",
    versionNumber: 29,
    date: "April 5, 2024",
    blurb: "We have made small fixes to events and added the ability to delete previous searches.",
    features: [`Added the ability to delete previous searches.`],
    fixes: [
      `Fixed a crash in some edge cases when trying to change the date and time of an event.`,
      `Fixed an issue when editing an event where it would revert to the game's name.`,
      `Fixed an issue where some ticket links were showing as an invalid URL.`,
      `We now correctly link to the event games planned when viewing an event's game library.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.8.12",
    versionNumber: 28,
    date: "April 2, 2024",
    blurb:
      "We have improved the design and options when creating events and added better information when play logs are updated.",
    features: [
      `We have done a big revamp of the design for all form elements.`,
      `You can now change the event name of a planned game`,
      `We now show when a play log was created and edited and who did it.`,
      `A notification is sent whenever a play log you're in was edited by one of the other players.`,
      `A link for where to buy tickets can be added to events.`,
      `The end time is now shown for planned games.`,
    ],
    fixes: [`Various other fixes and performance improvements.`],
  },
  {
    version: "0.8.9",
    versionNumber: 27,
    date: "March 21, 2024",
    blurb: "We added a new game timer to track the time when logging a play and many improvements to events.",
    features: [
      `When logging a play, you can now start / pause a timer to track the duration. You can still manually edit the time.`,
      `You can now specify how long a planned game should last (overriding what's written on the box).`,
      `When planning a game, you can now require that players have read the rules.`,
      `The game library for events has had visual improvements.`,
      `Simplified the UI when planning a game.`,
    ],
    fixes: [
      `Speed improvements when logging a play from the game screen.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.8.8",
    versionNumber: 26,
    date: "March 9, 2024",
    blurb: "We have fixed some annoying bugs with bottom sheets not showing / closing properly.",
    features: [],
    fixes: [
      `Fixed issues some annoying bugs with bottom sheets not showing / closing properly.`,
      `Improved changing your current city UI.`,
      `Now correctly show a game creator if they were both an artist and designer.`,
      `Various other fixes and performance improvements.`,
    ],
  },
  {
    version: "0.8.5",
    versionNumber: 25,
    date: "March 5, 2024",
    blurb:
      "We've added a bunch of improvements for events like claiming multiple seats and have now added in RPG systems.",
    features: [
      `Add guests when claiming a seat at a scheduled game.`,
      `Set whether a teacher is wanted when planning a game.`,
      `RPG systems, settings, mechanics, and themes have been added for all tabletop RGPs.`,
      `A link for buying tickets has been added for relevant events.`,
      `Links within event descriptions, discussion messages, and play log notes can now be clicked.`,
      `New messages now automatically appear when viewing an event.`,
    ],
    fixes: [
      `Fixed some UI issues with event discussions.`,
      `Fixed some UI issues in the planned games list.`,
      `Various other fixes and performance improvements.`,
    ],
  },
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
                href="https://www.facebook.com/AftergameApp" 
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
                className="flex align-middle justify-center w-auto h-9 p-[9px] text-gray-500 hover:text-discord-blurple hover:bg-gray-200 rounded-lg"
              >
                <DiscordLogo />
                <p className="text-lg ml-2 leading-tight">Discord</p>
              </Link>
              <Link 
                href="https://www.instagram.com/aftergameapp" 
                target='_blank' 
                aria-label="Instagram" 
                className="flex align-middle justify-center w-auto h-9 pl-0.5 pr-2 py-0.5 text-gray-500 hover:text-instagram-pink hover:bg-gray-200 rounded-lg"
              >
                <InstagramLogo />
                <p className="text-lg ml-0.5 mt-1.5 leading-tight">Instagram</p>
              </Link>
              <Link 
                href="https://bsky.app/profile/aftergame.app" 
                target='_blank' 
                aria-label="Bluesky" 
                className="flex align-middle justify-center w-auto h-9 p-2 text-gray-500 hover:text-bluesky-blue hover:bg-gray-200 rounded-lg"
              >
                <BlueksyLogo />
                <p className="text-lg ml-2 leading-tight">Bluesky</p>
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
