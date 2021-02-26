async function f2() {
	return new Promise(function(resolve, reject){
		resolve(true);
	});
}

(async () => {
	const w = await f2();
	console.log(w);
})();
