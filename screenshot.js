let path = require("path");
let { spawn } = require('child_process');

let exe = path.join(__dirname, "Snipaste/Snipaste.exe");

let cp = spawn(exe, ["--snip"]);

cp.stdout.on('data', (data)=>{
	console.log(data);
});
cp.stderr.on('data', (data)=>{
	console.error(data);
});

cp.on('close', code => {
	console.log("截图成功");
	isCapturing = false

	if (code !== 0) {
		console.error(code);
	} else {
		console.log(code);
	}
});

cp.on('error', err => {
	console.error(err);
});
