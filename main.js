function getPara1()
	{
		var inputs = [];
		for(var i = 1 ; i <=6 ; i++)
		{
			inputs.push(document.getElementById("para1_input_" + i).value);
		}
	document.getElementById("para1_output").innerHTML = inputs.join(". ");
	}

	function getPara2()
	{
		var inputs = [];
		for(var i = 1 ; i <=6 ; i++)
		{
			inputs.push(document.getElementById("para2_input_" + i).value);
		}
	document.getElementById("para2_output").innerHTML = inputs.join(". ");
	}
