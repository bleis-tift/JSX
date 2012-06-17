/*EXPECTED
Point { var x: int = 10; var y: int = 20; }
*/
class Test {
	static function run() : void {
		var p = new Point(10, 20);
		log p.toString();
	}
}
val class Point {
  var x: int;
  var y: int;
}
