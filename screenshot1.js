let path = require("path");
let { spawn } = require('child_process');
let exe = path.join(__dirname, "Snipaste/screenShot.exe");

/* 启动snipaste */
let cp = spawn(exe);

//截图君，你准备好了咩？
cp.stdout.on('data', (data)=>{
	console.log(data);
});
cp.stderr.on('data', (data)=>{
	console.error(data);
});

cp.on('close', code => {
	console.log(`截图完毕${code}`);
	if (code !== 0) {
		console.error(code);
	} else {
		console.log(code);
		//parentCp.kill();
	}
});

cp.on('error', err => {
	console.error(err);
});