
let data = [
	{ name: 'The Popes Exorcist', description: "The Vatican's chief exorcist uncovers an evil unlike any he's ever faced when he investigates the possession of a boy living at an ancient Spanish abbey.", img: "https://occ-0-6554-2186.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABR_obXSMmwcMMBdqlLymtfmFFIuyDABQ43UDtySaStzvN9tZauHlePg4LGyjqrC88L2BZzLvSMcdzbztfS6yurx-eKnPyAQ1pRwI.webp?r=28b", logo: "https://occ-0-6554-3662.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWV3w8y87ESaX-7NbGTppUJwWuGeVHs7g9f1-5n1rb610QuYGk43_Wfz_l_Yfw8tkxBp7OBoSi45SlSKbpfXFjhYzSfsbiACZt4PDUfvIk7h.webp?r=4b0" },
	{ name: 'Suits', description: "The firm ponders Harvey's punishment for his misdeed. Meanwhile, Mike tries to dodge his first client as a reluctant junior partner.", img: "https://occ-0-6554-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRLtg7R1cnhiO_GWnCo-yIx-dHPUjzGeCEg3mQghFFtp5O_9Uh0t6xT07CKldDc2NXvsl6dcZHS1kQoBdzyXonemNrkGh4IhZd4.webp?r=7df", logo: "https://occ-0-6554-3662.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUxqRxbIpeofu_nIhfdP3j0DJsWGBFpDvpovs_WMGpSHtUmDED46_L9dH8JCFwGLLMHJHr7pJBKWE1x0_YMTwY1wpgBU2lZ22mroXLiUev4.webp?r=1a9" },
	{ name: 'Friends', description: "This hit sitcom follows the merry misadventures of six 20-something pals as they navigate the pitfalls of work, life and love in 1990s Manhattan.", img: "https://occ-0-6554-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdFfuoU4rnrXk50fjUjzle0OjZj8Sr40bucK1awD34hMUNwfrljs0-X52ZgBaOpgb52P9G0KZ3_VUhUb7VqJ31Fx8_pIglYJzTc.webp?r=75b", logo: "https://occ-0-6554-2186.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABajpdrycy5d7g0_rVXXQFshLftrpWv3UfxKy_xbxeeHO0Uw8LTaUz6nB6NfgssvXKis39S2NPz17DPiVKdKAcj98uoYf1-NALFxSy7iaPMM.webp?r=584" },
	{ name: 'The Big Bang Theory', description: "Physicists Leonard and Sheldon find their nerd-centric social circle with pals Howard and Raj expanding when aspiring actress Penny moves in next door.", img: "https://occ-0-6554-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaBZdMIlMgijyhS_fqCzyssLA_y21jkufEH12oBu5V-0zD3VpqGzj-08Np_vu7lUdp_CWjrYCXDyWhTGIOoeLnCIE80V9m1W4XM.webp?r=24d", logo: "https://occ-0-6554-2186.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXqDfiH0CcX_x7WeUxKehb8bGXKdrQdBYemxvDm0ZEj6QBj55PE6DG5fQ2VcBjT5t9eu2sVrqMBr4rignr0nzyRb_7yX4XemnYDGwOoiuNE.webp?r=bbc" },
	{ name: 'Money Heist', description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.", img: "https://occ-0-6554-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbzBukwj-wl3qePSdFwS-Nwy6BGO7tIdqQ0oFSWYKqpdhrmIcLeD0CYnBd81oVLyS7eu5sROjfsOCmJmxso3w8xcqDcCdNitNN6nUpm2nLIKIbB7PUAsftFJnfhUpQk0tEi0.jpg?r=8a4", logo: "https://occ-0-6554-2186.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbVBZZI4ewNxMH5D6oTe7AiwHg0WjmMUwC7nJ0w2SFZO2YWN7BXiEu6BV80gef6qcE0rT65M2UP7TGdKroEWmGZg7W1wxug75fMpQrCx68G2rIyXtoYE_F6ea_OrDddy_KtGDvt0Lx7dekH-AQRoAtH8vCKeXyMYSIfSH7iBXdPn1D8cSj1o.webp?r=768" },
	{ name: 'Ragnarok', description: "In a Norwegian town poisoned by pollution and rattled by melting glaciers, the End Times feel all too real. It’ll take a legend to battle an old evil.", img: "https://occ-0-6554-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbth0yDj8JSG7rCfTtMq_vF7jkufYv1gZp8iVGmsZm8t0jlFGAIhWP4O1Mn0I9uGzxPoFHz9GKlu7N4s14YetFhsSVRuwr8rp6ZSqmHGb_8dBdAc6XIyWDbI_u97Ifn_n0DglIrWdARgjDQtVW5Jax7w_BkcvXXh87MvVUxeDVWiqp-zNSYd4NJxfrgHTJMUdrQXrS7XzR8i-p_prSXmo1apvfXgg2iHDpfd8g5zghxCAkn2tqSv1yajIEL8HZecIL3kU-e1vCRrJTZDbvX2cmXWN1OxWC9gRauqZQacMBR8oGq2M3w.jpg?r=ae8", logo: "https://occ-0-6554-2186.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABcU7-qXMwbpNRt6fd99BBL5CiweWcjvwTJaOepAJOJNEZH6vzr5taKfVg129l3JzzImFmVQkzrs9KtqUrdm9JaFTF7nWzPFXPkb3ZUHGoE74Y4hOq2qe4J9RvrRquPYyznVCxeHqalR1Z7em0YwmF8ClN-nZjsod674x0Pq00chAm8wr9XLR.webp?r=a35" },
	{ name: 'Peaky Blinders', description: "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.", img: "https://occ-0-6554-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeqfT2_-pIeAnhkqj0GpudyhvXhx94AqyF9tkpneVdXu-3OATs6WlyyJJGhDCI9f8aYJJShAluJXN888F2NuB1cdlle-7Ky89bq8VkR-ilzL8yy5sT_4nUedoHC5jun8INFE.jpg?r=a07", logo: "https://occ-0-6554-3662.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXATnou9lAifkkwnTkgHnTL843mPJnl8DvLJUNokZkepr5j3IOD75YzbJ956IRYAAVu_Aio8dxLB-iydkmmjoEM0XW9zeLyuEvlKcMi5r2FGeLrdlU1UyX3iLV-EBSkR9NG3iuHMvam8NOxOHc2s8EtmKwbwm8x8zn4mJSwSii0f9G1aeAvM.webp?r=f38" },
]

let videoDescription = document.getElementById("js__video__description");
let videoLogo = document.getElementById("js__video__logo");

let AddBtn = document.getElementById("js__add-btn");
let AddedBtn = document.getElementById("js__added-btn");

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

window.onload = function () {
	videoDescription.outerText = data[movieId].description;
	videoLogo.src = data[movieId].logo

	let favList = JSON.parse(sessionStorage.getItem('favList')) || [];

	if (favList.indexOf(movieId) >= 0) {
		AddBtn.style = "display: none;"
		AddedBtn.style = "display: block;"
	} else {
		AddedBtn.style = "display: none;"
		AddBtn.style = "display: block;"
	}
}

function addToFav() {
	let favList = JSON.parse(sessionStorage.getItem('favList')) || [];

	if (favList.indexOf(movieId) === -1) favList.push(movieId)

	sessionStorage.setItem('favList', JSON.stringify(favList));

	AddBtn.style = "display: none;"
	AddedBtn.style = "display: block;"
}
function removeFromFav() {
	let favList = JSON.parse(sessionStorage.getItem('favList')) || [];

	if (favList.indexOf(movieId) >= 0) favList.splice(favList.indexOf(movieId), 1)

	sessionStorage.setItem('favList', JSON.stringify(favList));

	AddedBtn.style = "display: none;"
	AddBtn.style = "display: block;"

}