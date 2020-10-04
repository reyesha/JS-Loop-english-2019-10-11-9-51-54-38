for (let a = 1; a <= 9; a++) {
        let table = '';
        for (let b = 0; b < a; b++) {
		 c=b+1;
          table += `${a}*${c}=${a * c} `
        }
        console.log(table);
	}