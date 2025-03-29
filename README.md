# node-mommy

Mommy’s here to support you when you're running Node~ ❤️  
Let node-mommy brighten your logs and error messages – because mommy knows how amazing you are~ 💞

---

## Installation

Install node-mommy with npm:

```bash
npm install node-mommy
```

Then, in your application, import and activate it:

```js
const mommy = require('node-mommy');
```

From now on, all your `console.log` and `console.error` calls will be replaced with adorable messages from mommy!

---

## Usage

Once node-mommy is required, it intercepts all console messages and swaps them out with heartwarming messages. For example:

**Before:**

```js
console.log("Processing your data...");
console.error("An error occurred!");
```

**After requiring node-mommy, you might see messages like:**

- "Processing your data...
  mommy knows you're doing amazing, little girl~ ❤️"
- "An error occurred!
  Don't worry, mommy believes in you even when things go wrong!"

Simply run your Node.js application as you normally would, and let node-mommy do the rest!

---

## Configuration

Mommy personalizes her messages using the following environment variables. Each variable requires a list (`["option1, option2"]`), and mommy will randomly select one for each message:

- **NODE_MOMMY_LITTLE**  
  What mommy should call you.  
  _Default: "girl"_

- **NODE_MOMMY_PRONOUNS**  
  Which pronouns mommy uses for herself.  
  _Default: "her"_

- **NODE_MOMMY_ROLES**  
  The role mommy will have.  
  _Default: "mommy"_

- **NODE_MOMMY_EMOTES**  
  The emotes mommy will decorate her messages with.  
  _Default: "❤️/💖/💗/💓/💞"_

- **NODE_MOMMY_MOODS**  
  The set of responses mommy can use (possible values include "chill" or "ominous").  
  _Default: "chill"_

Mommy also supports additional variables for controlling the frequency of her messages:

- **NODE_MOMMYS_ATTENTION**  
  The number of `console.log` messages that can pass before mommy sends another supportive message.  
  _Default: 1_

- **NODE_MOMMYS_PATIENCE**  
  The number of `console.error` messages that can pass before mommy chimes in.  
  _Default: 1_

---

## Fallback to cargo-mommy Settings

If you have [cargo-mommy](https://github.com/Gankra/cargo-mommy) installed and its environment variables are set, node-mommy will use those configurations when the corresponding NODE_MOMMY variables are not defined. For example, if `NODE_MOMMY_LITTLE` isn't set but `CARGO_MOMMYS_LITTLE` is, then mommy will call you the value set in `CARGO_MOMMYS_LITTLE`.

---

## Licensing

node-mommy is licensed under the GNU General Public License version 3 (GPLv3). Mommy loves freedom, and so do we~ ❤️

---

## Have Fun!

Let node-mommy sprinkle your logs with love and support – because you deserve nothing less than all the care in the world!
