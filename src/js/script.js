const vibes = [
    "...and you are awesome",
    "...have a wonderful day!",
    "...and you've got this!"
]

// Randomly choose a vibe from the above array
let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))]

// display the vibe
if (document.querySelector(".vibe") == true) {
    document.querySelector(".vibe").append(vibe)
}
