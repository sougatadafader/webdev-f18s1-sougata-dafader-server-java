function guid() {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		s4() + '-' + s4() + s4() + s4();
	}
	var course_name = window.location.hash;
	if(course_name !='')
	{
		course_name = course_name.replace('#','');
		course_name = course_name.replace(/%20/g,' ')
		$('#course_name').html(course_name);
	}
	$('.add-module').click(function(evt)
	{
		evt.preventDefault();
		var module_name = 'New Module';
		var inp_name = $('#module-add').val();
		if(inp_name != '')
		{
			module_name = inp_name;
		}
		var html_add = '<div class="module">'+module_name+'<a href="#" class="remove-module"><i class="material-icons pr-3">close</i></a></div>';
		$('#module_container').append(html_add);
		$('.remove-module').click(function(evt){
			evt.preventDefault();
			//alert('Clicked');
			$('#myModal').modal('show');
		});
		$('.module').click(function(){
			var el = $(this);
			$('.module.selected').removeClass('selected');
			el.addClass('selected');
		});
	});
	$('.topic-adder-btn').click(function(evt){
		evt.preventDefault();
		//alert('Called');
		var len = $('.nav-pills li').length;
		len++;
		var topic = 'Topic '+len;
		var topic_html = $('<li class="nav-item"><a class="nav-link btn btn-dark" href="#">'+topic+'</a></li>');
		$('.nav-pills').append(topic_html);
		topic_html.click(function(){
			var src= $('#widget-template').html();
			var tmp = Handlebars.compile(src);
			$('#topic-widgets').html(tmp());
			$('#add-widget').click(function(evt){
				evt.preventDefault();
				var src = $('#widget-add-template').html();
				var tmp = Handlebars.compile(src);
				var uuid = guid();
				var el = {guid:uuid};
				$('.widgets').append(tmp(el));
				$('.del-widget').click(function(evt){

					evt.preventDefault();
					var el = $(this);
					el.closest('.new-widget').remove();
				});
				$('#change-widget-'+uuid).change(function(){
					var el = $(this);
					//alert('Function called');
					$('.widgu').each(function(){
						var th = $(this);
						if(!th.hasClass('d-none'))
						{
							th.addClass('d-none');
						}
					});
					var val = el.val();
					//alert(val);
					$('#'+val+'-'+uuid).removeClass('d-none');
					var heading = $('#change-widget-'+uuid+' option[value="'+val+'"]').attr('data-head');
					$('#widg-heading-'+uuid).html(heading);
				});
				$('#text-'+uuid).change(function(){
					var el = $('#text-'+uuid);
					var val = el.val();
					var preview = el.attr('data-preview');
					var size = $('#size-'+uuid).val();
					var preview_html = '<'+size+'>'+val+'</'+size+'>';
					//alert(preview_html);
					$('#'+preview).html(preview_html);
				});
				$('#size-'+uuid).change(function(){
					$('#text-'+uuid).trigger('change');
				});
				$('#ptext-'+uuid).change(function(){
						var val = $(this).val();
						$('#pprev-'+uuid).html(val);
				});
				$('#linktext-'+uuid).change(function(){
					var linktext = $('#linktext-'+uuid).val();
					var linkurl = $('#linkurl-'+uuid).val();
					$('#linkprev-'+uuid).html(linktext).attr('href',linkurl);
				});
				$('#linkurl-'+uuid).change(function(){
					$('#linktext-'+uuid).trigger('change');
				});
				$('#linktext-'+uuid).trigger('change');
				$('#itext-'+uuid).change(function(){
					var img_link = 'https://img23.pixhost.to/images/247/82178283_noimage_thumbnail_120x92_v2.png';
					var val = $(this).val();
					if(val != '')
					{
						img_link = val;
					}
					$('#iprev-'+uuid).attr('src',img_link);
				});
				$('#itext-'+uuid).trigger('change');
				$('#ltext-'+uuid).change(function()
				{
					var list = $('#ltext-'+uuid).val();
					var arr = list.split('\n');
					var obj = {items:[]};
					for(var i=0;i<arr.length;i++)
					{
						var item = {itemname:arr[i]};
						obj.items.push(item);
					}
					var type = $('#ltype-'+uuid).val();
					var src = $('#'+type+'-template').html();
					var tmp = Handlebars.compile(src);
					$('#lprev-'+uuid).html(tmp(obj));
				});
				$('#ltype-'+uuid).change(function(){
					$('#ltext-'+uuid).trigger('change');
				});
			});
		});
	});