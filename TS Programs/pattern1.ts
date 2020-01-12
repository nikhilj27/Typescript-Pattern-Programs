/**
 * [ [ '00', '01', '02', '03', '04' ],
	 [ '10', ' *', ' *', ' *', '14' ],
	 [ '20', ' *', ' *', ' *', '24' ],
	 [ '30', ' *', ' *', ' *', '34' ],
	 [ '40', '41', '42', '43', '44' ] ]

 */

class Pattern {
	constructor() {
		console.log('Call from construcor');
	}

	printPattern1(input: number): void {
		const arr1 = new Array();
		for (let i = 0; i < arr1.length; i++) {
			arr1[i] = new Array(input);
			for (let m = 0; m < input; m++) {
				if ((i === 0 || i === input - 1) && m >= 0) {
					arr1[i].push(`${i}${m}`);
				} else {
					if ((m === 0 || m === input - 1) && i >= 0) {
						arr1[i].push(`${i}${m}`);
					} else {
						arr1[i].push(` *`);
					}
				}
			}
		}
		console.log(arr1);
	}
}

const Obj = new Pattern();
Obj.printPattern1(6);
