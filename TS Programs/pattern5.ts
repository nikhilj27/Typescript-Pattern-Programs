/**
   [[ '00', '  ', '  ', '  ', '  ', '  ' ],
	[ '10', '11', '  ', '  ', '  ', '  ' ],
	[ '20', '21', '22', '  ', '  ', '  ' ],
	[ '30', '31', '32', '33', '  ', '  ' ],
	[ '40', '41', '42', '43', '44', '  ' ],
	[ '50', '51', '52', '53', '54', '55' ] ]

* @param input 
*/

class Pattern5 {
	constructor() {}

	printPattern5(input: number) {
		const arr1 = new Array(input);

		for (let i = 0; i < arr1.length; i++) {
			arr1[i] = new Array();
			for (let m = 0; m < input; m++) {
				if (i >= m || i === input - 1 || m === 0) {
					arr1[i].push(`${i}${m}`);
				} else {
					arr1[i].push(`  `);
				}
			}
		}

		console.log(arr1);
	}
}

const obj5 = new Pattern5();
obj5.printPattern5(6);
