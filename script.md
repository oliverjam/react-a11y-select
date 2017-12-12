My name is Oli and I've been working as a frontend dev at Ticketmaster for about
six months now.

This talk came about after I gave a basic introduction to accessibility to the
latest cohort at my bootcamp, F&C

I assumed, well hoped, that most people here would already be sold on why a11y
is important, and maybe some of the basics.

So instead I'm going to give a quick overview of a recent experience I had
building a custom select. We were given designs

In case you hadn't guessed from the title, it didn't go super well. I'll spoil
the ending now and tell you that you should avoid building custom selects.
Apologies if there are any designers in the room, but if a designer comes to you
with a beautiful looking dropdown like this, tell them no. Lie and say it's
impossible if you have to.

This isn't going to be a tutorial—more of an insight into the process of
considering accessibility whilst you're building components like this, and

So I didn't have much of an idea of how to start building this component. I did
a bit of research and found surprisingly little online. Most of the focus seems
to be on more complex components like autocompletes (or maybe everyone else was
smart enough to avoid doing this).

I started by looking at a native HTML select, and tried to reproduce its
behaviour. I needed to create a button that triggered a popup menu, ensure it
could be opened and navigated with only a keyboard, and was at least as usable
with a screenreader.

My first discovery was role="listbox". ARIA roles let divs roleplay as something
more interesting. "The listbox role is used to identify an element that creates
a list from which a user may select one or more items". Each child should have a
role of "option".

I set out to build a proof-of-concept with my initial idea—focusing each child
option directly as the user navigated the list.

demo

This works okay, but managing focus is always a bit annoying, especially in
React where you need to maintain refs to each DOM node. We ran into some issues
where React's asynchronous state changes meant that our focus got out of sync.
We also had some non-standard requirement for re-usability—ideally this select
would be able to take arbitrary children and magically work (without having to
worry about getting a ref to each underlying DOM node to focus).

I went back to research and discovered aria-activedescendant. There isn't a lot
of documentation about this, but W3 says "The aria-activedescendant property
provides an alternative method of managing focus for interactive elements". It's
for when you don't want to move focus from the parent, but do need to tell
assistive technology which child is 'active'.

This was perfect! All I had to do was update a single attribute on the "listbox"
parent with the ID of the currently active child and everything would magically
take care of itself. We were even already keeping track of the active child in
React, so this was a one line solution.

Unfortunately... this worked perfectly in Safari with Voiceover, but completely
failed in Chrome. The attribute was being updated correctly but Voiceover just
wasn't reading anything out. There are open bugs about this but it doesn't seem
to be fixed yet. https://bugs.chromium.org/p/chromium/issues/detail?id=666049

A solution that doesn't work in Chrome is no solution at all... I decided to
take a look at how third party libraries were handling this. Kent C. Dodd's
library Downshift had just been released by Paypal (shoutout to that, it's
amazing by the way). I noticed Downshift was using a live region to announce
custom messages, which seemed like a cool solution. It gives us complete control
over the aural UI, just like we have complete control over the visual UI.

I added a div with the correct live region attributes and updated this to
describe the current state of the listbox whenever anything changed. This works
nicely in all browsers and allows us to provide more information to screenreader
users.

The downside is that it breaks standard affordances a user might expect. This is
the equivalent of completely changing the visual UI for a common element—it
makes it distracting and difficult to use. You are now responsible for ensuring
that the user-experience is great, rather than relying on the combined
experience of the W3, browser vendors and assistive technology vendors.

We also realised that we would have to maintain translations of all the "aural
UI" text for the 17 different markets we operate in to ensure that assistive
tech users weren't stuck listening to English...

So that's it. If you're feeling overwhelmed, well that was kind of my goal. I'm
not trying to make out that accessibility is some super difficult thing that we
should just avoid, but I want to demonstrate how much the browser does for us.
The first rule of accessibility should be not to reinvent the wheel (or
browser).

In this case all we really gained from a week of research and coding and testing
was a slightly nicer looking select, about 240 lines of code to maintain and
something functionally slightly worse. I don't think that's a good trade-off.

Bonus bug! Just in case we needed another reason to drop the custom select, we
discovered a bug in Chrome where programmatically focusing an element inside a
position sticky container scrolls the viewport back to the starting position of
the focused element...
