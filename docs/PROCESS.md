# Process Reflection – Dark Mode Toggle

For this assignment, I built a dark mode toggle for my React app that saves the user’s theme preference in localStorage. When the user switches to dark mode, the app updates immediately and stays in that mode even after refreshing the page or reopening the tab. The feature connects a custom hook, state management, and CSS variables to control the theme.

At first, micro-iteration felt slower than I’m used to because I normally try to implement everything in one big prompt. It was slightly frustrating having to stop after each small step, but I realized it actually made debugging easier. Testing each piece separately helped me understand how the hook, useEffect, and the HTML class were all connected instead of just trusting the AI to handle everything at once.

During self-review, Claude pointed out improvements like making sure the useEffect dependency array was correct and confirming that localStorage was read before applying the theme class. That helped prevent potential issues ` where the theme might flicker or not sync properly on refresh.

Overall, using Claude in local mode was helpful because I could see exact file changes and stay in control of each step. Even though micro-iteration felt slower, it made the process more structured and reduced mistakes compared to writing one large prompt.