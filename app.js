let pronoun = ["I", "we", "you", "they"];
let verb = ["eat", "sleep", "drink", "breath"];
let adj = ["ferociously","wrong", "deliciously", "fast"];
let time = ["when","than","while", "if"];
let verb2 = ["fall", "run", "laugh", "call"];
let end = [".com",".us",".cr",".gov"]

function DomaineName (var1, var2, var3, var4, var5, var6) {
	let DomaineArr = [];
	    for (i in var1) {
            num1 = var1[i];
            for (i in var2){
                num2 = var2[i];
                for (i in var3){
                    num3 = var3[i];
                    for (i in var4){
                        num4 = var4[i];
                        for (i in var1){
                            num5 = var1[i];
                            for (i in var5){
                                num6 = var5[i];
                                for (i in var6){
                                    num7 = var6[i];
                                    DomaineArr.push(num1 + num2 + num3 + num4 + num5 + num6 + num7);
                                }
                            }

                        }
                    }
                }
            }

        }

	return DomaineArr
}
console.log(DomaineName(pronoun, verb, adj, time, verb2, end))