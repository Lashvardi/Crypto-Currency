const valute = {
	"async": true,
	"crossDomain": true,
	"url": "https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=USD&want=GEL&amount=15000",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "219e4dd48amsh1dbce96aecd78e9p1b9f4fjsn20a823d636dd",
		"X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com"
	}
};

$.ajax(valute).done(function (response) {
	console.log(response);
});


const btc = {
	"async": true,
	"crossDomain": true,
	"url": "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "219e4dd48amsh1dbce96aecd78e9p1b9f4fjsn20a823d636dd",
		"X-RapidAPI-Host": "coinranking1.p.rapidapi.com"
	}

};

$.ajax(btc).done(function (ans) {
	console.log(ans.data.coins.length)
	for (let i = 0; i < ans.data.coins.length; i++) {
		// console.log(ans.data.coins[i].name, ans.data.coins[i].price,"$", ans.data.coins[i].symbol )




		let curr_photo = ans.data.coins[i].symbol;
		console.log(curr_photo)


		let stringifyer = JSON.stringify(ans.data.coins[i].symbol);
		let lowercaser = stringifyer.toLowerCase()
		let ready_photo = lowercaser.replace(/['"]+/g, '');

		$(`
		<div class="Test_Crypto prices">
		<div class="pri_na">
		<img class="curr_image" src="//logo.chainbit.xyz/${ready_photo}" />

			<div class="prina">
				<p class="crypto_name">${ans.data.coins[i].name}</p>
				
				<div class="cenebi">
					<p class="prices">$${ans.data.coins[i].price}</p>
					<p class="prices">${ans.data.coins[i].symbol}</p>
				</div>
			</div>
		</div>
	
	</div>`).appendTo(".valute")

	}



});


