### Celestial (v1.0.094) - Released!
Celestial Update has arrived! Well, took little too long due to me being busy nowadays :(<br><br>

> **What's new? —**
- Added Permission button in Pause screen, only shows up when there's active scoreboard in the playerlist!
- Optimized Settings screen, reduced by 20% loading time. However, may stutter in some cases.
- Added new configurations for optimized settings and playerlist tab.
- New UI designs that follows up modern style.
- Improved several elements and better optimizations.
- All experiment features are now out of the wild!
- Added Animations as a configuration.
- Pause screen got an upgrade!
  - They're now animated and looks like old Collapse-UI!
  - There will be a text that shows whenever if the game is paused or not.
  - Few changes.
- UI's structure has been changed.
- Added 2 new configuration on about screen.
- Replaced the UI default theme to Magenta.
- Replaced "Magenta (Collapse-UI Alt)" theme to "Legacy Default" with old theme.

> **Changes —**
- Supports `1.21.110 - Copper Age` Update! - This means that settings and gameplay are also updated, which. `1.21.110`+ is the only supported version
- Removed a `disable_toggle_filter_profanity` variable due to being a existance for everyone.
- Changed certain offset layout on pause screen.
- Player Profile button on main menu and pause screen will now show a hovered or pressed animation.
  - Do note that: Text and stuff does not change color atm.
- Removed "Recommended Texture Limit" setting due to this thing no longer exist.
- All of UI files will now be .arxui format.
- Optimized Settings screen, reduced by 20% loading time. However, may stutter in some cases.
- By default, **Playerlist tab will be disabled due to people request.** - However, can be re-enabled via configuration!
- Better optimizations and reduced ton of codes.
- Buttons just got full rewrite, synced with legacy's button structure. therefore making both legacy (not animated) and current (animated) a same thing. I've also enchanced the button's animations too. but this comes a cost with certain elements being rewrote for this change.
- Controller changes:
  - The support of it has been extended due to button rewrite.
  - Anything that makes button goes out of bound should now no longer exist, but this comes a cost with visuals being degraded in some screens.
- Button's bubble text just got full rewrite too, this includes a new fading in and out animation and moving in expo easing.
- The rounded brackets in configuration menu from "About UI" are now gray instead of full white.
- All buttons with text bubbles has been updated.
- Animation adjustments and ported over to animation file.
- Due to several new workflow going on that i'm now using, All Collapse-UI's folders, files and assets will be moved to the new `Collapse-UI > '.arx-assets'` folder. **However, config customization's assets will remains unchanged for better accessibly.**
- Due to Ore-UI changes, certain screens like **Play screen (World creation screen), Death screen and IP (Add a new server) screen** will be removed from the pack.
- All theme should follow up the designed version.
- Chat screen's features such as Autocorrection, History message and Command selectors are removed on Controller and Keyboard/Mouse due to several issues, at the same time. these features were designed for the mobile users as Controller/K&M already have these features, so they're unaffected in this change.
- Hud statistics (Coords and Time played) will be temporarliy placed on top-right instead of bottom-right due to controller issue.
- Texture redraw to buttons and sliders.
- Settings toggles that has been toggled and dropdown toggles will have their background as accessibility.
- All icons are now white instead of gray-ish due to theme related.
- Scrolling backgrounds in the start button (will not be shown in this update due to "Classic Menu") should be corrected in terms of animations.

> **Bug fixes —**
- Fixed crashing issue when pressing 'nobody' scoreboard player button.
- Fixed Play button from start menu having button texture when it wasn't supposed to be, this causes certain devices able to see the button texture on image border.
- Fixed Video settings section related that has a missing texts or strings.
- Fixed certain issues with settings not centered properly.
- Fixed several issues on chat screen where using a shortcut would make button flashing.
- Fixed some crashes and performance improvements.