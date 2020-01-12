
	/**
 * 
  [ 
  [ '00', '01', '02', '03', '04' ],
  [ '10', '11', '12', '13', '14' ],
  [ '20', '21', '22', '23', '24' ],
  [ '30', '31', '32', '33', '34' ],
  [ '40', '41', '42', '43', '44' ] ]

 * @param input 
 */

class Pattern2 {
	constructor() {}

	printPattern2(input: number) {
		const arr1 = new Array(input);

		for (let i = 0; i < input; i++) {
			arr1[i] = new Array();
			for (let m = 0; m < input; m++) {
				arr1[i].push(`${i}${m}`);
			}
		}

		console.log(arr1);
	}
}

const Obj2 = new Pattern2();
Obj2.printPattern2(5);
