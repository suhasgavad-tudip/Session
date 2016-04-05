
$(document).ready(function(){
        $("#StudentUpdateFill").hide();
	$("#StudentDivIns").hide();
	$("#StudentDivDel").hide();
	$("#StudentDivUpdate").hide(); 
    $("#DisplayInsDelUpdate").hide();
	
	 $("#AddRec").click(function(){
		$("#DisplayInsDelUpdate").show();
		$("#StudentDivIns").show();
	        $("#StudentDivDel").hide();
		$("#StudentDivUpdate").hide();
		$("#StudentUpdateFill").hide();
	});
	
	$("#DelRec").click(function(){
		$("#DisplayInsDelUpdate").show();
		$("#StudentDivDel").show();
		$("#StudentDivIns").hide();
		$("#StudentDivUpdate").hide();
		$("#StudentUpdateFill").hide();
	});
	
	$("#updRec").click(function(){
		$("#DisplayInsDelUpdate").show();
		$("#StudentDivUpdate").show();
		$("#StudentDivIns").hide();
		$("#StudentDivDel").hide();
		$("#StudentUpdateFill").hide();
	});
	


});

function StudentInfo(){
	studentList(stud);
}

function studentList(arr){
	var out = "<table border=1 width=100%><tr><th>First Name</th><th>Last Name</th><th>Roll Number</th> <th>Subjects</th></tr>";
    var row;
	
    for(row = 0; row < arr.length; row++) {
        out += "<tr><td>" + arr[row].firstName + "</td><td >" + 
			  arr[row].lastName + "</td><td >" +
			  arr[row].rollNo + "</td><td >" +
			  arr[row].subjects +"</td></tr>" ;
	}
	out +="</table>";
	document.getElementById("StudentDivDis").innerHTML = out;
}



function addStudentInfo(){
	var newStudFirstName=document.getElementById("FirstNameId").value;
	var newStudLastName=document.getElementById("LastNameId").value;
	var newStudRollNo=document.getElementById("RollNoId").value;
	var newStudSubjects=document.getElementById("SubjectName").value;
	
	var StudNew={"firstName":newStudFirstName ,
			"lastName":newStudLastName ,
			"rollNo":newStudRollNo ,
			"subjects":newStudSubjects
			};
	
	stud.push(StudNew);
	studentList(stud);
	
	document.getElementById("FirstNameId").value="";
	document.getElementById("LastNameId").value="";
	document.getElementById("RollNoId").value="";
	document.getElementById("SubjectName").value="";
	
	
	$("#DisplayInsDelUpdate").hide();
	$("#StudentDivIns").hide();
	
}


function deleteStudentInfo(){
	var delStudFirstName=document.getElementById("deleteByName").value;
	delStudData(stud,delStudFirstName);
}

function delStudData(arr,DName){
	var i;
	for(i=0;i<arr.length;i++)
	{
		if(arr[i].firstName==DName)
		{
			stud.splice(i,1);
			studentList(stud);
			document.getElementById("deleteByName").value="";
		}
	}
	
        $("#DisplayInsDelUpdate").hide();
	$("#StudentDivDel").hide();
	$("#StudentUpdateFill").hide();
}



var oindex=100;
function updateStudentInfo()
{
	var count=0;
	var upName=document.getElementById("UpdateByName").value;
	for(i=0;i<stud.length;i++)
	{
		if(stud[i].firstName==upName)
		{
			oindex=i;
			count=1;
			$("#StudentUpdateFill").show();
			break;
		}
		
	}
	if(count==0)
	{
		alert("Record is not in Database");
		document.getElementById("UpdateByName").value="";
	}

	
}

function updateStudentTable()
{
	
	
	var oldFname=stud[oindex].firstName;
	var oldLname=stud[oindex].lastName;
	var oldRollno=stud[oindex].rollNo;
	var oldSubjects=stud[oindex].subjects;
	
	stud[oindex].firstName=document.getElementById("UpdateFirstName").value;
	stud[oindex].lastName=document.getElementById("UpdateLastName").value;
	stud[oindex].rollNo=document.getElementById("UpdateRollNo").value;
	stud[oindex].subjects=document.getElementById("UpdateSubjectName").value;
			
	
	studentList(stud);
	
	document.getElementById("UpdateByName").value="";
	document.getElementById("UpdateFirstName").value="";
	document.getElementById("UpdateLastName").value="";
	document.getElementById("UpdateRollNo").value="";
	document.getElementById("UpdateSubjectName").value="";
		
	$("#DisplayInsDelUpdate").hide();
	$("#StudentDivUpdate").hide();
}