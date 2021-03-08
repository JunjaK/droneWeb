class Control {
	private state: any;
}

interface SelectableControl extends Control {
	select(): void;
}

const a = new Control();
class Button extends Control implements SelectableControl {
  select() {
  	console.log('click');
  }
}
const b:SelectableControl = new Button();

function buildName(firstName: string, ...params: string[]) {
  return `${firstName} ${params}`;
}

console.log(buildName('asd', '2321', 'asdc'));

export default function test() : void {
  console.log(a, b);
  b.select();
}
