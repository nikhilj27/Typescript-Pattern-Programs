/**
 * 
	[[ ' *', ' *', ' *', ' *', '04' ],
	[ ' *', ' *', ' *', '13', ' *' ],
	[ ' *', ' *', '22', ' *', ' *' ],
	[ ' *', '31', ' *', ' *', ' *' ],
	[ '40', ' *', ' *', ' *', ' *' ] ]

 */

class Pattern4 {
	constructor() {}

	printPattern4(input: number) {
		const arr1 = new Array();

		for (let i = 0; i < input; i++) {
			arr1[i] = new Array();
			for (let m = 0; m < input; m++) {
				if ((i === 0 && m === input - 1) || i + m === input - 1) {
					arr1[i].push(`${i}${m}`);
				} else {
					arr1[i].push(` *`);
				}
			}
		}

		console.log(arr1);
	}
}

const Obj4 = new Pattern4();
Obj4.printPattern4(5);
