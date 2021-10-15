package com.Yoo.blogpractice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.Yoo.blogpractice.service.BoardService;


@Controller
public class BoardController {
	
	@Autowired
	private BoardService boardService;
	
	// model 은 request 정보라고 생각하자 Controller 에서 페이지를 응답해줄때, 이 model의 정보를 가지고 간다.
	// @PageableDefault 특정 페이지를 호출
	@GetMapping("/user/home")
	public String userHome(Model model, @PageableDefault(size = 3 , sort = "id" , direction = Sort.Direction.DESC) Pageable pageable) {
		model.addAttribute("boards", boardService.글목록(pageable));
		return "/myblog/myhome";
	}
	
	@GetMapping("/user/board/{id}")
	public String boardDetail(@PathVariable int id, Model model) {
		model.addAttribute("board", boardService.글상세보기(id));
		return "/board/detail";
	}
	
	@GetMapping("/user/board/{id}/updateForm")
	public String boardUpdate(@PathVariable int id, Model model) {
		model.addAttribute("board", boardService.글상세보기(id));
		return "/board/updateForm";
	}
	
	@GetMapping("/user/board/saveForm")
	public String boardSaveForm() {
		return "/board/saveForm";
	}
	
	
	
}
