/**
 * 
 [ [ '00', ' *', ' *', ' *', ' *' ],
   [ ' *', '11', ' *', ' *', ' *' ],
   [ ' *', ' *', '22', ' *', ' *' ],
   [ ' *', ' *', ' *', '33', ' *' ],
   [ ' *', ' *', ' *', ' *', '44' ] ]

 * @param input
 */

 
class Pattern3 {
	constructor() {}

	printPattern3(input: number) {
		const arr1 = new Array(input);

		for (let i = 0; i < input; i++) {
			arr1[i] = new Array();
			for (let m = 0; m < input; m++) {
				if (i === m) {
					arr1[i].push(`${i}${m}`);
				} else {
					arr1[i].push(` *`);
				}
			}
		}

		console.log(arr1);
	}
}

const Obj3 = new Pattern3();
Obj3.printPattern3(5);
