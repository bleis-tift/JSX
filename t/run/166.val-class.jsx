/*EXPECTED
Point { var x: int = 10; var y: int = 20; }
X { var x: int = 42; }
y
*/
class Test {
	static function run() : void {
		var p = new Point(10, 20);
		log p.toString();

		var x = new X(10);
		log x.toString();

		var y = new Y(10);
		log y.toString();
	}
}
val class Point {
	var x: int;
	var y: int;
}
val class X {
	var x: int;
	function constructor(a: int) {
		this.x = 42;
	}
	function constructor(a: int, b: int) {
		this.x = -1;
	}
}
val class Y {
	var x: int;
	override function toString(): string {
		return "y";
	}
}
