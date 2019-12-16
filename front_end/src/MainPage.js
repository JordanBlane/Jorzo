import React from 'react';
import './CSS/MainPage.css';
const hostname = window.location.hostname;


let emojiFaces = "😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 🥰 😗 😙 😚 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 ☹️ 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 🥵 🥶 😳 🤪 😵 😡 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤠 🤡 🥳 🥴 🥺 🤥 🤫 🤭 🧐 🤓 😈 👿 👹 👺 💀 👻 👽 🤖 💩 😺 😸 😹 😻 😼 😽 🙀 😿 😾"
let emojiPeople = "👶 👧 🧒 👦 👩 🧑 👨 👵 🧓 👴 👲 👳‍♀️ 👳‍♂️ 🧕 🧔 👱‍♂️ 👱‍♀️ 👨‍🦰 👩‍🦰 👨‍🦱 👩‍🦱 👨‍🦲 👩‍🦲 👨‍🦳 👩‍🦳 🦸‍♀️ 🦸‍♂️ 🦹‍♀️ 🦹‍♂️ 👮‍♀️ 👮‍♂️ 👷‍♀️ 👷‍♂️ 💂‍♀️ 💂‍♂️ 🕵️‍♀️ 🕵️‍♂️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 👰 🤵 👸 🤴 🤶 🎅 🧙‍♀️ 🧙‍♂️ 🧝‍♀️ 🧝‍♂️ 🧛‍♀️ 🧛‍♂️ 🧟‍♀️ 🧟‍♂️ 🧞‍♀️ 🧞‍♂️ 🧜‍♀️ 🧜‍♂️ 🧚‍♀️ 🧚‍♂️ 👼 🤰 🤱 🙇‍♀️ 🙇‍♂️ 💁‍♀️ 💁‍♂️ 🙅‍♀️ 🙅‍♂️ 🙆‍♀️ 🙆‍♂️ 🙋‍♀️ 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀️ 🤷‍♂️ 🙎‍♀️ 🙎‍♂️ 🙍‍♀️ 🙍‍♂️ 💇‍♀️ 💇‍♂️ 💆‍♀️ 💆‍♂️ 🧖‍♀️ 🧖‍♂️ 💅 🤳 💃 🕺 👯‍♀️ 👯‍♂️ 🕴 🚶‍♀️ 🚶‍♂️ 🏃‍♀️ 🏃‍♂️ 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 🤲 👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤟 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🦵 🦶 🖕 ✍️ 🙏 💍 💄 💋 👄 👅 👂 👃 👣 👁 👀 🧠 🦴 🦷 🗣 👤 👥"
let emojiClothes = "🧥 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 🥾 🥿 🧦 🧤 🧣 🎩 🧢 👒 🎓 ⛑ 👑 👝 👛 👜 💼 🎒 👓 🕶 🥽 🥼 🌂 🧵 🧶"
let emojiAnimals = "🐶 🐱 🐭 🐹 🐰 🦊 🦝 🐻 🐼 🦘 🦡 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦢 🦅 🦉 🦚 🦜 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐚 🐞 🐜 🦗 🕷 🕸 🦂 🦟 🦠 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🐘 🦏 🦛 🐪 🐫 🦙 🦒 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🐐 🦌 🐕 🐩 🐈 🐓 🦃 🕊 🐇 🐁 🐀 🐿 🦔 🐾 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🍀 🎍 🎋 🍃 🍂 🍁 🍄 🌾 💐 🌷 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝 🌛 🌜 🌚 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌙 🌎 🌍 🌏 💫 ⭐️ 🌟 ✨ ⚡️ ☄️ 💥 🔥 🌪 🌈 ☀️ 🌤 ⛅️ 🌥 ☁️ 🌦 🌧 ⛈ 🌩 🌨 ❄️ ☃️ ⛄️ 🌬 💨 💧 💦 ☔️ ☂️ 🌊 🌫"
let emojiFood = "🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🍍 🥭 🥥 🥝 🍅 🍆 🥑 🥦 🥒 🥬 🌶 🌽 🥕 🥔 🍠 🥐 🍞 🥖 🥨 🥯 🧀 🥚 🍳 🥞 🥓 🥩 🍗 🍖 🌭 🍔 🍟 🍕 🥪 🥙 🌮 🌯 🥗 🥘 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🍤 🍙 🍚 🍘 🍥 🥮 🥠 🍢 🍡 🍧 🍨 🍦 🥧 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🧂 🍩 🍪 🌰 🥜 🍯 🥛 🍼 ☕️ 🍵 🥤 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🍾 🥄 🍴 🍽 🥣 🥡 🥢"
let emojiSports = "⚽️ 🏀 🏈 ⚾️ 🥎 🏐 🏉 🎾 🥏 🎱 🏓 🏸 🥅 🏒 🏑 🥍 🏏 ⛳️ 🏹 🎣 🥊 🥋 🎽 ⛸ 🥌 🛷 🛹 🎿 ⛷ 🏂 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🤼‍♀️ 🤼‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ 🤺 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏾‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏇 🏇🏻 🏇🏼 🏇🏽 🏇🏾 🏇🏿 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🏆 🥇 🥈 🥉 🏅 🎖 🏵 🎗 🎫 🎟 🎪 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🎭 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎸 🎻 🎲 🧩 ♟ 🎯 🎳 🎮 🎰"
let emojiTravel = "🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🛴 🚲 🛵 🏍 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 ✈️ 🛫 🛬 🛩 💺 🛰 🚀 🛸 🚁 🛶 ⛵️ 🚤 🛥 🛳 ⛴ 🚢 ⚓️ ⛽️ 🚧 🚦 🚥 🚏 🗺 🗿 🗽 🗼 🏰 🏯 🏟 🎡 🎢 🎠 ⛲️ ⛱ 🏖 🏝 🏜 🌋 ⛰ 🏔 🗻 🏕 ⛺️ 🏠 🏡 🏘 🏚 🏗 🏭 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪️ 🕌 🕍 🕋 ⛩ 🛤 🛣 🗾 🎑 🏞 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🏙 🌃 🌌 🌉 🌁"
let emojiObjects = "⌚️ 📱 📲 💻 ⌨️ 🖥 🖨 🖱 🖲 🕹 🗜 💽 💾 💿 📀 📼 📷 📸 📹 🎥 📽 🎞 📞 ☎️ 📟 📠 📺 📻 🎙 🎚 🎛 ⏱ ⏲ ⏰ 🕰 ⌛️ ⏳ 📡 🔋 🔌 💡 🔦 🕯 🗑 🛢 💸 💵 💴 💶 💷 💰 💳 🧾 💎 ⚖️ 🔧 🔨 ⚒ 🛠 ⛏ 🔩 ⚙️ ⛓ 🔫 💣 🔪 🗡 ⚔️ 🛡 🚬 ⚰️ ⚱️ 🏺 🧭 🧱 🔮 🧿 🧸 📿 💈 ⚗️ 🔭 🧰 🧲 🧪 🧫 🧬 🧯 🔬 🕳 💊 💉 🌡 🚽 🚰 🚿 🛁 🛀 🛀🏻 🛀🏼 🛀🏽 🛀🏾 🛀🏿 🧴 🧵 🧶 🧷 🧹 🧺 🧻 🧼 🧽 🛎 🔑 🗝 🚪 🛋 🛏 🛌 🖼 🛍 🧳 🛒 🎁 🎈 🎏 🎀 🎊 🎉 🧨 🎎 🏮 🎐 🧧 ✉️ 📩 📨 📧 💌 📥 📤 📦 🏷 📪 📫 📬 📭 📮 📯 📜 📃 📄 📑 📊 📈 📉 🗒 🗓 📆 📅 📇 🗃 🗳 🗄 📋 📁 📂 🗂 🗞 📰 📓 📔 📒 📕 📗 📘 📙 📚 📖 🔖 🔗 📎 🖇 📐 📏 📌 📍 ✂️ 🖊 🖋 ✒️ 🖌 🖍 📝 ✏️ 🔍 🔎 🔏 🔐 🔒 🔓"
let emojiSymbols = "❤️ 🧡 💛 💚 💙 💜 🖤 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 💟 ☮️ ✝️ ☪️ 🕉 ☸️ ✡️ 🔯 🕎 ☯️ ☦️ 🛐 ⛎ ♈️ ♉️ ♊️ ♋️ ♌️ ♍️ ♎️ ♏️ ♐️ ♑️ ♒️ ♓️ 🆔 ⚛️ 🉑 ☢️ ☣️ 📴 📳 🈶 🈚️ 🈸 🈺 🈷️ ✴️ 🆚 💮 🉐 ㊙️ ㊗️ 🈴 🈵 🈹 🈲 🅰️ 🅱️ 🆎 🆑 🅾️ 🆘 ❌ ⭕️ 🛑 ⛔️ 📛 🚫 💯 💢 ♨️ 🚷 🚯 🚳 🚱 🔞 📵 🚭 ❗️ ❕ ❓ ❔ ‼️ ⁉️ 🔅 🔆 〽️ ⚠️ 🚸 🔱 ⚜️ 🔰 ♻️ ✅ 🈯️ 💹 ❇️ ✳️ ❎ 🌐 💠 Ⓜ️ 🌀 💤 🏧 🚾 ♿️ 🅿️ 🈳 🈂️ 🛂 🛃 🛄 🛅 🚹 🚺 🚼 🚻 🚮 🎦 📶 🈁 🔣 ℹ️ 🔤 🔡 🔠 🆖 🆗 🆙 🆒 🆕 🆓 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 #️⃣ *️⃣ ⏏️ ▶️ ⏸ ⏯ ⏹ ⏺ ⏭ ⏮ ⏩ ⏪ ⏫ ⏬ ◀️ 🔼 🔽 ➡️ ⬅️ ⬆️ ⬇️ ↗️ ↘️ ↙️ ↖️ ↕️ ↔️ ↪️ ↩️ ⤴️ ⤵️ 🔀 🔁 🔂 🔄 🔃 🎵 🎶 ➕ ➖ ➗ ✖️ ♾ 💲 💱 ™️ ©️ ®️ 〰️ ➰ ➿ 🔚 🔙 🔛 🔝 🔜 ✔️ ☑️ 🔘 ⚪️ ⚫️ 🔴 🔵 🔺 🔻 🔸 🔹 🔶 🔷 🔳 🔲 ▪️ ▫️ ◾️ ◽️ ◼️ ◻️ ⬛️ ⬜️ 🔈 🔇 🔉 🔊 🔔 🔕 📣 📢 👁‍🗨 💬 💭 🗯 ♠️ ♣️ ♥️ ♦️ 🃏 🎴 🀄️ 🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧"
let emojiFlags = "🏳️ 🏴 🏁 🚩 🏳️‍🌈 🏴‍☠️ 🇦🇫 🇦🇽 🇦🇱 🇩🇿 🇦🇸 🇦🇩 🇦🇴 🇦🇮 🇦🇶 🇦🇬 🇦🇷 🇦🇲 🇦🇼 🇦🇺 🇦🇹 🇦🇿 🇧🇸 🇧🇭 🇧🇩 🇧🇧 🇧🇾 🇧🇪 🇧🇿 🇧🇯 🇧🇲 🇧🇹 🇧🇴 🇧🇦 🇧🇼 🇧🇷 🇮🇴 🇻🇬 🇧🇳 🇧🇬 🇧🇫 🇧🇮 🇰🇭 🇨🇲 🇨🇦 🇮🇨 🇨🇻 🇧🇶 🇰🇾 🇨🇫 🇹🇩 🇨🇱 🇨🇳 🇨🇽 🇨🇨 🇨🇴 🇰🇲 🇨🇬 🇨🇩 🇨🇰 🇨🇷 🇨🇮 🇭🇷 🇨🇺 🇨🇼 🇨🇾 🇨🇿 🇩🇰 🇩🇯 🇩🇲 🇩🇴 🇪🇨 🇪🇬 🇸🇻 🇬🇶 🇪🇷 🇪🇪 🇪🇹 🇪🇺 🇫🇰 🇫🇴 🇫🇯 🇫🇮 🇫🇷 🇬🇫 🇵🇫 🇹🇫 🇬🇦 🇬🇲 🇬🇪 🇩🇪 🇬🇭 🇬🇮 🇬🇷 🇬🇱 🇬🇩 🇬🇵 🇬🇺 🇬🇹 🇬🇬 🇬🇳 🇬🇼 🇬🇾 🇭🇹 🇭🇳 🇭🇰 🇭🇺 🇮🇸 🇮🇳 🇮🇩 🇮🇷 🇮🇶 🇮🇪 🇮🇲 🇮🇱 🇮🇹 🇯🇲 🇯🇵 🎌 🇯🇪 🇯🇴 🇰🇿 🇰🇪 🇰🇮 🇽🇰 🇰🇼 🇰🇬 🇱🇦 🇱🇻 🇱🇧 🇱🇸 🇱🇷 🇱🇾 🇱🇮 🇱🇹 🇱🇺 🇲🇴 🇲🇰 🇲🇬 🇲🇼 🇲🇾 🇲🇻 🇲🇱 🇲🇹 🇲🇭 🇲🇶 🇲🇷 🇲🇺 🇾🇹 🇲🇽 🇫🇲 🇲🇩 🇲🇨 🇲🇳 🇲🇪 🇲🇸 🇲🇦 🇲🇿 🇲🇲 🇳🇦 🇳🇷 🇳🇵 🇳🇱 🇳🇨 🇳🇿 🇳🇮 🇳🇪 🇳🇬 🇳🇺 🇳🇫 🇰🇵 🇲🇵 🇳🇴 🇴🇲 🇵🇰 🇵🇼 🇵🇸 🇵🇦 🇵🇬 🇵🇾 🇵🇪 🇵🇭 🇵🇳 🇵🇱 🇵🇹 🇵🇷 🇶🇦 🇷🇪 🇷🇴 🇷🇺 🇷🇼 🇼🇸 🇸🇲 🇸🇦 🇸🇳 🇷🇸 🇸🇨 🇸🇱 🇸🇬 🇸🇽 🇸🇰 🇸🇮 🇬🇸 🇸🇧 🇸🇴 🇿🇦 🇰🇷 🇸🇸 🇪🇸 🇱🇰 🇧🇱 🇸🇭 🇰🇳 🇱🇨 🇵🇲 🇻🇨 🇸🇩 🇸🇷 🇸🇿 🇸🇪 🇨🇭 🇸🇾 🇹🇼 🇹🇯 🇹🇿 🇹🇭 🇹🇱 🇹🇬 🇹🇰 🇹🇴 🇹🇹 🇹🇳 🇹🇷 🇹🇲 🇹🇨 🇹🇻 🇻🇮 🇺🇬 🇺🇦 🇦🇪 🇬🇧 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🏴󠁧󠁢󠁷󠁬󠁳󠁿 🇺🇳 🇺🇸 🇺🇾 🇺🇿 🇻🇺 🇻🇦 🇻🇪 🇻🇳 🇼🇫 🇪🇭 🇾🇪 🇿🇲 🇿🇼"

//array of emojis
let emojiArr = emojiFaces.split(' ');
//emoji div
function Emoji(){
  return(
    <div id='emojiwrapper'>
      <div id='emojibuttons'>
        <button onClick={changeemoji}>Faces</button>
        <button onClick={changeemoji}>People</button>
        <button onClick={changeemoji}>Clothes</button>
        <button onClick={changeemoji}>Animals</button>
        <button onClick={changeemoji}>Food</button>
        <button onClick={changeemoji}>Sports</button>
        <button onClick={changeemoji}>Travel</button>
        <button onClick={changeemoji}>Objects</button>
        <button onClick={changeemoji}>Symbols</button>
        <button onClick={changeemoji}>Flags</button>
      </div>
      <div id='emoji' className='emoji'>
      </div>
    </div>
  )
}
function updateemoji(){
  var divs = document.getElementById('emoji')
  for(var i=0;i<emojiArr.length;i++){
    var temp = document.createElement('p');
    temp.innerHTML = emojiArr[i];
    divs.appendChild(temp);
    temp.addEventListener("click", insertEmoji)
  }
}

function changeemoji(e){
  var emojibox = document.getElementById('emoji');
  emojibox.innerHTML = '';
  switch(e.target.innerHTML){
    case 'Faces':
      emojiArr = emojiFaces.split(' ');
      break;
    case 'People':
      emojiArr = emojiPeople.split(' ');
      break;
    case 'Clothes':
      emojiArr = emojiClothes.split(' ');
      break;
    case 'Animals':
      emojiArr = emojiAnimals.split(' ');
      break;
    case 'Food':
      emojiArr = emojiFood.split(' ');
      break;
    case 'Sports':
      emojiArr = emojiSports.split(' ');
      break;
    case 'Travel':
      emojiArr = emojiTravel.split(' ');;
      break;
    case 'Objects':
      emojiArr = emojiObjects.split(' ');
      break;
    case 'Symbols':
      emojiArr = emojiSymbols.split(' ');
      break;
    case 'Flags':
      emojiArr = emojiFlags.split(' ');
      break;
    }
    updateemoji()
}



//toggle emoji div
function Emojitoggle(){
  let div = document.getElementById('emojiwrapper');
  if(div.style.display == 'inline-block'){
    div.style.display = 'none'
  }else{
    var divs = document.getElementById('emoji')
    divs.innerHTML = '';
    div.style.display = 'inline-block'
    for(var i=0;i<emojiArr.length;i++){
      var temp = document.createElement('p');
      temp.innerHTML = emojiArr[i];
      divs.appendChild(temp);
      temp.addEventListener("click", insertEmoji)
    }
  }
}

//insert emoji function
function insertEmoji(e){
  let emoji = e.target.innerHTML
  var messagebox = document.getElementById('MessageInput');
  messagebox.value += emoji;
}


export class MainPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
          profile: "",
          currentMessage:"",
          openchats: ""
        }


        setInterval(()=>{
          this.getMessages(this.state.currentMessage);
          var objDiv = document.getElementById("ShowMessages");
          objDiv.scrollTop = objDiv.scrollHeight;
        }, 1000)

        this.InitialiseUser.bind(this);
        this.InitialiseUser();
        this.searchForUser.bind(this);
        this.getMessages(this.state.currentMessage);
        this.loginapicall.bind(this)
        this.onUnload = this.onUnload.bind(this)
        this.addOpenChat1.bind(this)


        document.body.addEventListener("keydown",(e)=>{
          if(e.keyCode == 13){
            //enter key pressed
            this.sendMessage();
            document.getElementById('MessageInput').value = "";
          }
        })

    }

    onUnload(event) { // the method that will be used for both add and remove event
      fetch(`http://localhost:4000/users/setlogout?username=${this.state.profile.username}`)
      .then(response => response.json())
      .then((data)=>{
        console.log(data)
      })
    }

    componentDidMount() {
      window.addEventListener("beforeunload", this.onUnload)
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.onUnload)
    }
    

    InitialiseUser(){

        //gets current user(from cookie) and loads profile info into table
        
          let nameFromCookie = decodeURIComponent(document.cookie);
          nameFromCookie = nameFromCookie.split("=");
          let username = nameFromCookie[1];
          if(username != "" || username != undefined){ 
          console.log("name in cookie: "+username);
          fetch(`http://localhost:4000/users/profile?user=${username}`)
          .then(response => response.json())
          .then((data)=>{
            console.log(data);
            if(data.data[0]){
              console.log('loggedin')
              this.setState({profile: data.data[0]});
              console.log(this.state.profile)
              this.loginapicall(this);
              let text = document.getElementById('Sidebarbio');
              this.setState({openchats : data.data[0].openchats})
              let openedchats = this.state.openchats.split(';');
              console.log(openedchats)
              for(let i=0;i<openedchats.length;i++){
                if(openedchats[i] !== ''){
                  document.getElementById('showopenchats').innerHTML += `<button class="openchatEvent">${openedchats[i]}</button>`
                  for(let i=0;i<document.getElementsByClassName('openchatEvent').length;i++){
                    document.getElementsByClassName("openchatEvent")[i].addEventListener('click',(e)=>{
                      let newfriendname = e.target.parentNode.parentNode.childNodes[1].childNodes[i].innerHTML
                      this.setState({currentMessage : newfriendname})
                      console.log('set currentmessage state to ' +this.state.currentMessage)
                    })
                  }
                }
              }
              if(this.state.profile.bio != ''){
                text.innerHTML = this.state.profile.bio;
              }else{
                text.innerHTML = "No Bio"
              }
            }else{
              console.log('failed')
              document.cookie = "username= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
              document.location.href = `http://${hostname}:3000/`;
            }
          })
        }else{
          //no recoreded user so redirect to login page
          console.log("main no cookie")
          document.location.href = `http://${hostname}:3000/`;
        }

    }

    loginapicall(){
      fetch(`http://localhost:4000/users/setlogin?username=${this.state.profile.username}`)
      .then(response => response.json())
      .then((data)=> {
        console.log('signed in succesfully');
      })
    }
    addOpenChat(friendname){
      friendname = friendname.trim()
      fetch(`http://localhost:4000/users/addopenchat?username=${this.state.profile.username}&friendname=${friendname}`)
      .then(response => response.json())
      .then((data)=> {
        console.log(data)
        document.getElementById('showopenchats').innerHTML += `<button class="openchatEvent">${friendname}</button>`
        for(let i=0;i<document.getElementsByClassName('openchatEvent').length;i++){
          document.getElementsByClassName("openchatEvent")[i].addEventListener('click',(e)=>{
            console.log(newfriendname)
            let newfriendname = e.target.parentNode.parentNode.childNodes[1].childNodes[i].innerHTML
            this.setState({currentMessage : newfriendname})
            console.log('set currentmessage state to ' +this.state.currentMessage)
          })
        }
      })
    }
    addOpenChat1(friendname){
      friendname = friendname.trim()
      fetch(`http://localhost:4000/users/addopenchat?username=${this.state.profile.username}&friendname=${friendname}`)
      .then(response => response.json())
      .then((data)=> {
        console.log(data)
        let stateres = this.state.openchats +';'+friendname;
        this.setState({openchats : stateres})
        console.log('state updated   ' +stateres)
        document.getElementById('showopenchats').innerHTML += `<button class="openchatEvent">${friendname}</button>`
        for(let i=0;i<document.getElementsByClassName('openchatEvent').length;i++){
          document.getElementsByClassName("openchatEvent")[i].addEventListener('click',(e)=>{
            console.log('set currentmessage state to ' +this.state.currentMessage)
            let newfriendname = e.target.parentNode.parentNode.childNodes[1].childNodes[i].innerHTML
            this.setState({currentMessage : newfriendname})
          })
        }
      })
    }

    // WORKS
    searchForUser(e){
      //when search bar input changes we search for names
      let username = e.target.value;
      let usernameForEvents = this.state.profile.username;
      let dropdowndiv = document.getElementById("SearchResultsDiv");
      if(username == ""){
        dropdowndiv.innerHTML = '';
        dropdowndiv.style.display = 'none';
        return false;
      }
          fetch(`http://localhost:4000/users/search?user=${username}`)
          .then(response => response.json())
          .then((data)=>{
            //if data is not empty, add the names to the html
            if(data[0]){
              console.log(data);
              //add first 5 names to the dropdown
              dropdowndiv.innerHTML = ''
              dropdowndiv.style.display = 'inline-block';
              for(let i=0;i<data.length && i < 5;i++){
                dropdowndiv.innerHTML += '<div className="searchresultstext"> <p id="searchresult" class="nameEvent">'+data[i].username+' </p><p> Bio: '+data[i].bio+'</p><div id="searchresultsbutton"><button class="messageButtonx">Message</button><button class="friendEvent">Add Friend</button></div> </div>'
              }

              for(let i =0; i<document.getElementsByClassName("messageButtonx").length;i++){
                document.getElementsByClassName("messageButtonx")[i].addEventListener("click",(e)=>{
                  //changes state -- friendname isnt the correct name
                  let friendname = e.target.parentNode.parentNode.childNodes[1].innerHTML
                  let openedchats = this.state.openchats.split(';');
                  let send = true;
                  //if(openedchats.indexOf(name) == -1)
                  for(let a=0;a<openedchats.length;a++){ //what?
                    if(openedchats[a] !== ''){
                      console.log('-------->>>>>' +friendname.trim()) //fixed
                      console.log('-------->>>>>' +openedchats[a].trim())//
                      if(openedchats[a] == friendname.trim()){
                        console.log('match')
                        send = false;
                        
                      }
                    }
                  }
                  if(send != false){
                    console.log('adding user ' +friendname +' to opened chats')
                    this.addOpenChat1(friendname);
                    console.log(this.state.openchats)
                  }else{
                    console.log('ERROR: user is already in opened')
                  }
                
                })
              }

              //works
              for(let i =0; i<document.getElementsByClassName("friendEvent").length;i++){
                document.getElementsByClassName("friendEvent")[i].addEventListener("click", function(e){
                  //CLICKED ADD FRIEND
                  let friendname = e.target.parentNode.parentNode.childNodes[1].innerHTML;
                  
                  fetch(`http://localhost:4000/users/addfollower?friendname=${usernameForEvents}&username=${friendname}`)
                  .then(response => response.json())
                  .then((data)=>{
                    console.log(data)
                  })
                  
                  fetch(`http://localhost:4000/users/addfriend?friendname=${friendname}&username=${usernameForEvents}`)
                    .then(response => response.json())
                    .then((data) => {
                      console.log(data)
                  })

                  
                });
              }
              for(let i =0; i<document.getElementsByClassName("nameEvent").length;i++){
                document.getElementsByClassName("nameEvent")[i].addEventListener("click",function(e){
                  //gets profile from specified user
                  let username = e.target.innerHTML;
                  fetch(`http://localhost:4000/users/profile?user=${username}`)
                      .then(response => response.json())
                      .then((data)=>{
                        if(data.data[0].username){
                          //user found
                          console.log("found user: " + data.data[0].username + data.data[0].bio);
                          //change profile div to display this info
                          let profileDiv = document.getElementById("profilediv");
                          let profileName = document.getElementById("profiledivuser");
                          let profileBio = document.getElementById("profiledivbio");
                          profileName.innerHTML = data.data[0].username;
                          if(data.data[0].bio == ''){
                            profileBio.innerHTML = 'No Bio';
                          }else{
                            profileBio.innerHTML = data.data[0].bio;
                          }
                          //displays div
                          profileDiv.style.display = 'block'
                        }else{
                          //user not found
                          console.log("error, couldnt fetch user")
                        }
                      })
                })
              }

            }
          })
    }

    closeprofilediv(){
      document.getElementById('profilediv').style.display='none';
    }

    signOut(){
      //deletes cookie and goes back to login page
      document.cookie = "username= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
      document.location.href = `http://${hostname}:3000/`;
    }

    getMessages(to){
      fetch(`http://localhost:4000/users/getmessages?username=${this.state.profile.username}&to=${to}`)
      .then(response => response.json())
      .then((data)=> {
        console.log(data.data)
        //clear messages
        document.getElementById('ShowMessages').innerHTML = ''
        if(data.data != 'false'){
          //display messages
          for(let i=0;i<data.data.message.length;i++){

            let name = data.data.message[i].split("℗")[0] 
            let text = data.data.message[i].split("℗")[1]
            let messageTemplate = "<div id='messageContainer'><p class='messageName'>NAME</p><p class='messageText'>TEXT</p></div>";
            messageTemplate = messageTemplate.replace('NAME', name)
            //should just be data.data
            messageTemplate = messageTemplate.replace('TEXT', text)
            document.getElementById('ShowMessages').innerHTML += messageTemplate
            }
        }

      })
    }
    sendMessage(){
      let sendto = this.state.currentMessage
      let message = document.getElementById('MessageInput').value;
      console.log(message)
      message = message.
      replace(/&/g,'%26').
      replace(/</g,'%3C').
      replace(/>/g,'%3E').
      replace(/=/g,"%3D").
      replace(/'/g,"").
      replace(/"/g,"").
      replace(/#/g,"%23").
      replace(/!/g,"%21").
      replace(/£/g,"%A3");
      //filter message for things like images and color codes
      //images
      let words = message.split(" ");
      words.forEach((word,i) =>{
        if(word.endsWith('.jpg') || word.endsWith('.png') || word.endsWith('.jpeg') || word.endsWith('.webp') || word.endsWith('.gif')){
          let url = word;
          words[i] = `<img src=${url} width=auto height=300>`; 
          console.log(word)

        }
      })
      message = words.join(" ");
      //colours
      //e.g red = &r 

      let colorcodes = ["%26R", "%26B", "%26P"];
      let colors = ["red", "blue", "hotpink"];


      colorcodes.forEach((color, b) =>{
        
        if(message.indexOf(color) >  -1){
          let x = message.split(color);
          for(let i=1;i<x.length;i++){
            x[i] = `<font color=${colors[b]}>${x[i]}</font>`;
          }
          message = x.join("") //
        }
      })
      
      console.log(message)
      //let object = `,"${sendto}": {"message": "${message}"}`
      //console.log(object)
      console.log(this.state.profile.username) 
      fetch(`http://localhost:4000/users/sendmessage?sendto=${sendto.trim()}&username=${this.state.profile.username.trim()}&message=${message}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
      })

    }//



    render(){
        return(
            <div className="MainPageWrapper">
              <div className="profilediv" id='profilediv'>
                <p id="closeProfile" onClick={this.closeprofilediv}>X</p>
                <h3 id='profiledivuser'></h3>
                <p id='profiledivbio'>No Bio</p>
              </div>
              <div className="profileDropdown">
              </div>
                <div className="SidebarDiv">
                <button id='SettingsDropDown'>···</button>
                <div className="SidebarProfileDiv">
                    <h2 id="sidebarTitle">Jorzo</h2>
                    <h3>Profile:</h3>
                    <h4 id='Sidebarusername' onClick={function(){window.location.href = `http://${hostname}:3000/profile`}}>{this.state.profile.username}</h4>
                    <p id='Sidebarbio'>{this.state.profile.bio}</p>
                  </div>
                  <div className="OpenChatsDiv">
                    <h3>Chats:</h3>
                    <div id="showopenchats">
                    </div>
                  </div>
                  <button id='logoutbutton' onClick={this.signOut}>LOGOUT</button>
                </div>
                <div className="SearchbarDiv">
                  <input id='SearchBarInput' onChange={this.searchForUser.bind(this)} placeholder="Search For A User"/>
                </div>
                <div className="SearchResultsDiv" id="SearchResultsDiv">
                </div>
                <h2 id='messageusername'>{this.state.currentMessage}</h2>
                <div className="MessagesContainer">
                  <button id='toggleemojis'onClick={Emojitoggle}>EMOJI</button>
                <Emoji />
                  <div id='ShowMessages'>
                  </div>
                  <input id = 'MessageInput' placeholder="Send a message..."/>
                </div>
                
            </div>

        )
    }
}
