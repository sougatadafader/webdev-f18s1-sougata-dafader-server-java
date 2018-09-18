function myFunction() {
		var table = document.getElementById("myTable");
		var row = table.insertRow(1);
		row.classname = "table-dark";
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var title = document.getElementById("CrTitle").value;
		var icon_doc = '<i class="material-icons" style="background-color:blue; color:white">subject</i>';
		var icon_cross = '<i class="material-icons">close</i>';
		if(title)
		{
			cell1.innerHTML= String(icon_doc) + " <a class='course_title' href='courseEditor.template.client.html#"+String(title)+"'>" + String(title)+"</a>";

		}
		else
		{
			cell1.innerHTML = String(icon_doc) + " <a class='course_title' href='courseEditor.template.client.html#New Course'>New Course</a>";
		}
		cell2.innerHTML = "Me";
		cell3.innerHTML = new Date();
		cell4.innerHTML = String(icon_cross);
	}