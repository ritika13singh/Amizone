$(document).ready(function () {
        var ar = $('ul#tasks li div.class-count span')
        console.log(ar);                        //1
        var tmp = []
        $.each(ar, function (i, val) {
            tmp[i] = (val.innerHTML)
        })
        console.log(tmp)                                    //2
        var total = []
        var present = []
        $.each(tmp, function (i, val) {
            var t = []
            t = val.split('/')
            present[i] = parseInt(t[0])
            total[i] = parseInt(t[1])

        })
        console.log(present)                        //3
        console.log(total)                          //4
        var finalAttendance=0
        var totalpresent = 0
        var totaltotal = 0
        $.each(present, function (i, val) {
            totalpresent += val
        })
        console.log("total present:"+totalpresent); //5
        $.each(total, function (i, val) {
            totaltotal += val
        })
        console.log("total classes held:"+totaltotal);  //6
        finalAttendance = (totalpresent * 100) / totaltotal
        console.log(finalAttendance)
         $('h4.widget-header').click(function(){
             alert("Attendance:"+finalAttendance)

         })

    })
