class staticdemo
{
	static int j=55;;
	int a;

staticdemo(){

				System.out.println("demo");
}


	static void prn(){
	staticdemo ob=new staticdemo();
		ob.a=44;
		System.out.println(ob.a);
	}


		static
		{
		double ii;
		double yy;

			System.out.println("static");
			ii=Math.sqrt(2.0);
			yy=Math.sqrt(3.0);
		}
}

class statictest{
	int i;
	static int y;

	public static void main(String[] args){
		System.out.println("staticTest");

		statictest wow=	new statictest();
			System.out.println(staticdemo.j);
staticdemo sd=new staticdemo();

								System.out.println(staticdemo.j);
	}
}
