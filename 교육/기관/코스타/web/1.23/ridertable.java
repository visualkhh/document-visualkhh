import java.io.*;
class ridertable{
	public static void main(String[] args) throws IOException{
		System.out.println("#RiderTable#");


int rider[][]=new int[7][];

int down=1;


//rider[4]=new int[2];

//System.out.println(rider.length);

//불규칙배열생성
				for(int i=0;i<rider.length;i++)
				{

				if(i==5)down=6;
					for(int y=0;y<rider.length-down+2;y++)
					{
		
					if(y==rider.length-down+1)
					{
					rider[i]=new int[y];
					}
	
					//rider[i][y]=System.in.read()-48;
					//System.in.skip(2);

					
					}

				}
//불규칙배열 삽입

char day[]={'월','화','수','목','금','토','일'};
		for(int i=0;i<rider.length;i++)
		{

		System.out.println("++++++++++++++++++++"+day[i]);		
			
			for(int y=0;y<rider[i].length;y++)
			{
		
					rider[i][y]=System.in.read()-48;
					System.in.skip(2);
			
			}

		System.out.println("++++++++++++++++++++"+day[i]+"끝");

		}



//불규칙배열 출력
		for(int i=0;i<rider.length;i++)
		{

System.out.println(day[i]+"---------------------------------------------------------");
			for(int y=0;y<rider[i].length;y++)
			{
		
				System.out.print("\t"+rider[i][y]);
			
			}
			System.out.println();

		}

	}
}
