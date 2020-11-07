package javaboard;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String[] postTitle = new String[10];
		String[] postContents = new String[10];	
		int[] ids = new int[10];
		int index = 0;
		
		int id = 1;
		
		ArrayList<Article> articles = new ArrayList<>();
	
		while(true) {
			System.out.print("명령어를 입력해주세요: ");
			String command = scan.nextLine();
			
			if(command.equals("exit")) {
				System.out.print("프로그램을 종료합니다.");
				break;
			}
			
			if(command.equals("add")) {
				
				
				System.out.print("게시물 제목을 입력해주세요: ");
				String title = scan.nextLine();
				
				System.out.print("게시물 내용을 입력해주세요: ");
				String body = scan.nextLine();
				
				System.out.print("게시물이 등록되었습니다~\n");
				
			
				Article article1 = new Article(id, title, body);
				articles.add(article1);
				index++;
				id++;
				
			}
			
			if(command.equals("list")) {
				System.out.println("====================");

				for(int i = 0; i < index; i++) {
					System.out.println("번호: " + articles.getId());
					System.out.println("제목: " + articles.getTitle());
					System.out.println("====================");
					
				}
			}
			
			if(command.equals("update")) {
					System.out.println("수정할 게시물 번호: ");
					String num = scan.nextLine();
					int targetId = Integer.parseInt(num);
					int existFlag = 1;
					
					for(int i = 0; i < articles.size(); i++) {
						if(targetId == articles.getId()) {
							existFlag = 2;
							
							System.out.println("제목: ");
							Article article2 = new Article(id, title, body);
							
							articles.set(index, article2);
							System.out.println("수정");
						}
						
					}	
					if(existFlag == 1) {
						System.out.println("없는 게시물입니다.");
						
					}
			}
		
			if(command.equals("delete")) {
				
			}
			
		}
	}
}

