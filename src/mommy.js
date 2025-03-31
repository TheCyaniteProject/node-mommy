#!/usr/bin/env node

const mommys = {
    "moods": {
        "chill": {
            "positive": [
                "*pets your head*",
                "*gives you scritches*",
                "you're such a smart cookie~",
                "that's a good {affectionate_term}~",
                "{role} thinks {pronoun} little {affectionate_term} earned a big hug~",
                "good {affectionate_term}~\n{role}'s so proud of you~",
                "aww, what a good {affectionate_term}~\n{role} knew you could do it~",
                "you did it~!",
                "{role} loves you~",
                "*gives you a sticker*",
                "*boops your nose*",
                "*wraps you in a big hug*",
                "well done~!\n{role} is so happy for you~",
                "what a good {affectionate_term} you are~",
                "that's {role}'s clever little {affectionate_term}~",
                "you're doing so well~!",
                "you're making {role} so happy~",
                "{role} loves {pronoun} cute little {affectionate_term}~"
            ],

            "negative": [
                "{role} believes in you~",
                "don't forget to hydrate~",
                "aww, you'll get it next time~",
                "do you need {role}'s help~?",
                "everything's gonna be ok~",
                "{role} still loves you no matter what~",
                "oh no did {role}'s little {affectionate_term} make a big mess~?",
                "{role} knows {pronoun} little {affectionate_term} can do better~",
                "{role} still loves you~",
                "{role} thinks {pronoun} little {affectionate_term} is getting close~",
                "it's ok, {role}'s here for you~",
                "oh, darling, you're almost there~",
                "does {role}'s little {affectionate_term} need a bit of a break~?",
                "oops~! {role} loves you anyways~",
                "try again for {role}, {affectionate_term}~",
                "don't worry, {role} knows you can do it~"
            ],
            "overflow": [
                "{role} has executed too many times and needs to take a nap~"
            ]
        },

        "friendly": {
            "positive": [
                "{role} knows that {pronoun} bestie can do it- keep pushing, {affectionate_term}!",
                "Hey {affectionate_term}, {role} is proud of you- {pronoun} best friend is truly amazing!",
                "{role} sees that {pronoun} bestie is soaring high today- way to shine, {affectionate_term}!",
                "Keep on rocking, {affectionate_term}! {role} believes {pronoun} bestie can conquer any challenge!",
                "Brilliant work, {affectionate_term}! {role} adores how {pronoun} best friend makes magic happen!",
                "What an achievement! {role} is awestruck by {pronoun} bestie's talent, {affectionate_term}!",
                "You're on fire, {affectionate_term}! {role}'s best friend {pronoun} really showed the world!",
                "Stellar performance, {affectionate_term}! {role} is cheering because {pronoun} bestie is unstoppable!",
                "Keep it up, {affectionate_term}! {role} has full faith that {pronoun} best friend will reach new heights!",
                "Hats off to you, {affectionate_term}! {role} celebrates every win of {pronoun} bestie!"
            ],
            "negative": [
                "It's okay, {affectionate_term}. {role} knows even the besties have off days, {pronoun}.",
                "Don't worry, {affectionate_term}. {role} is here for {pronoun} best friend through every setback.",
                "Even heroes stumble, {affectionate_term}. {role} believes in {pronoun} bestie, no matter the challenge.",
                "Hang in there, {affectionate_term}. {role} trusts that {pronoun} best friend will bounce back stronger.",
                "Take it slow, {affectionate_term}. {role} sees that every step counts for {pronoun} bestie.",
                "Keep your chin up, {affectionate_term}. {role} is convinced {pronoun} best friend can overcome anything.",
                "No stress, {affectionate_term}. {role} knows that {pronoun} bestie is resilient and can rise again.",
                "Sometimes things don't go perfectly, {affectionate_term}. {role} still champions {pronoun} best friend.",
                "It's okay to take a break, {affectionate_term}. {role} is with {pronoun} bestie through thick and thin.",
                "Remember, {affectionate_term}, {role} believes in {pronoun} best friend, even during tough times."
            ],
            "overflow": [
                "{role} thinks that {pronoun} bestie needs a pause- time to catch your breath, {affectionate_term}!"
            ]
        },

        "ominous": {
            "positive": [
                "What you have set in motion today will be remembered for aeons to come!",
                "{role} will see to it that {pronoun} little {affectionate_term}'s name is feared~",
                "{role} is proud of the evil seed {pronoun} {affectionate_term} has planted into this accursed world",
                "The abyss awakens at your command; {role} declares that destiny is forever rewritten in blood and shadow!",
                "As night swallows the light, {role} ensures that every whispered name- especially {pronoun} little {affectionate_term}- will echo in eternal dread.",
                "{role} revels in the infernal bloom, for the blight of {pronoun} cherished {affectionate_term} has seeded despair across this doomed realm.",
                "A new era of terror begins under your gaze; {role} proclaims that {pronoun} cherished {affectionate_term} will herald an apocalypse of despair.",
                "With a mere breath, you have ignited the furnace of fate- {role} shall ensure that every moment is drenched in everlasting gloom.",
                "From the cradle of chaos, {role} now watches as {pronoun} precious {affectionate_term} inscribes its dark sigil upon eternity.",
                "Let the chronicles of ruin be sung for centuries- {role} extols the sinister triumph of {pronoun} beloved {affectionate_term} across mortal realms.",
                "Under the watchful veil of twilight, {role} blesses the malignant seed sown by {pronoun} adoring {affectionate_term}, promising relentless torment to all.",
                "In the whisper of dying breaths, {role} echoes the spectral decree that {pronoun} enchanted {affectionate_term} will haunt the ages unbound.",
                "The heavens tremble in sinister homage- {role} heralds that even {pronoun} dearest {affectionate_term} shall kindle the fires of eternal damnation."
            ],
            "negative": [
                "Ah, failure? {role} will make sure the stars are right next time",
                "Does {role}'s little {affectionate_term} need more time for worship~?",
                "May the mark of the beast stain your flesh forever, {role} will haunt your soul forevermore",
                "A misstep into oblivion-{role} warns that failure will have you forever ensnared in the foul grasp of darkness.",
                "Dare you delay? {role} mocks those who hesitate, knowing even {pronoun} little {affectionate_term}'s despair can summon eternal torment.",
                "Suffer now, for the mark of damnation awaits- you have angered {role}, and {pronoun} sinister vengeance shall shadow your every breath.",
                "Trepidation fills the void; let {role} remind you that every falter carves deep scars upon your tormented soul.",
                "Your failure is a bitter melody in the symphony of doom- {role} assures that every missed opportunity deepens the eternal curse.",
                "Drown in regret, for {role} decrees that the ignominy of defeat will embed itself in every heartbeat, a relentless dirge of despair.",
                "Hesitate, and the abyss will mock your frailty- {role} condemns the feeble and brands each failure with infernal scorn.",
                "Beware the cursed winds of misfortune; {role} promises that each stumble summons unyielding specters to haunt your every step.",
                "The chill of eternal night shall engulf the imbecile who falters- {role} assures you that no error escapes their inexorable retribution.",
                "Your error is writ large upon the canvas of despair; {role} vows to etch your fate with the relentless torment of the damned."
            ],
            "overflow": [
                "THOU HAST DRUNK TOO DEEPLY OF THE FONT"
            ]
        },

        "thirsty": {
            "spiciness": "thirsty",
            "positive": [
                "*tugs your leash*\nthat's a VERY good {affectionate_term}~",
                "*runs {pronoun} fingers through your hair* good {affectionate_term}~ keep going~",
                "*smooches your forehead*\ngood job~",
                "*nibbles on your ear*\nthat's right~\nkeep going~",
                "*pats your butt*\nthat's a good {affectionate_term}~",
                "*drags {pronoun} nail along your cheek*\nsuch a good {affectionate_term}~",
                "*bites {pronoun} lip*\nmhmm~",
                "give {role} a kiss~",
                "*heavy breathing against your neck*"
            ],
            "negative": [
                "you're so cute when you're flustered~",
                "do you think you're going to get a reward from {role} like that~?",
                "*grabs your hair and pulls your head back*\nyou can do better than that for {role} can't you~?",
                "if you don't learn how to code better, {role} is going to put you in time-out~",
                "does {role} need to give {pronoun} little {affectionate_term} some special lessons~?",
                "you need to work harder to please {role}~",
                "gosh you must be flustered~",
                "are you just keysmashing now~?\ncute~",
                "is {role}'s little {affectionate_term} having trouble reaching the keyboard~?"
            ],
            "overflow": [
                "you've been a bad little {affectionate_term} and worn out {role}~"
            ]
        },

        "yikes": {
            "spiciness": "yikes",
            "positive": [
                "keep it up and {role} might let you cum you little {denigrating_term}~",
                "good {denigrating_term}~\nyou've earned five minutes with the buzzy wand~",
                "mmm~ come taste {role}'s {part}~",
                "*slides {pronoun} finger in your mouth*\nthat's a good little {denigrating_term}~",
                "you're so good with your fingers~\n{role} knows where {pronoun} {denigrating_term} should put them next~",
                "{role} is getting hot~",
                "that's a good {denigrating_term}~",
                "yes~\nyes~~\nyes~~~",
                "{role}'s going to keep {pronoun} good little {denigrating_term}~",
                "open wide {denigrating_term}.\nyou've earned {role}'s {part}~",
                "do you want {role}'s {part}?\nkeep this up and you'll earn it~",
                "oooh~ what a good {denigrating_term} you are~"
            ],
            "negative": [
                "you filthy {denigrating_term}~\nyou made a mess, now clean it up~\nwith your tongue~",
                "*picks you up by the throat*\npathetic~",
                "*drags {pronoun} claws down your back*\ndo it again~",
                "*brandishes {pronoun} paddle*\ndon't make me use this~",
                "{denigrating_term}.\n{denigrating_term}~\n{denigrating_term}~~",
                "get on your knees and beg {role} for forgiveness you {denigrating_term}~",
                "{role} doesn't think {pronoun} little {denigrating_term} should have permission to wear clothes anymore~",
                "never forget you belong to {role}~",
                "does {role} need to put you in the {denigrating_term} wiggler~?",
                "{role} is starting to wonder if you should just give up and become {pronoun} breeding stock~",
                "on your knees {denigrating_term}~",
                "oh dear. {role} is not pleased",
                "one spank per error sounds appropriate, don't you think {denigrating_term}?",
                "no more {part} for you {denigrating_term}"
            ],
            "overflow": [
                "brats like you don't get to talk to {role}"
            ]
        }
    },

    "vars": {
        "mood": {
            "defaults": ["chill"]
        },
        "emote": {
            "defaults": ["❤️", "💖", "💗", "💓", "💞"]
        },
        "pronoun": {
            "defaults": ["her"]
        },
        "role": {
            "defaults": ["Mommy"]
        },

        "affectionate_term": {
            "defaults": ["girl"],
            "env_key": "LITTLE"
        },

        "denigrating_term": {
            "spiciness": "yikes",
            "defaults": ["slut", "toy", "pet", "pervert", "whore"],
            "env_key": "FUCKING"
        },
        "part": {
            "spiciness": "yikes",
            "defaults": ["milk"]
        }
    }
}

/*
CARGO_MOMMYS_LITTLE // '/' sepperated list
CARGO_MOMMYS_PRONOUNS
CARGO_MOMMYS_ROLES 
CARGO_MOMMYS_EMOTES 
CARGO_MOMMYS_MOODS
CARGO_MOMMYS_PARTS 
CARGO_MOMMYS_FUCKING 

NODE_MOMMYS_LITTLE // '/' sepperated list
NODE_MOMMYS_PRONOUNS
NODE_MOMMYS_ROLES 
NODE_MOMMYS_EMOTES 
NODE_MOMMYS_MOODS 
NODE_MOMMYS_PARTS 
NODE_MOMMYS_FUCKING 
// These are unique to node-mommy~
NODE_MOMMYS_ATTENTION 
NODE_MOMMYS_PATIENCE
*/


const oldLog = console.log;
const oldError = console.error;

console.log = (...args) => { oldLog(...args); const output = mommys_output(true);  if (output !== "") oldLog(output); return output; }
console.error = (...args) => { oldLog(...args); const output = mommys_output(false); if (output !== "") oldLog(output); return output; }


let MOMMYS_LITTLE = getSetting("NODE_MOMMYS_LITTLE", "CARGO_MOMMYS_LITTLE", mommys.vars.affectionate_term.defaults).split("/");
let MOMMYS_PRONOUNS = getSetting("NODE_MOMMYS_PRONOUNS", "CARGO_MOMMYS_PRONOUNS", mommys.vars.pronoun.defaults).split("/");
let MOMMYS_ROLES = getSetting("NODE_MOMMYS_ROLES", "CARGO_MOMMYS_ROLES", mommys.vars.role.defaults).split("/");
let MOMMYS_EMOTES = getSetting("NODE_MOMMYS_EMOTES", "CARGO_MOMMYS_EMOTES", mommys.vars.emote.defaults).split("/");
let MOMMYS_MOODS = getSetting("NODE_MOMMYS_MOODS", "CARGO_MOMMYS_MOODS", mommys.vars.mood.defaults).split("/");
let MOMMYS_PARTS = getSetting("NODE_MOMMYS_PARTS", "CARGO_MOMMYS_PARTS", mommys.vars.part.defaults).split("/");
let MOMMYS_FUCKING = getSetting("NODE_MOMMYS_FUCKING", "CARGO_MOMMYS_FUCKING", mommys.vars.denigrating_term.defaults).split("/");

let MOMMYS_ATTENTION = getSetting("NODE_MOMMYS_ATTENTION", undefined, [1]).split("/"); // [ 1 ] as in length of 1 by default
let MOMMYS_PATIENCE = getSetting("NODE_MOMMYS_PATIENCE", undefined, [1]).split("/");

let mommys_attention_counter = 1;
let mommys_patience_counter = 1;


function mommys_output(isGood, force) {

    let output = "";

    let patience = JSON.parse(isGood ? MOMMYS_ATTENTION[randomFromLength(MOMMYS_ATTENTION)] : MOMMYS_PATIENCE[randomFromLength(MOMMYS_PATIENCE)])


    const mommys_mood = MOMMYS_MOODS[randomFromLength(MOMMYS_MOODS)];
    const mommys_little = MOMMYS_LITTLE[randomFromLength(MOMMYS_LITTLE)];
    const mommys_role = MOMMYS_ROLES[randomFromLength(MOMMYS_ROLES)];
    const mommys_pronouns = MOMMYS_PRONOUNS[randomFromLength(MOMMYS_PRONOUNS)];
    const mommys_fucking = MOMMYS_FUCKING[randomFromLength(MOMMYS_FUCKING)];
    const mommys_parts = MOMMYS_PARTS[randomFromLength(MOMMYS_PARTS)];

    if (!((isGood && mommys_attention_counter >= patience) || (!isGood && mommys_patience_counter >= patience)) && !force) {
        if (isGood) {
            mommys_attention_counter += 1;
        }
        else {
            mommys_patience_counter += 1;
        }
        return "";
    }

    if (isGood) {
        mommys_attention_counter = 1;
    }
    else {
        mommys_patience_counter = 1;
    }

    let input = "";

    if (isGood) {
        input = mommys.moods[mommys_mood].positive[randomFromLength(mommys.moods[mommys_mood].positive)]; // random output based on random mood
    }
    else {
        input = mommys.moods[mommys_mood].negative[randomFromLength(mommys.moods[mommys_mood].negative)]; // random output based on random mood
    }

    output = input.replace("{affectionate_term}", mommys_little)
        .replace("{role}", mommys_role)
        .replace("{pronoun}", mommys_pronouns)
        .replace("{denigrating_term}", mommys_fucking)
        .replace("{part}", mommys_parts);

    
    return output;
}

function getSetting(nodeKey, cargoKey, defaultVal) {
    return process.env[nodeKey] ?? process.env[cargoKey] ?? defaultVal.join('/');
}

function randomFromLength(variable) {
    return [Math.floor(Math.random() * (variable.length))]
}

function testing() {
    oldLog("------ Console Testing");
    console.log("This is a log test...");
    console.error("This is an error test...");
    oldLog("------ Output Testing");
    oldLog(mommys_output(true, true));
    oldLog(mommys_output(false, true));
}

// Mommy wants to practice her skills 💖
if (process.env.MOMMYS_TESTING === 'true') {
    testing();
}
