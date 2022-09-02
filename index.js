

    $("form").submit(function(e){
        e.preventDefault();
        var name = $("input[name='name']").val();
        var stid = $("input[name='stid']").val();
        var marks = $("input[name='marks']").val();

        $(".data-table tbody").append("<tr data-name='"+name+"' data-stid='"+stid+"' data-marks='"+marks+"'><td>"+name+"</td><td>"+stid+"</td><td>"+marks+"</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");

        $("input[name='name']").val('');
        $("input[name='stid']").val('');
        $("input[name='marks']").val('');
    });

    $("body").on("click", ".btn-delete", function(){
        $(this).parents("tr").remove();
    });

    $("body").on("click", ".btn-edit", function(){
        var name = $(this).parents("tr").attr('data-name');
        var stid = $(this).parents("tr").attr('data-stid');
        var marks = $(this).parents("tr").attr('data-marks');

        $(this).parents("tr").find("td:eq(0)").html('<input name="edit_name" value="'+name+'">');
        $(this).parents("tr").find("td:eq(1)").html('<input name="edit_stid" value="'+stid+'">');
        $(this).parents("tr").find("td:eq(2)").html('<input name="edit_marks" value="'+marks+'">');

        $(this).parents("tr").find("td:eq(2)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
        $(this).hide();
    });

    $("body").on("click", ".btn-cancel", function(){
        var name = $(this).parents("tr").attr('data-name');
        var stid = $(this).parents("tr").attr('data-stid');
        var marks = $(this).parents("tr").attr('data-marks');

        $(this).parents("tr").find("td:eq(0)").text(name);
        $(this).parents("tr").find("td:eq(1)").text(stid);
        $(this).parents("tr").find("td:eq(2)").text(marks);

        $(this).parents("tr").find(".btn-edit").show();
        $(this).parents("tr").find(".btn-update").remove();
        $(this).parents("tr").find(".btn-cancel").remove();
    });

    $("body").on("click", ".btn-update", function(){
        var name = $(this).parents("tr").find("input[name='edit_name']").val();
        var stid = $(this).parents("tr").find("input[name='edit_stid']").val();
        var marks = $(this).parents("tr").find("input[name='edit_marks']").val();

        $(this).parents("tr").find("td:eq(0)").text(name);
        $(this).parents("tr").find("td:eq(1)").text(stid);
        $(this).parents("tr").find("td:eq(2)").text(marks);

        $(this).parents("tr").attr('data-name', name);
        $(this).parents("tr").attr('data-stid', stid);
        $(this).parents("tr").attr('data-marks', marks);

        $(this).parents("tr").find(".btn-edit").show();
        $(this).parents("tr").find(".btn-cancel").remove();
        $(this).parents("tr").find(".btn-update").remove();
    });
