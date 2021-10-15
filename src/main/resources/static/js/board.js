let index = {
	init: function() {
		$("#btn-save").on("click", ()=> {
			this.save();
		});
		$("#btn-update").on("click", () => {
			this.update();
		});
		$("#btn-delete").on("click", () => {
			this.deleteById();
		});
		$("#btn-reply-save").on("click", () => {
			this.replySave();
		});
		
	},

	save: function() {
		let data = {
			title: $("#title").val(),
			content: $("#content").val(),
		};

		$.ajax({
			type: "POST",
			url: "/api/board",
			data: JSON.stringify(data),
			contentType: "application/json; charset=utf-8",
			dataType: "json"
		}).done(function(resp) {
			alert("글쓰기가 완료되었습니다.");
			location.href = "/user/home";
			console.log(resp);
		}).fail(function(error) {
			alert(JSON.stringify(error));
		});
	},

	update: function() {
		let id = $("#id").val();

		let data = {
			title: $("#title").val(),
			content: $("#content").val(),
		};

		$.ajax({
			type: "PUT",
			url: "/api/board/update/" + id,
			data: JSON.stringify(data),
			contentType: "application/json; charset=utf-8",
			dataType: "json"
		}).done(function(resp) {
			alert("글수정가 완료되었습니다.");
			location.href = "/user/home";
			console.log(resp);
		}).fail(function(error) {
			alert(JSON.stringify(error));
		});
	},
	
	deleteById: function() {
		let id = $("#id").text(); 

		$.ajax({
			type: "DELETE",
			url: "/api/board/delete/" + id,
			dataType: "json"
		}).done(function(resp) {
			alert("글삭제가 완료되었습니다.");
			location.href = "/user/home";
			console.log(resp);
		}).fail(function(error) {
			alert(JSON.stringify(error));
		});
	},
	
	replySave: function() {
		let data = {
			userId: $("#userId").val(),
			boardId: $("#boardId").val(),
			content: $("#reply-content").val()
		};

		$.ajax({
			type: "POST",
			url: `/api/board/reply/${data.boardId}`,
			data: JSON.stringify(data),
			contentType: "application/json; charset=utf-8",
			dataType: "json"
		}).done(function(resp) {
			alert("댓글작성이 완료되었습니다.");
			location.href = `/user/board/${data.boardId}`;
			console.log(resp);
		}).fail(function(error) {
			alert(JSON.stringify(error));
		});
	},
	
	replyDelete : function(boardId, replyId) {

		$.ajax({
			type: "DELETE",
			url: `/api/board/${boardId}/replydelete/${replyId}`,
			dataType: "json"
		}).done(function(resp) {
			alert("댓글 삭제가 완료되었습니다.");
			location.href = `/user/board/${boardId}`;
			console.log(resp);
		}).fail(function(error) {
			alert(JSON.stringify(error));
		});
	}
	
}

index.init();