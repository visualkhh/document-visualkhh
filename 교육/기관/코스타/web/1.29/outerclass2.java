class outerclass2{

	private int i;




class innerclass2
	{
	private int j;	

		void print()
		{
		System.out.println("aa"+i);

		}
	

	}



	public static void main(String[] args){
		System.out.println("class");


outerclass2 ob=new outerclass2();
innerclass2 ob2= ob.new innerclass2();
//innerclass2 ob2=new outercalss2().innerclass2();
innerclass2 ob22=new outercalss2().innerclass2();
ob2.print();
	}


}
