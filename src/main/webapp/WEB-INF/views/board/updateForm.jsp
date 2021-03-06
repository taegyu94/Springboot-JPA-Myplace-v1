<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ include file="../layout/header_blog.jsp"%>

<div class="container">
	<h1>글수정하기</h1>
	<br />
	<form>
		<h3>title</h3>
		<input type="hidden" id ="id" value = "${board.id }"/>
		<div class="form-group">
			<input value = "${board.title}" type="text" class="form-control" placeholder="Enter title" id="title">
		</div>

		<br />
		<h3>content</h3>
		<div class="form-group">
			<textarea class="form-control summernote" rows="5" id="content" >${board.content}</textarea>
		</div>

	</form>
	<br />
	<button id="btn-update" class="btn btn-primary">글수정완료</button>
</div>


<script>
	// 메인화면 페이지 로드 함수
	$(document).ready(function() {
		$('.summernote').summernote({
			placeholder : '내용을 작성하세요',
			height : 400,
			maxHeight : 400
		});
	});
</script>

<script src="/js/board.js"></script>
<%@ include file="../layout/footer_blog.jsp"%></html>