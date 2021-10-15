package com.Yoo.blogpractice.test;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.Yoo.blogpractice.repository.BoardRepository;
import com.Yoo.blogpractice.service.BoardService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class TestRestController {

	private final BoardService boardService;
	
	@GetMapping("test/model/{id}")
	public Model testModel(@PathVariable int id ,Model model) {
		return model.addAttribute("board", boardService.글상세보기(id));
		
	}
}
