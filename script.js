let arr = [1, 2, 3, 4]
let filtererArr  = new Promise((resolve,reject)=>{
	let finalArr = []
	setTimeout(()=>{
		arr.filter((item)=>{
			if(item%2 == 0){
				finalArr.push(item)
			}
		})
		resolve(finalArr);
		
	},3000)
})

filtererArr.then((value)=>{
	setTimeout(()=>{
		document.getElementById("output").innerText = value.join(", ")
	},1000)
	
	let MultiArr = value.map((ele)=>ele*2)
	return MultiArr;
}).then((res)=>{
	setTimeout(()=>{
		document.getElementById("output").innerText = res.join(", ")
	},2000)
})