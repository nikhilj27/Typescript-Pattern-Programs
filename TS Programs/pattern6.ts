class Pattern6 {
	constructor() {}

	printPattern6(input: number): void {
		const arr = new Array(input);

		for (let i = 0; i < input; i++) {
			arr[i] = new Array();
			for (let m = 0; m < input; m++) {
				if (i === 0 || i + m === input - 1 || i + m === i) {
					arr[i].push(`${i}${m}`);
				} else {
					arr[i].push('  ');
				}
			}
		}

		console.log(arr);
	}
}

const Obj6 = new Pattern6();
Obj6.printPattern6(6);
