(function($){
	$.fn.focusText = function(){
		return this.each(function(){
			var $this = $(this);
			$this.data('focustext', $this.val());

			$this.focus(function(){
				var val = $this.data('focustext');
				if(val == $this.val()){
					$this.val('');
				}
			});

			$this.blur(function(){
				if($this.val() == ''){
					$this.val($this.data('focustext'));
				}
			});

		});
	}
})(jQuery);